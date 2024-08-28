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

export const getRecords = async (id: string): Promise<TicketType[]> => {
  const data = await getAllTickets(id)

  return data
}
export const insertRecord = async (ticket: TicketType) => {
  const data = await db.insert(ticketTable).values(ticket).returning()
}
