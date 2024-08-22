import { getAllTickets } from "@/utils/db_functions"
import { currentUser } from "@clerk/nextjs/server"

export const GET = async () => {
  // if (process.env.NODE_ENV === "production") return Response.json("data")
  try {
    const user = await currentUser()
    if (!user)
      return Response.json(`Unauthorized Request! login to view your tickets`, {
        status: 401,
      })

    const data = await getAllTickets(user?.id)
    return Response.json(data)
  } catch (error) {
    return Response.json(`something went wrong  ${error}`)
  }
}
