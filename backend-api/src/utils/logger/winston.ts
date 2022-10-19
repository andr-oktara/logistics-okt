/* istanbul ignore file */
import {
  createLogger,
  Logger as DefaultLogger,
  transports,
  format,
  LoggerOptions,
} from "winston";
import { LoggerHandler } from "@oktara-logistics-utils/logger/types";
import { Tracer } from "./tracer";

type LoggerHandlerOptions = {
  appName: string;
};

export class WinstonLogger implements LoggerHandler {
  private logger: DefaultLogger;
  private tracer: Tracer = new Tracer();

  constructor(options: LoggerHandlerOptions) {
    const appName = options.appName;
    const winstonOptions: LoggerOptions = {
      exitOnError: false,
      level: "info",
    };

    winstonOptions.transports = [new transports.Console()];
    winstonOptions.format = format.combine(
      format.errors({ stack: true }),
      format.colorize({ level: true, message: true }),
      format.timestamp(),
      format.json(),
      format.printf(({ timestamp, level, message, stack }) => {
        return `[${appName} - ${timestamp}] [traceId: ${
          this.tracer.traceId
        }] ${level}: ${message} ${stack?.toString() || ""}`;
      })
    );

    this.logger = createLogger(winstonOptions);
  }

  public info(message: string): void {
    this.logger.info(this.getMessage(message));
  }

  public warn(message: string): void {
    this.logger.warn(this.getMessage(message));
  }

  public error(message: string): void {
    this.logger.error(this.getMessage(message));
  }

  public debug(message: string): void {
    this.logger.debug(this.getMessage(message));
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private getMessage(message: any): object {
    if (typeof message === "object") {
      message.traceId = this.tracer.traceId;
      return message;
    }

    return {
      message,
      traceId: this.tracer.traceId,
    };
  }
}
