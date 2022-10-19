import { DBFactory } from "@oktara-logistics-utils/tests/factory/types";
import { Seeder } from "@oktara-logistics-infrastructure/seed/seed.runner";
import { WarehouseFactory } from "@oktara-logistics-utils/tests/factory";
import { Warehouse } from "@oktara-logistics-internal/warehouse/warehouse.entitity";

export const WAREHOUSE_ID = "0fa94f6b-61ca-4816-b089-b45119f4143d";

export class WarehouseSeeder implements Seeder<Warehouse> {
  get factory(): DBFactory<Partial<Warehouse>> {
    return new WarehouseFactory();
  }

  get data(): Warehouse[] {
    return [
      {
        id: WAREHOUSE_ID,
        title: "My Warehouse",
      },
    ];
  }
}
