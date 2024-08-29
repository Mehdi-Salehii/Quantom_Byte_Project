import { insertTicket } from "@/utils/db_functions"
import { currentUser } from "@clerk/nextjs/server"

export const POST = async (req: Request) => {
  try {
    const user = await currentUser()
    const body = await req.json()

    const res = await insertTicket(body)
    console.log(res)
    return Response.json(body)
    // {
    //   description: 'jskfjskdfjskldfjsklfjskfjl',
    //   title: 'fix my windows',
    //   target_department: 'engineering',
    //   user_id: 'user_2kvuP8wUn0v8bXfWHcFeoqSHu4u'
    // }
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

    return Response.json(data)*/
  } catch (error) {
    return Response.json(`something went wrong  ${error}`)
  }
}
