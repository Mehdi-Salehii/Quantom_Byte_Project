import { DepartmentType } from "@/supabase/functions/common/schema"
import { getAllTicketsRecieved } from "@/utils/db_functions"
import { currentUser } from "@clerk/nextjs/server"
import { NextRequest } from "next/server"

export const GET = async (req: NextRequest) => {
  try {
    const department = req.nextUrl.searchParams.get(
      "department",
    ) as DepartmentType
    const user = await currentUser()
    if (!user)
      return Response.json(`Unauthorized Request! login to view your tickets`, {
        status: 401,
      })

    const data = await getAllTicketsRecieved(department)
    return Response.json(data)
  } catch (error) {
    return Response.json(`something went wrong  ${error}`)
  }
}
