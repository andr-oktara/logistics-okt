import { DBFactory } from "./types";
import AppDataSource from "@oktara-logistics-database/datasource";
import { Warehouse } from "@oktara-logistics-database/entityMap";
import { faker } from "@faker-js/faker";

export class WarehouseFactory implements DBFactory<Omit<Warehouse, "id">> {
  entity = Warehouse;
  values: Omit<Warehouse, "id"> = {
    title: faker.company.name(),
  };
  create = (values: Partial<Warehouse>): Promise<Warehouse> => {
    return AppDataSource.getRepository(this.entity).save({
      ...this.values,
      ...values,
    });
  };

  upsert = async (
    values: Partial<Warehouse> & { id: Warehouse["id"] }
  ): Promise<Warehouse> => {
    const repo = AppDataSource.getRepository(Warehouse);
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
