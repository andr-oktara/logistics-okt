import * as entities from "@oktara-logistics-database/entityMap";
import { DataSourceOptions } from "typeorm";

export const appDatabase = (): DataSourceOptions => ({
  type: "postgres",
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PWD,
  database: process.env.DB_NAME,
  ssl: process.env.DB_SSL_MODE !== "disable",
  synchronize: true,
  logging: process.env.DB_LOGS === "true",
  entities,
  subscribers: [],
  migrations: ["src/database/migrations/*.ts"],
  migrationsRun: process.env.RUN_MIGRATIONS === "true",
  uuidExtension: "uuid-ossp",
});
