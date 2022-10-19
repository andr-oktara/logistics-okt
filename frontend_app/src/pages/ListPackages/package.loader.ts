import { Package } from "@oktara-logistics-shared/types";
import PackageClientService from "../../clients/packageAPI/package.client";

const packageClient = new PackageClientService();

export type PackageLoaderData = {
    packages: Package[];
};

export async function allPackagesLoader() {
    const packages = await packageClient.getAllPackages();
    return { packages };
}
