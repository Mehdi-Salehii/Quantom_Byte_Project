import { TicketType } from "@/supabase/functions/common/schema"
import { getOneTicket } from "@/utils/db_functions"
import { NextResponse } from "next/server"

export const GET = async (
  request: Request,
  route: { params: { id: string } },
): Promise<NextResponse<TicketType[]>> => {
  let time = 0
  const timer = setInterval(() => {
    time += 1
  }, 1)

  const data = await getOneTicket(route.params.id)

  return NextResponse.json(data)
}
