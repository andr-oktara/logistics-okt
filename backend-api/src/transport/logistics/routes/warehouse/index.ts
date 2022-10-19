import { LoggerHandler } from "@oktara-logistics-utils/logger";
import express from "express";
import { GetWarehouseRoute } from "./get.warehouse.route";
import { ListFreeSlotsRoute } from "./list.package.route";

export const WarehouseRouter = (logger: LoggerHandler): express.Router => {
  const router = express.Router();
  router.use(ListFreeSlotsRoute(logger));
  router.use(GetWarehouseRoute(logger));
  return router;
};
