import { X } from "lucide-react"
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
  SheetClose,
} from "./ui/sheet"
import React from "react"
type SheetWrapType = {
  className?: string
  open: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}
export const Sheetwrap = ({
  children,
  className,
  open,
  setIsOpen,
}: React.PropsWithChildren<SheetWrapType>) => {
  return (
    <div className={className}>
      <Sheet open={open}>
        <SheetTrigger>
          <div
            onClick={() => {
              if (setIsOpen) setIsOpen(!open)
            }}
          >
            <HamburgerIcon />
          </div>
        </SheetTrigger>
        <SheetContent
          onEscapeKeyDown={() => setIsOpen(!open)}
          onPointerDownOutside={() => setIsOpen(!open)}
        >
          <div className="flex w-full">
            <div className="ml-auto cursor-pointer">
              <X onClick={() => setIsOpen(!open)} />
            </div>
          </div>
          <div className="mt-10 flex flex-col justify-end gap-5">
            <div className="mx-auto flex w-1/2 items-center justify-between">
              <ModeToggle className="" />
              <div className="sm:hidden">
                <NewTicketPopover />
              </div>
            </div>
            <Nav
              open={open}
              setIsOpen={setIsOpen}
              className="mx-auto flex flex-col items-end gap-5 font-semibold"
            />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}
