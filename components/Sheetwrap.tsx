import HamburgerIcon from "./Icons/HamburgerIcon"
import { ModeToggle } from "./ModeToggle"
import { ClassProps, Nav } from "./Nav"
import { NewTicketPopover } from "./NewTicketPopover"
import {
  Sheet,
  SheetHeader,
  SheetTrigger,
  SheetTitle,
  SheetContent,
  SheetDescription,
} from "./ui/sheet"
import React from "react"

export const Sheetwrap = ({
  children,
  className,
}: React.PropsWithChildren<ClassProps>) => {
  return (
    <div className={className}>
      <Sheet>
        <SheetTrigger>
          <HamburgerIcon />
        </SheetTrigger>
        <SheetContent>
          <div className="flex flex-col justify-end gap-5">
            <div className="mx-auto flex w-1/2 items-center justify-between">
              <ModeToggle className="" />
              <div className="sm:hidden">
                <NewTicketPopover />
              </div>
            </div>
            <Nav className="mx-auto flex flex-col items-end gap-5 font-semibold" />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}
