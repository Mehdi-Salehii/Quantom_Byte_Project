import { pgTable, serial, text, integer } from "drizzle-orm/pg-core";
import { z } from "zod";
export const ticketTable = pgTable('ticket_table', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  description: text('description').notNull(),
  department: text('department').notNull(),
})

export type TicketType = typeof ticketTable.$inferInsert;