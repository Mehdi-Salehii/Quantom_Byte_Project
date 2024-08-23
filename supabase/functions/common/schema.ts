import { sql } from "drizzle-orm"
import {
  pgTable,
  serial,
  text,
  integer,
  pgEnum,
  uuid,
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
  user_id: text("user_id").notNull(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  target_department: departmentEnum("target_department").notNull(),
  source_department: departmentEnum("source_department").notNull(),
  status: statusEnum("status").notNull().default("processing"),
  fulfill_message: text("fulfill_message"),
  reject_message: text("reject_message"),
  pitcures: text("avatar")
    .array()
    .notNull()
    .default(sql`'{}'::text[]`),
})
export const userTable = pgTable("user_table", {
  id: uuid("id").defaultRandom().primaryKey(),
  clerk_id: text("sender_id").notNull(),
  name: text("name"),
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
