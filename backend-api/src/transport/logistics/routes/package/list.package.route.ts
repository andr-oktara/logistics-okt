import { PackageServiceClient } from "@oktara-logistics-clients/services/package.service.client";
import { LoggerHandler } from "@oktara-logistics-utils/logger";
import express from "express";

export const ListPackageRoute = (logger: LoggerHandler): express.Router => {
  const router = express.Router();
  const service = new PackageServiceClient().init({ logger });

  router.get("/packages", async (req, res) => {
    const receivedData = { query: req.query, body: req.body };
    logger.info(JSON.stringify(receivedData));
    res.status(200).send({
      data: await service.getAllPackages(),
    });
  });

  return router;
};
