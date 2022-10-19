import { Package } from "@oktara-logistics-database/entityMap";
import { BaseEntity } from "@oktara-logistics-utils/entity/base.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { Warehouse } from "./warehouse.entitity";

@Entity({ name: "warehouse_storage" })
export class WarehouseStorage extends BaseEntity {
  @Column({ name: "warehouse_id", type: "uuid" })
  warehouseId: string;

  @Column({ name: "name", type: "varchar", nullable: true })
  name: string;

  @ManyToOne(() => Warehouse, (entity) => entity.storageLocations)
  @JoinColumn({ name: "warehouse_id" })
  warehouse?: Warehouse;

  @OneToMany(() => Package, (entity) => entity.warehouseStorage)
  packages?: Package[];
}
