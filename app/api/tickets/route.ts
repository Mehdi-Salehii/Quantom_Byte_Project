import { TicketType } from "@/supabase/functions/common/schema"
import { getAllTickets } from "@/utils/db_functions"
import { NextResponse } from "next/server"

//TODO user authority for getting tickets hasnt approved yet after implementing clerk tickets should be filtered with user id
export const GET = async (
  request: Request,
): Promise<NextResponse<{ data: TicketType[] }>> => {
  const data = await getAllTickets()
  return NextResponse.json({ data })
}
