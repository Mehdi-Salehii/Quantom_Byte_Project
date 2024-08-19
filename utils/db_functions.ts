import { ticketTable } from "@/supabase/functions/common/schema"
import { db } from "@/utils/db"
export const getTickets = async () => {
  const data = await db.select().from(ticketTable)
}
