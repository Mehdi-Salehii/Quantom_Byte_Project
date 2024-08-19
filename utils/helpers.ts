import { TicketType } from "@/supabase/functions/common/schema"

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
