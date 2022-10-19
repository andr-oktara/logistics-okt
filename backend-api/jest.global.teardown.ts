import "tsconfig-paths/register";
import { initializeDatasource } from "@oktara-logistics-database/datasource";
import { testDatabase } from "@oktara-logistics-database/config";
import { DataSource } from "typeorm";

const setup = async () => {
  console.log("#TEST DATABASE# - CLOSING DB CONNECTION");
  const datasource = await initializeDatasource(new DataSource(testDatabase()));
  await datasource.destroy();
  console.log("#TEST DATABASE# - DB CONNECTION CLOSED");
};

export default setup;
