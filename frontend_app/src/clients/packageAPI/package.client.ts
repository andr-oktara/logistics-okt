import { CreatePackageInput, Package, WarehouseSlot } from "@oktara-logistics-shared/types";
import { Warehouse } from "@oktara-logistics-shared/types/warehouse";

const PACKAGE_API_BASE_URL = "http://localhost:4099";

interface PackageClient {
    getAllPackages(): Promise<Package[]>; 
    getShippedPackages(): Promise<Package[]>; 
    ship(id: Package["id"]): Promise<boolean>;
    deliver(id: Package["id"]): Promise<boolean>;
    returnToSeller(id: Package["id"]): Promise<boolean>;
    createPackage(input: CreatePackageInput): Promise<Package>;
}

export default class PackageClientService implements PackageClient {
    async getAllPackages(): Promise<Package[]> {
        const { data = [] } = await fetch(`${PACKAGE_API_BASE_URL}/packages`, { method: "GET" }).then((response) => response.json());
        return data;
    }

    async getShippedPackages(): Promise<Package[]> {
        const { data = [] } = await fetch(`${PACKAGE_API_BASE_URL}/packages/shipped`, { method: "GET" }).then((response) => response.json());
        return data;
    }

    async getWarehouse(): Promise<Warehouse> {
        const { data = [] } = await fetch(`${PACKAGE_API_BASE_URL}/warehouse`, { method: "GET" }).then((response) => response.json());
        return data;
    }

    async ship(id: Package["id"]): Promise<boolean> {
        await fetch(`${PACKAGE_API_BASE_URL}/package/${id}/ship`, { method: "PUT" }).then((response) => response.status);

        return true;
    }

    async deliver(id: Package["id"]): Promise<boolean> {
        await fetch(`${PACKAGE_API_BASE_URL}/package/${id}/deliver`, { method: "PUT" }).then((response) => response.status);

        return true;
    }

    async returnToSeller(id: Package["id"]): Promise<boolean> {
        await fetch(`${PACKAGE_API_BASE_URL}/package/${id}/return`, { method: "PUT" }).then((response) => response.status);

        return true;
    }

    async createPackage(input: CreatePackageInput): Promise<Package> {
        const { data } = await fetch(`${PACKAGE_API_BASE_URL}/package`, { method: "POST", body: JSON.stringify(input), headers: { 'Content-Type': 'application/json' } }).then((response) => response.json());

        return data;
    }

    async freeSlots(): Promise<WarehouseSlot[]> {
        const { data = [] } = await fetch(`${PACKAGE_API_BASE_URL}/warehouse/free-slots`, { method: "GET" }).then((response) => response.json());

        return data;
    }
};
