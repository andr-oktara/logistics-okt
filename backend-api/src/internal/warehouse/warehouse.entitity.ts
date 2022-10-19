import { BaseEntity } from "@oktara-logistics-utils/entity/base.entity";
import { Column, Entity, JoinColumn, OneToMany, OneToOne } from "typeorm";
import { WarehouseAddress } from "./warehouse.address";
import { WarehouseStorage } from "./warehouseStorage.entity";

@Entity()
export class Warehouse extends BaseEntity {
  @Column({ type: "varchar" })
  title: string;

  @OneToOne(() => WarehouseAddress, { eager: true, cascade: true })
  @JoinColumn({ name: "warehouse_address_id" })
  address?: WarehouseAddress;

  @OneToMany(() => WarehouseStorage, (entity) => entity.warehouse)
  storageLocations?: WarehouseStorage[];
}
