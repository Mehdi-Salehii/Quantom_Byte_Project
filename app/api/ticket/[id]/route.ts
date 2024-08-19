import { TicketType } from "@/supabase/functions/common/schema"
import { getOneTicket } from "@/utils/db_functions"
import { NextResponse } from "next/server"

export const GET = async (
  request: Request,
  route: { params: { id: string } },
): Promise<NextResponse<TicketType[]> | void> => {
  if (process.env.NODE_ENV === "production") return
  const data = await getOneTicket(route.params.id)

  return NextResponse.json(data)
}
