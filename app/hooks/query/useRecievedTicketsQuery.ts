import { TicketType, UserType } from "@/supabase/functions/common/schema"
import { useQuery } from "@tanstack/react-query"
import { tickets } from "@/utils/dummyData"
import axios from "axios"

const useRecievedTicketsQuery = (
  user: UserType[],
  setData: (inp: any) => void,
  data: TicketType[],
) => {
  return useQuery({
    queryKey: ["recieved-tickets"],
    queryFn: async () => {
      try {
        const department = user?.[0]?.user_department
        const { data: recievedTickets } = await axios.get(
          `/api/tickets-recieved?department=${department}`,
        )
        if (Array.isArray(recievedTickets)) {
          setData([
            ...recievedTickets,
            ...tickets.filter((t) => t.target_department === department),
          ])
        } else {
          setData([
            ...tickets.filter((t) => t.target_department === department),
          ])
        }
        return data
      } catch (err) {
        console.error(err)
      }
    },
    enabled: !!user,
  })
}
export default useRecievedTicketsQuery
