"use server"
import { ticketTable } from "../supabase/functions/common/schema"
import { db } from "./db"
import { TicketType } from "../supabase/functions/common/schema"
import {
  getAllTickets,
  getFilteredTicket,
  getOneTicket,
  insertTicket,
} from "./db_functions"

export const getRecords = async (): Promise<TicketType[]> => {
  const data = await getAllTickets()
  console.log("from getRecords", data)
  return data
}
export const insertRecord = async (ticket: TicketType) => {
  const data = await db.insert(ticketTable).values(ticket).returning()

  console.log("from insertRecord", data)
}
