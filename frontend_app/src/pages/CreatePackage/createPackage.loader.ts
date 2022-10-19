import { WarehouseSlot } from "@oktara-logistics-shared/types";
import PackageClientService from "../../clients/packageAPI/package.client";

const packageClient = new PackageClientService();

export type CreatePackageLoaderData = {
    freeSlots: WarehouseSlot[];
};

export async function createPackageLoader() {
    const freeSlots = await packageClient.freeSlots();
    return { freeSlots };
}
