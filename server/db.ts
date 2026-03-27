import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";
import * as schema from "@shared/schema";

const { Pool } = pg;

if (!process.env.DATABASE_URL) {
  console.warn(
    "DATABASE_URL not set - database features will not work. Did you forget to provision a database?",
  );
}

export const pool = new Pool({ 
  connectionString: process.env.DATABASE_URL,
  max: 5,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

export const db = drizzle(pool, { schema });

// Initialize database tables on startup
export async function initializeDatabase() {
  if (!process.env.DATABASE_URL) {
    console.warn("Database initialization skipped - DATABASE_URL not set");
    return;
  }

  try {
    // Test the connection
    const result = await pool.query("SELECT 1");
    console.log("Database connection successful");
  } catch (error) {
    console.error("Failed to connect to database:", error);
  }
}
