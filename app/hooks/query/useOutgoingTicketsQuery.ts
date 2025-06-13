import { useAuth } from "@clerk/nextjs"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"

const useOutgoingTicketsQuery = (setErrorInDb: (input: boolean) => void) => {
  const { userId } = useAuth()

  return useQuery({
    queryKey: ["sent-tickets"],
    queryFn: async () => {
      try {
        const { data } = await axios.get(`/api/tickets-sent?id=${userId}`)

        if (!data) {
          setErrorInDb(true)
          return
        }

        return data
      } catch (err) {
        console.error(err)
      }
    },
    enabled: !!userId,
  })
}
export default useOutgoingTicketsQuery
