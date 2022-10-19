import { LoggerHandler } from "@oktara-logistics-utils/logger";
import express from "express";
import { CreatePackageRoute } from "./create.package.route";
import { DeliverPackageRoute } from "./deliver.package.route";
import { ListPackageRoute } from "./list.package.route";
import { ListShippedPackagesRoute } from "./list.shipped.package.route";
import { ReturnPackageRoute } from "./return.package.route";
import { ShipPackageRoute } from "./ship.package.route";

export const PackageRouter = (logger: LoggerHandler): express.Router => {
  const router = express.Router();
  router.use(CreatePackageRoute(logger));
  router.use(ShipPackageRoute(logger));
  router.use(ListPackageRoute(logger));
  router.use(DeliverPackageRoute(logger));
  router.use(ReturnPackageRoute(logger));
  router.use(ListShippedPackagesRoute(logger));
  return router;
};
