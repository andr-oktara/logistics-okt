import { WarehouseStorage } from "@oktara-logistics-database/entityMap";
import { Package } from "./package.entitity";

export type CreatePackageInput = Omit<
  Package,
  "id" | "deletedAt" | "createdAt" | "updatedAt" | "status" | "warehouseStorage"
>;

export interface PackageServiceI {
  getAllPackages(): Promise<Package[]>;
  getShippedPackages(): Promise<Package[]>;
  create(input: CreatePackageInput): Promise<Package>;
  store(id: Package["id"], storageId: WarehouseStorage["id"]): Promise<boolean>;
  ship(id: Package["id"]): Promise<boolean>;
  deliver(id: Package["id"]): Promise<boolean>;
  returnToSeller(id: Package["id"]): Promise<boolean>;
}

export interface PackageStore {
  getPackage(id: Package["id"]): Promise<Package>;
  getAllPackages(): Promise<Package[]>;
  getShippedPackages(): Promise<Package[]>;
  create(
    input: CreatePackageInput & Partial<Pick<Package, "status">>
  ): Promise<Package>;
  store(id: Package["id"], storageId: WarehouseStorage["id"]): Promise<boolean>;
  update(
    id: Package["id"],
    props: Partial<Omit<Package, "id">>
  ): Promise<boolean>;
}

export interface PackageStorageService {
  isStorageFree(storageId: Package["storageId"]): Promise<boolean>;
}
