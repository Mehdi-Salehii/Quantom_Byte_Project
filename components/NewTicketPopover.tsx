"use client"
import React, { useState } from "react"
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"
import NewTicket from "./NewTicket"
import { AddTicketForm } from "./AddTicketForm"

export const NewTicketPopover = () => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false)

  return (
    <Popover open={isPopoverOpen}>
      <PopoverTrigger>
        <NewTicket
          onClick={() => setIsPopoverOpen(!isPopoverOpen)}
          className="cursor-pointer"
        />{" "}
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <AddTicketForm setOpen={setIsPopoverOpen} />
      </PopoverContent>
    </Popover>
  )
}
