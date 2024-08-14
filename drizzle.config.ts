import 'dotenv/config'
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./supabase/functions/common/schema.ts",
  out: "./supabase/migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL as string,
  }
});