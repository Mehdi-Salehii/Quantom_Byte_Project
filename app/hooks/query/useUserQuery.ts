import { useAuth } from "@clerk/nextjs"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"

const useUserQuery = () => {
  const { userId } = useAuth()
  const query = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      try {
        const { data } = await axios.get(`/api/user?id=${userId}`)

        return data
      } catch (err) {
        console.error(err)
      }
    },
    enabled: !!userId,
    staleTime: 1000 * 60,
  })
  return { ...query, userId }
}
export default useUserQuery
