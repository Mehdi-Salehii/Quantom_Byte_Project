"use server"
import { ticketTable } from "../supabase/functions/common/schema"
import { db } from "./db"
import { TicketType } from "../supabase/functions/common/schema"

export const getRecords = async (): Promise<TicketType[]> => {
  const data = await db.select().from(ticketTable)
  console.log("from getRecords", data)
  return data
}
export const insertRecord = async (ticket: TicketType) => {
  const data = await db.insert(ticketTable).values(ticket).returning()

  console.log("from insertRecord", data)
}
