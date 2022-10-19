import { PackageServiceClient } from "@oktara-logistics-clients/services/package.service.client";
import { CreatePackageInput } from "@oktara-logistics-internal/package/types";
import { errorHandler } from "@oktara-logistics-utils/errors/error.handler";
import { LoggerHandler } from "@oktara-logistics-utils/logger";
import express from "express";
import { body, validationResult } from "express-validator";

export const CreatePackageRoute = (logger: LoggerHandler): express.Router => {
  const router = express.Router();
  const packageService = new PackageServiceClient().init({ logger });

  router.post(
    "/package",
    body("title").isString().notEmpty(),
    body("storageId").optional().isUUID("4"),
    body("destination.recipientName").isString().notEmpty(),
    body("destination.street").isString().notEmpty(),
    body("destination.number").isString().notEmpty(),
    body("destination.city").isString().notEmpty(),
    body("destination.state").isString().notEmpty(),
    body("destination.country").isString().notEmpty(),
    async (req, res) => {
      try {
        const receivedData = { query: req.query, body: req.body };

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ validationErrors: errors.array() });
        }

        const input = receivedData.body as CreatePackageInput;
        const newPackage = await packageService.create(input);

        res.status(201).send({ data: newPackage });
      } catch (e) {
        logger.error(e);
        return res.status(400).json(errorHandler(e));
      }
    }
  );

  return router;
};
