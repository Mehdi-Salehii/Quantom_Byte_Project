import { getUser } from "@/utils/db_functions"
import { currentUser } from "@clerk/nextjs/server"

import { NextRequest } from "next/server"

export const GET = async (req: NextRequest) => {
  try {
    const id = req.nextUrl.searchParams.get("id") as string

    const user = await currentUser()
    const userInMyDb = await getUser(id)
    console.log("id :", id)
    console.log("userInMyDb :", userInMyDb)

    if (!user)
      return Response.json(`Unauthorized Request! login to view your tickets`, {
        status: 401,
      })
    if (!userInMyDb)
      return Response.json(`something went wrong  `, { status: 500 })
    if (userInMyDb.length === 0) return Response.json({ data: userInMyDb })
    if (userInMyDb.length !== 0) {
      const ownsTicket = userInMyDb[0].clerk_id === user?.id
      if (!ownsTicket)
        return Response.json(
          `Unauthorized Request! ticket doesn't belong to user`,
          { status: 401 },
        )
    }

    return Response.json({ data: userInMyDb })
  } catch (error) {
    return Response.json(`something went wrong  ${error}`)
  }
}
