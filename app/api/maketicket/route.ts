import { getOneTicket } from "@/utils/db_functions"
import { currentUser } from "@clerk/nextjs/server"

export const POST = async (req: Request) => {
  try {
    const user = await currentUser()
    const body = await req.json()
    console.log(body)
    return Response.json(body)
    /*
    if (!user)
      return Response.json(`Unauthorized Request! login to view your tickets`, {
        status: 401,
      })
    // const data = await getOneTicket(id)
    if (!data) return Response.json(`something went wrong  `, { status: 500 })
    if (data.length === 0) return Response.json(data)
    if (data.length !== 0) {
      const ownsTicket = data[0].user_id === user?.id
      if (!ownsTicket)
        return Response.json(
          `Unauthorized Request! ticket doesn't belong to user`,
          { status: 401 },
        )
    }

    return Response.json(data)
    */
  } catch (error) {
    return Response.json(`something went wrong  ${error}`)
  }
}
