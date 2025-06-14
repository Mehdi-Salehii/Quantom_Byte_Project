import { TicketType, UserType } from "@/supabase/functions/common/schema"
import { useQuery } from "@tanstack/react-query"
import { tickets as dummyTickets } from "@/utils/dummyData"
import axios from "axios"

const useRecievedTicketsQuery = (
  user: UserType[],
  //   setData: (inp: any) => void,
) => {
  return useQuery({
    queryKey: ["recieved-tickets"],
    queryFn: async () => {
      let data
      try {
        const userDepartment = user?.[0]?.user_department
        const { data: recievedTickets } = await axios.get(
          `/api/tickets-recieved?department=${userDepartment}`,
        )
        const filterTickets = (tickets: TicketType[]) =>
          tickets.filter((t) => t.target_department === userDepartment)
        if (Array.isArray(recievedTickets)) {
          data = [...recievedTickets, ...filterTickets(dummyTickets)]
          //   setData(data)
        } else {
          data = [...filterTickets(dummyTickets)]
          //   setData(data)
        }
      } catch (err) {
        console.error(err)
      }
      return data
    },
    enabled: !!user,
  })
}
export default useRecievedTicketsQuery
