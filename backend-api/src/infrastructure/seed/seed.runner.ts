import { DBFactory } from "@oktara-logistics-utils/tests/factory/types";

export class SeedRunner<T> {
  public async run(seeder: Seeder<T>): Promise<void> {
    const { data, factory } = seeder;
    const promises = data.map((entity) => {
      factory.upsert(entity);
    });

    await Promise.all(promises);
  }
}

export interface Seeder<T> {
  get factory(): DBFactory<Partial<T>>;
  get data(): T[];
}
