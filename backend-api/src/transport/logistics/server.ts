import { Logger } from "@oktara-logistics-utils/logger";
import express from "express";
import * as routes from "./routes";
import rtracer from "cls-rtracer";
import cors from "cors";

const logger = new Logger({ appName: "LOGISTICS_API" });

export const initLogisticsAPI = () => {
  const port = process.env.API_PORT || 4001;

  const app = express();
  app.use(rtracer.expressMiddleware());
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(routes.PackageRouter(logger));
  app.use(routes.WarehouseRouter(logger));

  app.listen(port, () => {
    logger.info(`🚀 Logistics API is running on port ${port}.`);
  });
};
