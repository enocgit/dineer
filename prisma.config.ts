import path from "node:path";
import { defineConfig, env } from "prisma/config";
import dotenv from "dotenv";

dotenv.config({
	path: path.join(".", ".env"),
});

export default defineConfig({
  schema: path.join("prisma"),
  migrations: {
    path: path.join("prisma", "migrations"),
  },
  engine: "classic",
  datasource: {
    url: env("DATABASE_URL"),
  },
});
