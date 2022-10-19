export declare abstract class DBFactory<T> {
  abstract get entity(): new (...args: unknown[]) => T;
  abstract get values(): T;
  abstract create(values?: Partial<T>, props?: unknown): Promise<T>;
  abstract upsert(values?: Partial<T>, props?: unknown): Promise<T>;
  abstract clearRows?(rows: Partial<T>[]): Promise<void>;
  constructor();
}
