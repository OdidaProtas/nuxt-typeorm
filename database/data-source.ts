import { DataSource } from "typeorm";
import { User } from "./models/User";

export const AppDataSource = new DataSource({
  type: "postgres",
  url:
    "postgres://wfimdzir:cZAm-i66Gyd7PhDdxi3Xw_51_Ko6Q5bu@batyr.db.elephantsql.com/wfimdzir",
  entities: ["database/models/**/*.ts"],
  migrations: ["database/migrations/**/*.ts"],
  subscribers: ["database/subscribers/**/*.ts"]
});

export async function useDataSource() {
  try {
    return [await AppDataSource.initialize(), null];
  } catch (e) {
    return [null, e];
  }
}
