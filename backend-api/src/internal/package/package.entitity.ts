import { WarehouseStorage } from "@oktara-logistics-database/entityMap";
import { BaseEntity } from "@oktara-logistics-utils/entity/base.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from "typeorm";
import { PackageStatus } from "./constants";
import { PackageDestination } from "./package.destination";

@Entity()
export class Package extends BaseEntity {
  @Column({ type: "varchar" })
  title: string;

  @Column({ name: "storage_id", type: "uuid", nullable: true })
  storageId?: string;

  @Column({
    name: "status",
    type: "enum",
    enum: PackageStatus,
    default: PackageStatus.draft,
  })
  status: PackageStatus;

  @OneToOne(() => PackageDestination, { eager: true, cascade: true })
  @JoinColumn({ name: "package_destination_id" })
  destination: PackageDestination;

  @ManyToOne(() => WarehouseStorage, (entity) => entity.packages)
  @JoinColumn({ name: "storage_id" })
  warehouseStorage?: WarehouseStorage;

  get actions(): string[] {
    switch (this.status) {
      case PackageStatus.stored:
        return ["ship", "return"];
      case PackageStatus.shipped:
        return ["deliver"];
    }

    return [];
  }
}
