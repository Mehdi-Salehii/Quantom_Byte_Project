import { getAllTicketsSent } from "@/utils/db_functions"
import { currentUser } from "@clerk/nextjs/server"
import { NextRequest } from "next/server"

export const GET = async (req: NextRequest) => {
  try {
    const user = await currentUser()
    if (!user)
      return Response.json(`Unauthorized Request! login to view your tickets`, {
        status: 401,
      })
    const id = req.nextUrl.searchParams.get("id") as string
    const data = await getAllTicketsSent(id)
    return Response.json(data)
  } catch (error) {
    return Response.json(`something went wrong  ${error}`)
  }
}
