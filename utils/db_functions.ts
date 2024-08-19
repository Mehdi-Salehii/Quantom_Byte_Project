import { ticketTable, TicketType } from "@/supabase/functions/common/schema"
import { db } from "@/utils/db"
import { eq, sql } from "drizzle-orm"

export const getAllTickets = async (): Promise<TicketType[]> => {
  const data = await db.select().from(ticketTable)

  return data
}
export const getOneTicket = async (ticketId: string): Promise<TicketType[]> => {
  const data = await db
    .select()
    .from(ticketTable)
    .where(eq(ticketTable.id, ticketId))
  return data
}
export const getFilteredTicket = async (
  title: string,
  userId: string,
  description: string,
): Promise<TicketType[]> => {
  const data = await db
    .select()
    .from(ticketTable)
    .where(
      sql`${ticketTable.title} = ${title} and ${ticketTable.description} = ${description} and ${ticketTable.user_id} = ${userId}`,
    )
  return data
}
export const insertTicket = async (): Promise<TicketType[]> => {
  const data = await db
    .insert(ticketTable)
    .values({
      user_id: "user-60",
      title: "test",
      description: "test",
      target_department: "engineering",
      source_department: "main office",

      fulfill_message: null,
      reject_message: null,
    })
    .returning()
  return data
}
