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
  useAuth,
  UserButton,
} from "@clerk/nextjs"
import { Button } from "./ui/button"
import { UserRoundPen } from "lucide-react"
import Link from "next/link"
import { useUserStore } from "@/utils/store"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"

export const Header = ({ className }: ClassProps) => {
  const { userId } = useAuth()
  const {
    isPending,
    error,
    data: user,
    isFetching,
  } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      try {
        const { data } = await axios.get(`/api/user?id=${userId}`)

        return data
      } catch (err) {
        console.error(err)
      }
    },
    enabled: !!userId,
  })
  const [isOpen, setIsOpen] = useState(false)

  let modifiedName
  if (user?.[0]?.name) {
    modifiedName =
      "Welcome " +
      user?.[0]?.name?.split(" ")?.[0]?.slice(0, 1)?.toUpperCase() +
      user?.[0]?.name?.split(" ")?.[0]?.slice(1)
  } else {
    modifiedName = ""
  }

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
          <div className="flex items-center gap-1">
            {`${modifiedName}`}
            <UserButton
              appearance={{
                elements: {
                  userButtonOuterIdentifier: "text-foreground",
                },
              }}
            />
          </div>
        </SignedIn>
      </div>
      <Sheetwrap open={isOpen} setIsOpen={setIsOpen} className="sm:hidden" />
    </header>
  )
}
