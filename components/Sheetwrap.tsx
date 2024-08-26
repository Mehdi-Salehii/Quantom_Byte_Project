import { UserRoundPen, X } from "lucide-react"
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
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs"
import { Button } from "./ui/button"
import Link from "next/link"
import { useUserStore } from "@/utils/store"
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
  const user = useUserStore((state) => state.User)

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
              <SignedIn>
                <div className="flex items-center justify-center gap-2">
                  {Boolean(user.length) &&
                    `Welcome ${user[0]?.name?.split(" ")?.[0]}`}
                  <UserButton
                    appearance={{
                      elements: {
                        userButtonPopoverCard: { pointerEvents: "initial" },
                        userButtonOuterIdentifier: "text-foreground",
                      },
                    }}
                  />
                </div>
              </SignedIn>
            </div>
          </div>
          <div className="mt-10 flex flex-col justify-end gap-5">
            <div className="mx-auto flex w-1/2 items-center justify-between">
              <ModeToggle />
              <SignedIn>
                <Link
                  href={"/update-information"}
                  onClick={() => setIsOpen(false)}
                >
                  <UserRoundPen className="inline" width={25} height={25} />
                </Link>

                <NewTicketPopover />
              </SignedIn>
            </div>

            <SignedIn>
              <Nav
                open={open}
                setIsOpen={setIsOpen}
                className="mx-auto flex flex-col items-end gap-5 font-semibold"
              />
              <div className="mx-auto mt-16">
                <SignOutButton>
                  <Button variant={"destructive"}>Sign Out</Button>
                </SignOutButton>
              </div>
            </SignedIn>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}
