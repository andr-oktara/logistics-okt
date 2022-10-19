import { PackageRepository } from "@oktara-logistics-internal/package/package.repository";
import {
  PackageService,
  PackageServiceProps,
} from "@oktara-logistics-internal/package/package.service";
import { Logger } from "@oktara-logistics-utils/logger";
import { ServiceClient } from "./types";
import { WarehouseServiceClient } from "./warehouse.service.client";

export class PackageServiceClient
  implements ServiceClient<PackageService, Partial<PackageServiceProps>>
{
  init(props: Partial<PackageServiceProps>): PackageService {
    const logger =
      props.logger ||
      new Logger({ appName: "oktara_logistics-package_service" });

    return new PackageService({
      logger,
      repository: props.repository || new PackageRepository(),
      storageService:
        props.storageService || new WarehouseServiceClient().init({ logger }),
    });
  }
}
