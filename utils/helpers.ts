import { TicketType, UserType } from "@/supabase/functions/common/schema"
import axios from "axios"
import { setIntervalAsync, clearIntervalAsync } from "set-interval-async/fixed"
import { useUserStore } from "./store"
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

export const insertFromClerkToMyDb = async (
  userId: string,
): Promise<UserType[]> => {
  return new Promise(async (resolve, reject) => {
    let userInDb = false
    let countIntervalRun = 0
    const interval = setIntervalAsync(async () => {
      try {
        const res = await axios.get(`/api/user?id=${userId}`)

        if (res.data.length) {
          useUserStore.setState({ User: res.data })
          userInDb = true
          await clearIntervalAsync(interval)
          resolve(res.data)
        }

        if (!userInDb) {
          await axios.post("/api/user", { clerk_id: userId })
        }
      } catch (error) {
        await clearIntervalAsync(interval)
        reject(new Error("Failed to fetch or insert user"))
      }
    }, 10)

    if (!interval) {
      reject(new Error("Interval failed to start"))
    }
  })
}
