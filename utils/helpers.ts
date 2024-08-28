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
    // let intervalCount = 0
    const interval = setIntervalAsync(async () => {
      // console.log(`interval ran ${++intervalCount} times`)
      try {
        const res = await axios.get(`/api/user?id=${userId}`)

        if (res.data.length) {
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
export const makeLastModifiedMessage = (updatedAt: string | Date): string => {
  let miliUpdated
  if (typeof updatedAt === "string") {
    miliUpdated = new Date(updatedAt).getTime()
  } else {
    miliUpdated = updatedAt.getTime()
  }
  const miliNow = Date.now()
  const elapsedTimeSeconds = Math.floor(Math.abs(miliNow - miliUpdated)) / 1000

  const elapsedMinutes = Math.floor(elapsedTimeSeconds / 60)
  const elapsedHours = Math.floor(elapsedMinutes / 60)
  const elapsedDays = Math.floor(elapsedHours / 24)

  if (elapsedTimeSeconds < 60) {
    return `Last updated ${Math.floor(elapsedTimeSeconds)} seconds ago`
  } else if (elapsedMinutes < 60) {
    return `Last updated ${elapsedMinutes} minutes ago`
  } else if (elapsedHours < 24) {
    return `Last updated ${elapsedHours} hours ago`
  } else {
    return `Last updated ${elapsedDays} days ago`
  }
}
