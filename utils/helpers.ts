import { TicketType } from "@/supabase/functions/common/schema"

export function modifyDescription(data: TicketType[], descLength: number) {
    const howLong = descLength
    const modifiedData = data.map((d) => {
      const { description, ...rest } = d
      const isLong = description.length > howLong
  
      return {
        ...rest,
        description: isLong ? description.slice(0, howLong) + "..." : description,
      }
    })
    return modifiedData
  }