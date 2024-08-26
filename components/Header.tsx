"use client"
import React, { useState } from "react"
import { ClassProps, Nav } from "./Nav"
import { ModeToggle } from "./ModeToggle"
import { Logo } from "./Logo"
import { NewTicketPopover } from "./NewTicketPopover"
import { Sheetwrap } from "./Sheetwrap"
import { twMerge } from "tailwind-merge"
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs"
import { Button } from "./ui/button"
import { UserRoundPen } from "lucide-react"
import Link from "next/link"

export const Header = ({ className }: ClassProps) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <header
      className={twMerge(
        "border-b-border-100 flex items-center justify-end gap-10 border-b-[1px] p-2" +
          " justify-around max-sm:p-4 sm:px-6 sm:py-4",
      )}
    >
      <Logo className="mr-auto" />
      <SignedIn>
        <Nav className="hidden font-semibold sm:flex" />
        <Link href={"/update-information"} className="hidden sm:block">
          <UserRoundPen className="inline" width={50} height={20} />
        </Link>
      </SignedIn>
      <ModeToggle className="hidden sm:block" />

      <div className="hidden sm:block">
        <SignedIn>
          <UserButton
            showName
            appearance={{
              elements: {
                userButtonOuterIdentifier: "text-foreground",
              },
            }}
          />
        </SignedIn>
      </div>
      <Sheetwrap open={isOpen} setIsOpen={setIsOpen} className="sm:hidden" />
    </header>
  )
}
