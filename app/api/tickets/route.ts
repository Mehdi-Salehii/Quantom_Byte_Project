import { TicketType } from "@/supabase/functions/common/schema"
import { getAllTickets } from "@/utils/db_functions"
import { NextResponse } from "next/server"

//TODO user authority for getting tickets hasnt approved yet after implementing clerk tickets should be filtered with user id
export const GET = async (
  request: Request,
): Promise<NextResponse<TicketType[] | string>> => {
  if (process.env.NODE_ENV === "production") return NextResponse.json("data")
  const data = await getAllTickets()
  return NextResponse.json(data)
}
