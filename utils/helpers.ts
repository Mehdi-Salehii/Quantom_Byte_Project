import { TicketType } from "@/supabase/functions/common/schema"
import axios from "axios"
import { setIntervalAsync, clearIntervalAsync } from "set-interval-async/fixed"
export function modifyDescription(data: TicketType[], descLength: number) {
  const howLong = descLength
  const modifiedData = data.map((d) => {
    const { description, title, ...rest } = d
    const descLong = description.length > howLong
    const titleLong = title.length > howLong

    return {
      ...rest,
      description: descLong
        ? description.slice(0, howLong) + "..."
        : description,
      title: titleLong ? title.slice(0, howLong) + "..." : title,
    }
  })
  return modifiedData
}
export const insertFromClerkToMyDb = (userId: string) => {
  let userInDb = false
  const interval = setIntervalAsync(async () => {
    console.log(userInDb)

    if (typeof userId === "string" && !userInDb) {
      const res = await axios.get(`/api/user?id=${userId}`)
      if (res.data.length) {
        console.log("setUserInDb ran")
        userInDb = true
      }

      if (!userInDb) {
        await axios.post("/api/user", { clerk_id: userId })
      }
    }

    if (userInDb) {
      await clearIntervalAsync(interval)
      return
    }
  }, 500)
}
