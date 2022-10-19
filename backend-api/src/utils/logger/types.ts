export interface LoggerHandler {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  info(message: string, meta?: any): void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  warn(message: string, meta?: any): void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error(message: string, meta?: any): void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  debug(message: string, meta?: any): void;
}

export type LoggerCallback = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error?: any,
  level?: string,
  message?: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  meta?: any
) => void;
