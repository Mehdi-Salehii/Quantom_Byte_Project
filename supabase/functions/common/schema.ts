import { sql } from "drizzle-orm"
import {
  pgTable,
  text,
  pgEnum,
  uuid,
  timestamp,
  date,
} from "drizzle-orm/pg-core"

export const departmentEnum = pgEnum("department", [
  "main office",
  "engineering",
  "design",
  "marketing",
  "financial",
])
export const statusEnum = pgEnum("status", [
  "fulfilled",
  "processing",
  "rejected",
])
export const ticketTable = pgTable("ticket_table", {
  id: uuid("id").defaultRandom().primaryKey(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
  user_id: text("user_id")
    .notNull()
    .references(() => userTable.clerk_id),
  title: text("title").notNull(),
  description: text("description").notNull(),
  target_department: departmentEnum("target_department").notNull(),
  source_department: departmentEnum("source_department").notNull(),
  status: statusEnum("status").notNull().default("processing"),
  fulfill_message: text("fulfill_message"),
  reject_message: text("reject_message"),
  pictures: text("pictures")
    .array()
    .notNull()
    .default(sql`'{}'::text[]`),
})
export const userTable = pgTable("user_table", {
  clerk_id: text("clerk_id").notNull().primaryKey(),
  id: uuid("id").defaultRandom(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
  name: text("name").default("User"),
  user_department: departmentEnum("user_department").default("main office"),
})
export const schema = {
  ticketTable,
  userTable,
}
export type TicketTypeInsert = typeof ticketTable.$inferInsert
export type TicketType = typeof ticketTable.$inferSelect
export type UserTypeInsert = typeof userTable.$inferInsert
export type UserType = typeof userTable.$inferSelect
