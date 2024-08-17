import React from "react"
import { ClassProps, Nav } from "./Nav"
import { ModeToggle } from "./ModeToggle"
import { Logo } from "./Logo"
import { NewTicketPopover } from "./NewTicketPopover"

export const Header = ({ className }: ClassProps) => {
  return (
    <header className={className}>
      <Logo className="mr-auto" />
      <Nav className="flex font-semibold" />
      <NewTicketPopover />
      <ModeToggle className="" />
    </header>
  )
}
