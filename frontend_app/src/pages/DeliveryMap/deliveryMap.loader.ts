import { Package } from "@oktara-logistics-shared/types";
import PackageClientService from "../../clients/packageAPI/package.client";

const packageClient = new PackageClientService();

export type DeliveryMapLoaderData = {
    shippedPackages: Package[];
};

export async function deliveryMapLoader() {
    const [shippedPackages] = await Promise.all([
        packageClient.getShippedPackages()
    ]);

    return { shippedPackages };
}
