import { TicketType } from "@/supabase/functions/common/schema"
import { getOneTicket, updateTicket } from "@/utils/db_functions"
import { currentUser } from "@clerk/nextjs/server"
import { NextRequest } from "next/server"

export const GET = async (
  _: Request,
  { params: { id } }: { params: { id: string } },
) => {
  try {
    const user = await currentUser()
    const data = await getOneTicket(id)

    if (!user)
      return Response.json(`Unauthorized Request! login to view your tickets`, {
        status: 401,
      })
    if (!data) return Response.json(`something went wrong  `, { status: 500 })
    if (data.length === 0) return Response.json(data)

    return Response.json(data)
  } catch (error) {
    return Response.json(`something went wrong  ${error}`)
  }
}
export const PUT = async (
  req: NextRequest,
  { params: { id } }: { params: { id: string } },
) => {
  try {
    const data = (await req.json()) as Partial<TicketType>
    const user = await currentUser()

    if (!user)
      return Response.json(`Unauthorized Request! login to view your tickets`, {
        status: 401,
      })

    const updatedtedTicket = await updateTicket(data, id)

    return Response.json(updatedtedTicket)
  } catch (error) {
    return Response.json(`something went wrong  ${error}`)
  }
}
