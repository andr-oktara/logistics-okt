import * as entities from "@oktara-logistics-database/entityMap";
import { DataSourceOptions } from "typeorm";

export const testDatabase = (): DataSourceOptions => ({
  name: "test-database",
  type: "postgres",
  host: "okt_pgsql_test_db_server",
  port: 5433,
  username: process.env.DB_USER,
  password: process.env.DB_PWD,
  database: process.env.DB_NAME,
  ssl: false,
  synchronize: false,
  logging: false,
  entities,
  subscribers: [],
  migrationsRun: false,
  uuidExtension: "uuid-ossp",
  migrations: [],
  dropSchema: false,
});
