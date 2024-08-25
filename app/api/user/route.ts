import { UserType, UserTypeInsert } from "@/supabase/functions/common/schema"
import { getUser, insertUser, updateUser } from "@/utils/db_functions"
import { currentUser } from "@clerk/nextjs/server"

import { NextRequest } from "next/server"

export const GET = async (req: NextRequest) => {
  try {
    const id = req.nextUrl.searchParams.get("id") as string

    const user = await currentUser()
    const userInMyDb = await getUser(id)

    if (!user)
      return Response.json(`Unauthorized Request! login to view your tickets`, {
        status: 401,
      })
    if (!userInMyDb)
      return Response.json(`something went wrong  `, { status: 500 })

    return Response.json(userInMyDb)
  } catch (error) {
    return Response.json(`something went wrong  ${error}`)
  }
}
export const POST = async (req: NextRequest) => {
  try {
    const data = (await req.json()) as UserTypeInsert
    const user = await currentUser()
    const insertedUser = await insertUser(data)

    if (!user)
      return Response.json(`Unauthorized Request! login to view your tickets`, {
        status: 401,
      })
    if (!insertedUser)
      return Response.json(`something went wrong  `, { status: 500 })

    return Response.json(insertedUser)
  } catch (error) {
    return Response.json(`something went wrong  ${error}`)
  }
}
export const PUT = async (req: NextRequest) => {
  try {
    const data = (await req.json()) as Partial<UserType>
    const user = await currentUser()
    const id = req.nextUrl.searchParams.get("id") as string

    if (!user)
      return Response.json(`Unauthorized Request! login to view your tickets`, {
        status: 401,
      })
    const insertedUser = await updateUser(data, id)
    if (!insertedUser[0].updatedId)
      return Response.json(`something went wrong user wasn't updated `, {
        status: 500,
      })

    return Response.json(insertedUser)
  } catch (error) {
    return Response.json(`something went wrong  ${error}`)
  }
}
