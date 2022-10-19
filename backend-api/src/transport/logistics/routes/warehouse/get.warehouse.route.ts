import { WarehouseServiceClient } from "@oktara-logistics-clients/services/warehouse.service.client";
import { LoggerHandler } from "@oktara-logistics-utils/logger";
import express from "express";

export const GetWarehouseRoute = (logger: LoggerHandler): express.Router => {
  const router = express.Router();
  const service = new WarehouseServiceClient().init({ logger });

  router.get("/warehouse", async (req, res) => {
    res.status(200).send({
      data: await service.getWarehouse(),
    });
  });

  return router;
};
