import { LoggerHandler } from "@oktara-logistics-utils/logger";
import { PackageStatus } from "./constants";
import { Package } from "./package.entitity";
import { STORAGE_NOT_AVAILABLE } from "./package.errors";
import {
  CreatePackageInput,
  PackageServiceI,
  PackageStorageService,
  PackageStore,
} from "./types";

export type PackageServiceProps = {
  repository: PackageStore;
  logger: LoggerHandler;
  storageService: PackageStorageService;
};

export class PackageService implements PackageServiceI {
  private repository: PackageStore;
  private logger: LoggerHandler;
  private storageService: PackageStorageService;

  constructor(props: PackageServiceProps) {
    this.repository = props.repository;
    this.logger = props.logger;
    this.storageService = props.storageService;
  }

  async getAllPackages(): Promise<Package[]> {
    try {
      const result = await this.repository.getAllPackages();

      return result.map((item) => ({ ...item, actions: item.actions }));
    } catch (e) {
      this.logger.error(e);
      throw new Error(e);
    }
  }

  async getShippedPackages(): Promise<Package[]> {
    try {
      return await this.repository.getShippedPackages();
    } catch (e) {
      this.logger.error(e);
      throw new Error(e);
    }
  }

  async create(input: CreatePackageInput): Promise<Package> {
    try {
      let status = PackageStatus.draft;
      if (input.storageId) {
        await this.checkFreeStorage(input.storageId);
        status = PackageStatus.stored;
      }

      return await this.repository.create({ ...input, status });
    } catch (e) {
      this.logger.error(e);
      throw new Error(e);
    }
  }

  async store(
    id: Package["id"],
    storageId: Package["storageId"]
  ): Promise<boolean> {
    await this.checkFreeStorage(storageId);

    return this.repository.store(id, storageId);
  }

  ship(id: Package["id"]): Promise<boolean> {
    return this.repository.update(id, {
      status: PackageStatus.shipped,
    });
  }

  deliver(id: Package["id"]): Promise<boolean> {
    return this.repository.update(id, {
      status: PackageStatus.delivered,
    });
  }

  returnToSeller(id: Package["id"]): Promise<boolean> {
    return this.repository.update(id, {
      status: PackageStatus.returned,
    });
  }

  private async checkFreeStorage(storageId: Package["storageId"]) {
    const isStorageFree = await this.storageService.isStorageFree(storageId);

    if (!isStorageFree) {
      throw new Error(STORAGE_NOT_AVAILABLE);
    }
  }
}
