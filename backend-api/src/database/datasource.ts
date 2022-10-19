import { DataSource } from "typeorm";
import { testDatabase, appDatabase } from "./config";

const options = process.env.NODE_ENV === "test" ? testDatabase : appDatabase;

export default new DataSource(options());

export const initializeDatasource = async (datasource: DataSource) => {
  if (!datasource.isInitialized) {
    await datasource.initialize();
  }
  return datasource;
};
