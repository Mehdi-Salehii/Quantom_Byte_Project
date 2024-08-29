import { insertTicket } from "@/utils/db_functions"
import { currentUser } from "@clerk/nextjs/server"

export const POST = async (req: Request) => {
  try {
    const user = await currentUser()
    const body = await req.json()

    if (!user)
      return Response.json(`Unauthorized Request! login to view your tickets`, {
        status: 401,
      })
    const res = await insertTicket(body)

    if (!res) return Response.json(`something went wrong  `, { status: 500 })

    return Response.json("Ticket sumbited successfully!")
  } catch (error) {
    return Response.json(`something went wrong  ${error}`)
  }
}
