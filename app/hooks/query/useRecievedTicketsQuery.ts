import {
  DepartmentType,
  TicketType,
  UserType,
} from "@/supabase/functions/common/schema"
import { useQuery } from "@tanstack/react-query"
import { tickets as dummyTickets } from "@/utils/dummyData"
import axios from "axios"
import { filterTickets } from "@/utils/helpers"

const useRecievedTicketsQuery = (
  user: UserType[],
  //   setData: (inp: any) => void,
) => {
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
          //   setData(data)
        } else {
          data = [...filterTickets(dummyTickets, userDepartment)]
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
