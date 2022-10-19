import { Warehouse } from "@oktara-logistics-shared/types";
import PackageClientService from "../../clients/packageAPI/package.client";

const packageClient = new PackageClientService();

export type WarehouseLoaderData = {
    warehouse: Warehouse;
};

export async function warehouseLoader() {
    const warehouse = await packageClient.getWarehouse();
    return { warehouse };
}
