import { LoggerHandler } from "@oktara-logistics-utils/logger";

export type BaseServiceProps = {
  logger: LoggerHandler;
};

export class BaseService {
  logger: LoggerHandler;

  constructor({ logger }: BaseServiceProps) {
    this.logger = logger;
  }
}
