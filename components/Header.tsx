"use client"
import React, { useState } from "react"
import { ClassProps, Nav } from "./Nav"
import { ModeToggle } from "./ModeToggle"
import { Logo } from "./Logo"
import { NewTicketPopover } from "./NewTicketPopover"
import { Sheetwrap } from "./Sheetwrap"
import { twMerge } from "tailwind-merge"

export const Header = ({ className }: ClassProps) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <header
      className={twMerge(
        className + " justify-around max-sm:p-4 sm:px-6 sm:py-4",
      )}
    >
      <Logo className="mr-auto" />

      <Nav className="hidden font-semibold sm:flex" />
      <div className="hidden sm:hidden">
        <NewTicketPopover />
      </div>
      <ModeToggle className="hidden sm:block" />

      <Sheetwrap open={isOpen} setIsOpen={setIsOpen} className="sm:hidden" />
    </header>
  )
}
