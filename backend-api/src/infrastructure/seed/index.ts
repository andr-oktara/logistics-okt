import AppDatasource, {
  initializeDatasource,
} from "@oktara-logistics-database/datasource";
import { doSeed } from "./seed.action";
import { SeedRunner } from "./seed.runner";

initializeDatasource(AppDatasource)
  .then(() => {
    doSeed(new SeedRunner());
  })
  .catch((error) => console.error(error));
