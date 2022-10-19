import { DBFactory } from "@oktara-logistics-utils/tests/factory/types";
import { Seeder } from "@oktara-logistics-infrastructure/seed/seed.runner";
import { WarehouseStorageFactory } from "@oktara-logistics-utils/tests/factory";
import { WarehouseStorage } from "@oktara-logistics-database/entityMap";
import { WAREHOUSE_ID } from "./warehouse.seeder";

export class WarehouseStorageSeeder implements Seeder<WarehouseStorage> {
  get factory(): DBFactory<Partial<WarehouseStorage>> {
    return new WarehouseStorageFactory();
  }

  get data(): WarehouseStorage[] {
    return [
      {
        id: "6729e4f7-9fb9-475c-a0ae-47529a562578",
        name: "SLOT 01",
        warehouseId: WAREHOUSE_ID,
      },
      {
        id: "15bcd07c-647b-488e-ba43-bf44d05ad544",
        name: "SLOT 02",
        warehouseId: WAREHOUSE_ID,
      },
      {
        id: "290afccc-8cb3-4b6e-8e27-0d5824e3c015",
        name: "SLOT 03",
        warehouseId: WAREHOUSE_ID,
      },
      {
        id: "214d1111-9786-4e46-87dd-4f6933afc929",
        name: "SLOT 04",
        warehouseId: WAREHOUSE_ID,
      },
      {
        id: "88100aaf-39c6-4f11-b5c9-61dee66a1022",
        name: "SLOT 05",
        warehouseId: WAREHOUSE_ID,
      },
      {
        id: "b18f5c3d-3c2d-4a34-b09a-36c4443b68d4",
        name: "SLOT 06",
        warehouseId: WAREHOUSE_ID,
      },
      {
        id: "d33f410c-366e-42d8-956f-7681ceff4a0e",
        name: "SLOT 07",
        warehouseId: WAREHOUSE_ID,
      },
      {
        id: "ae93971b-23fc-4ecd-805c-ad422276f732",
        name: "SLOT 08",
        warehouseId: WAREHOUSE_ID,
      },
      {
        id: "c7d63440-88b7-428c-98e3-15ca50f46162",
        name: "SLOT 09",
        warehouseId: WAREHOUSE_ID,
      },
      {
        id: "d4882aef-4357-4ef8-9928-831c88b00bcb",
        name: "SLOT 10",
        warehouseId: WAREHOUSE_ID,
      },
      {
        id: "4374fdad-e87e-47f5-a7f7-80dfc8822756",
        name: "SLOT 11",
        warehouseId: WAREHOUSE_ID,
      },
      {
        id: "3ca849d7-8ced-434e-8d3a-e0866cb3a6b9",
        name: "SLOT 12",
        warehouseId: WAREHOUSE_ID,
      },
      {
        id: "64512be1-df7f-4359-8ed6-a1d077461291",
        name: "SLOT 13",
        warehouseId: WAREHOUSE_ID,
      },
      {
        id: "efe06833-deb9-45ca-93d3-ea63268446f0",
        name: "SLOT 14",
        warehouseId: WAREHOUSE_ID,
      },
      {
        id: "8c45fc68-2e31-43a8-b259-2582e387f0e0",
        name: "SLOT 15",
        warehouseId: WAREHOUSE_ID,
      },
      {
        id: "f466a5e6-9b81-4c77-899c-21b40029e5fb",
        name: "SLOT 16",
        warehouseId: WAREHOUSE_ID,
      },
      {
        id: "844f4200-3626-4a6f-8314-b977791e8c7a",
        name: "SLOT 17",
        warehouseId: WAREHOUSE_ID,
      },
      {
        id: "beae09d3-33ca-4ee5-9555-7664151551da",
        name: "SLOT 18",
        warehouseId: WAREHOUSE_ID,
      },
      {
        id: "68be839c-856e-4ea4-bc3c-dfb3eafae719",
        name: "SLOT 19",
        warehouseId: WAREHOUSE_ID,
      },
      {
        id: "7fa6c3d4-f547-4b3d-80a7-9a568aa6cfa4",
        name: "SLOT 20",
        warehouseId: WAREHOUSE_ID,
      },
      {
        id: "8ffa97a8-8510-4b8c-9690-e5ac8e0a7ef0",
        name: "SLOT 21",
        warehouseId: WAREHOUSE_ID,
      },
    ];
  }
}
