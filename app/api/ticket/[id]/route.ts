import { getOneTicket } from "@/utils/db_functions"

export const GET = async (
  _: Request,
  { params }: { params: { id: string } },
) => {
  // if (process.env.NODE_ENV === "production") return Response.json("data")
  const data = await getOneTicket(params.id)

  return Response.json(data)
}
