import * as seeders from "./seeders";
import { SeedRunner } from "./seed.runner";

export const doSeed = async (runner: SeedRunner<unknown>) => {
  await runner.run(new seeders.WarehouseSeeder());
  await runner.run(new seeders.WarehouseStorageSeeder());
};
