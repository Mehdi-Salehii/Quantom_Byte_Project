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
      </SignedIn>
      <div className="hidden sm:hidden">
        <NewTicketPopover />
      </div>
      <SignedOut>
        <SignUpButton mode="modal">
          <Button>Sign Up</Button>
        </SignUpButton>
        <SignInButton mode="modal" forceRedirectUrl="/dashboard">
          <Button>Sign In</Button>
        </SignInButton>
      </SignedOut>
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
