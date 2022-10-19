import { PackageStatus } from "./constants";
import { Package } from "./package.entitity";
import { CreatePackageInput, PackageStore } from "./types";
import AppDatasource from "@oktara-logistics-database/datasource";
import { PackageDestination } from "./package.destination";

export class PackageRepository implements PackageStore {
  private db = AppDatasource.getRepository(Package);
  private packageDestinationDB =
    AppDatasource.getRepository(PackageDestination);

  getPackage(id: Package["id"]): Promise<Package> {
    return this.db.findOneBy({ id });
  }

  getAllPackages(): Promise<Package[]> {
    return this.db.find({ order: { createdAt: "DESC" } });
  }

  getShippedPackages(): Promise<Package[]> {
    return this.db.find({
      order: { createdAt: "ASC" },
      where: { status: PackageStatus.shipped },
    });
  }

  async create(input: CreatePackageInput): Promise<Package> {
    if (input.destination) {
      input.destination = await this.packageDestinationDB.save(
        input.destination
      );
    }

    const id = await this.db
      .insert(input)
      .then(({ identifiers }) => identifiers[0].id);

    return this.db.findOneBy({ id });
  }

  store(id: string, storageId: string): Promise<boolean> {
    return this.update(id, {
      storageId,
      status: PackageStatus.stored,
    });
  }

  async update(
    id: string,
    props: Partial<Omit<Package, "id">>
  ): Promise<boolean> {
    const { affected = 0 } = await this.db.update({ id }, props);
    return affected > 0;
  }
}
