import { UserType } from "@/supabase/functions/common/schema"
import { useQuery } from "@tanstack/react-query"
import { tickets as dummyTickets } from "@/utils/dummyData"
import axios from "axios"
import { filterTickets } from "@/utils/helpers"

const useRecievedTicketsQuery = (user: UserType[]) => {
  return useQuery({
    queryKey: ["recieved-tickets"],
    queryFn: async () => {
      let data
      try {
        const userDepartment = user?.[0]?.user_department!
        const { data: recievedTickets } = await axios.get(
          `/api/tickets-recieved?department=${userDepartment}`,
        )

        if (Array.isArray(recievedTickets)) {
          data = [
            ...recievedTickets,
            ...filterTickets(dummyTickets, userDepartment),
          ]
        } else {
          data = [...filterTickets(dummyTickets, userDepartment)]
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
