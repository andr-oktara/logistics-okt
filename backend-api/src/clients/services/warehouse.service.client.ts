import { WarehouseRepository } from "@oktara-logistics-internal/warehouse/warehouse.repository";
import {
  WarehouseService,
  WarehouseServiceProps,
} from "@oktara-logistics-internal/warehouse/warehouse.service";
import { Logger } from "@oktara-logistics-utils/logger";
import { ServiceClient } from "./types";

export class WarehouseServiceClient
  implements ServiceClient<WarehouseService, Partial<WarehouseServiceProps>>
{
  init(props: Partial<WarehouseServiceProps>): WarehouseService {
    return new WarehouseService({
      logger:
        props.logger ||
        new Logger({ appName: "oktara_logistics-warehouse_service" }),
      repository: props.repository || new WarehouseRepository(),
    });
  }
}
