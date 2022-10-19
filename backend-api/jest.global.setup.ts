import "tsconfig-paths/register";
import { initializeDatasource } from "@oktara-logistics-database/datasource";
import { testDatabase } from "@oktara-logistics-database/config";
import { DataSource } from "typeorm";

const setup = async () => {
  await initializeDatasource(new DataSource(testDatabase()));
};

export default setup;
