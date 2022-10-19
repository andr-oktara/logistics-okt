import "reflect-metadata";
import AppDatasource, {
  initializeDatasource,
} from "@oktara-logistics-database/datasource";
import { initLogisticsAPI } from "./transport/logistics/server";
import { doSeed } from "@oktara-logistics-infrastructure/seed/seed.action";
import { SeedRunner } from "@oktara-logistics-infrastructure/seed/seed.runner";

initializeDatasource(AppDatasource)
  .then(() => {
    if (process.env.NODE_ENV !== "production") {
      doSeed(new SeedRunner()).then(() => initLogisticsAPI());
    } else {
      initLogisticsAPI();
    }
  })
  .catch((error) => console.log(error));
