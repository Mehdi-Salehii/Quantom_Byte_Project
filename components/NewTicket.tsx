import { SquarePen } from "lucide-react"
import { ClassProps } from "./NavLkinks"
import { MouseEventHandler } from "react"
type NewTicketPropsType = {
  onClick: MouseEventHandler<HTMLDivElement>
  className?: string
}
const NewTicket = ({ className, onClick }: NewTicketPropsType) => {
  return (
    <div className={className} onClick={onClick}>
      <SquarePen />
    </div>
  )
}

export default NewTicket
