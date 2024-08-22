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
import { SignedIn, SignOutButton, UserButton } from "@clerk/nextjs"
import { Button } from "./ui/button"
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
          <div className="flex w-full">
            <div className="mx-auto">
              <UserButton
                showName
                appearance={{
                  elements: {
                    userButtonPopoverCard: { pointerEvents: "initial" },
                    userButtonOuterIdentifier: "text-foreground",
                  },
                }}
              />
            </div>
          </div>
          <div className="mt-10 flex flex-col justify-end gap-5">
            <div className="mx-auto flex w-1/2 items-center justify-between">
              <ModeToggle className="" />
              <SignedIn>
                <div className="sm:hidden">
                  <NewTicketPopover />
                </div>
              </SignedIn>
            </div>
            <Nav
              open={open}
              setIsOpen={setIsOpen}
              className="mx-auto flex flex-col items-end gap-5 font-semibold"
            />
            <div className="mx-auto mt-16">
              <SignedIn>
                <SignOutButton>
                  <Button variant={"destructive"}>Sign Out</Button>
                </SignOutButton>
              </SignedIn>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}
