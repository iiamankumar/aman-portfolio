import { drizzle } from "drizzle-orm/better-sqlite3";
import Database from "better-sqlite3";
import * as schema from "@shared/schema";
import { join } from "path";

// Use SQLite for local development
const dbPath = process.env.DATABASE_URL || join(process.cwd(), "portfolio.db");
const sqlite = new Database(dbPath);

export const db = drizzle(sqlite, { schema });
