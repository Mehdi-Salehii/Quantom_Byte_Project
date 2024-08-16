import { pgTable, serial, text, integer, pgEnum } from "drizzle-orm/pg-core"

export const departmentEnum = pgEnum("department", [
  "main office",
  "engineering",
  "design",
  "marketing",
  "financial",
])
export const ticketTable = pgTable("ticket_table", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  department: departmentEnum("department").notNull(),
})

export type TicketTypeInsert = typeof ticketTable.$inferInsert
export type TicketType = typeof ticketTable.$inferSelect
