import { LoggerHandler } from "@oktara-logistics-utils/logger";
import { WarehouseServiceI, WarehouseStore } from "./types";
import { Warehouse } from "./warehouse.entitity";
import { WarehouseStorage } from "./warehouseStorage.entity";

export type WarehouseServiceProps = {
  logger: LoggerHandler;
  repository: WarehouseStore;
};

export class WarehouseService implements WarehouseServiceI {
  private logger: LoggerHandler;
  private repository: WarehouseStore;

  constructor(props: WarehouseServiceProps) {
    this.logger = props.logger;
    this.repository = props.repository;
  }

  getWarehouse(): Promise<Warehouse> {
    return this.repository.getWarehouse();
  }

  getStorages(): Promise<WarehouseStorage[]> {
    return this.repository.getStorages();
  }

  getFreeStorages(): Promise<WarehouseStorage[]> {
    return this.repository.getFreeStorages();
  }

  async isStorageFree(storageId: string): Promise<boolean> {
    return this.repository.isStorageFree(storageId);
  }
}
