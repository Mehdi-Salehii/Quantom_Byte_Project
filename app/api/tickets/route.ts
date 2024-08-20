import { getAllTickets } from "@/utils/db_functions"

//TODO user authority for getting tickets hasnt approved yet after implementing clerk tickets should be filtered with user id
export const GET = async () => {
  // if (process.env.NODE_ENV === "production") return Response.json("data")
  const data = await getAllTickets()
  return Response.json(data)
}
