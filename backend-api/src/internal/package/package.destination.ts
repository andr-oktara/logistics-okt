import { BaseEntity } from "@oktara-logistics-utils/entity/base.entity";
import { Column, Entity } from "typeorm";

@Entity({ name: "package_destination" })
export class PackageDestination extends BaseEntity {
  @Column({ name: "recipient_name", type: "varchar" })
  recipientName: string;

  @Column({ name: "street", type: "varchar" })
  street: string;

  @Column({ name: "city", type: "varchar" })
  city: string;

  @Column({ name: "state", type: "varchar" })
  state: string;

  @Column({ name: "number", type: "varchar" })
  number: string;

  @Column({ name: "country", type: "varchar" })
  country: string;
}
