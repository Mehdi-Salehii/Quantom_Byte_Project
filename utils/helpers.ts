import { TicketType, UserType } from "@/supabase/functions/common/schema"
import axios from "axios"
import { setIntervalAsync, clearIntervalAsync } from "set-interval-async/fixed"
import { useUserStore } from "./store"
export function modifyDescription(data: TicketType[], descLength: number) {
  if (data.length === 0) return []
  const howLong = descLength
  const modifiedData = data.map((d) => {
    const { description, title, ...rest } = d
    const descLong = description?.length > howLong
    const titleLong = title?.length > howLong

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
    return `Last updated ${Math.floor(elapsedTimeSeconds)} second${elapsedMinutes > 1 ? "s" : ""} ago`
  } else if (elapsedMinutes < 60) {
    return `Last updated ${elapsedMinutes} minute${elapsedMinutes > 1 ? "s" : ""} ago`
  } else if (elapsedHours < 24) {
    return `Last updated ${elapsedHours} hour${elapsedHours > 1 ? "s" : ""} ago`
  } else {
    return `Last updated ${elapsedDays} day${elapsedDays > 1 ? "s" : ""} ago`
  }
}
