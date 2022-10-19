import { PackageServiceClient } from "@oktara-logistics-clients/services/package.service.client";
import { Package } from "@oktara-logistics-database/entityMap";
import { errorHandler } from "@oktara-logistics-utils/errors/error.handler";
import { LoggerHandler } from "@oktara-logistics-utils/logger";
import express from "express";
import { param, validationResult } from "express-validator";

export const DeliverPackageRoute = (logger: LoggerHandler): express.Router => {
  const router = express.Router();
  const packageService = new PackageServiceClient().init({ logger });

  router.put(
    "/package/:id/deliver",
    param("id").isUUID("4"),
    async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ validationErrors: errors.array() });
      }

      const receivedData = req.params as Pick<Package, "id">;

      try {
        await packageService.deliver(receivedData.id);

        res.sendStatus(200);
      } catch (e) {
        logger.error(e);
        return res.status(400).json(errorHandler(e));
      }
    }
  );

  return router;
};
