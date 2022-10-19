import { WarehouseStore } from "./types";
import AppDatasource from "@oktara-logistics-database/datasource";
import { Warehouse } from "./warehouse.entitity";
import { WarehouseStorage } from "./warehouseStorage.entity";
import { PackageStatus } from "@oktara-logistics-internal/package/constants";
import { Package } from "@oktara-logistics-database/entityMap";

export class WarehouseRepository implements WarehouseStore {
  private warehouseDB = AppDatasource.getRepository(Warehouse);
  private packageDB = AppDatasource.getRepository(Package);
  private warehouseStorageDB = AppDatasource.getRepository(WarehouseStorage);

  async getWarehouse(): Promise<Warehouse> {
    const [warehouse] = await this.warehouseDB.find();
    warehouse.storageLocations = await this.getStorages();

    return warehouse;
  }

  getStorages(): Promise<WarehouseStorage[]> {
    return this.warehouseStorageDB.find({ order: { name: "ASC" } });
  }

  getFreeStorages(): Promise<WarehouseStorage[]> {
    const subquery = this.packageDB
      .createQueryBuilder("package")
      .where(`package.status = '${PackageStatus.stored}'`)
      .select(["package.storage_id"]);

    return this.warehouseStorageDB
      .createQueryBuilder("warehouseStorage")
      .where(`warehouseStorage.id NOT IN (${subquery.getQuery()})`)
      .addOrderBy("name", "ASC")
      .getMany();
  }

  async isStorageFree(storageId: string): Promise<boolean> {
    const isFree = await this.warehouseStorageDB.countBy({
      packages: [{ storageId, status: PackageStatus.stored }],
    });

    return isFree === 0;
  }
}
