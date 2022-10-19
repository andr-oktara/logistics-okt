import { DBFactory } from "./types";
import AppDataSource from "@oktara-logistics-database/datasource";
import { WarehouseStorage } from "@oktara-logistics-database/entityMap";
import { faker } from "@faker-js/faker";

export class WarehouseStorageFactory
  implements DBFactory<Omit<WarehouseStorage, "id">>
{
  entity = WarehouseStorage;
  values: Omit<WarehouseStorage, "id"> = {
    warehouseId: null,
    name: faker.name.firstName(),
  };

  create = (values: Partial<WarehouseStorage>): Promise<WarehouseStorage> => {
    return AppDataSource.getRepository(this.entity).save({
      ...this.values,
      ...values,
    });
  };

  upsert = async (
    values: Partial<WarehouseStorage> & { id: WarehouseStorage["id"] }
  ): Promise<WarehouseStorage> => {
    const repo = AppDataSource.getRepository(WarehouseStorage);
    await repo.upsert(
      {
        ...this.values,
        ...values,
      },
      {
        conflictPaths: ["id"],
      }
    );

    return repo.findOneBy({ id: values.id });
  };
}
