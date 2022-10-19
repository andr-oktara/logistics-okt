import { WarehouseServiceClient } from "@oktara-logistics-clients/services/warehouse.service.client";
import { LoggerHandler } from "@oktara-logistics-utils/logger";
import express from "express";

export const ListFreeSlotsRoute = (logger: LoggerHandler): express.Router => {
  const router = express.Router();
  const service = new WarehouseServiceClient().init({ logger });

  router.get("/warehouse/free-slots", async (req, res) => {
    res.status(200).send({
      data: await service.getFreeStorages(),
    });
  });

  return router;
};
