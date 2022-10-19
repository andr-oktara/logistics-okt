import { Warehouse } from "./warehouse.entitity";
import { WarehouseStorage } from "./warehouseStorage.entity";

export interface WarehouseServiceI {
  getStorages(): Promise<WarehouseStorage[]>;
  getFreeStorages(): Promise<WarehouseStorage[]>;
  isStorageFree(storageId: WarehouseStorage["id"]): Promise<boolean>;
  getWarehouse(): Promise<Warehouse>;
}

export interface WarehouseStore {
  getStorages(): Promise<WarehouseStorage[]>;
  isStorageFree(storageId: WarehouseStorage["id"]): Promise<boolean>;
  getFreeStorages(): Promise<WarehouseStorage[]>;
  getWarehouse(): Promise<Warehouse>;
}
