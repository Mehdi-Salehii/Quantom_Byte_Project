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
  UserButton,
} from "@clerk/nextjs"
import { Button } from "./ui/button"
import { Facebook, Github, Instagram } from "lucide-react"
import Link from "next/link"

export const Footer = ({ className }: ClassProps) => {
  return (
    <footer
      className={twMerge(
        className +
          " mt-5 grid grid-cols-2 place-items-center gap-y-4 border-t-[1px] border-t-slate-100 max-sm:p-4 max-sm:pb-0 sm:mt-auto sm:px-6 sm:pb-0 sm:pt-4 md:grid-cols-4",
      )}
    >
      <div className="text-center md:col-span-1 md:col-start-2">
        <div className="relative mb-5 text-center font-semibold after:absolute after:-bottom-[4px] after:left-1/4 after:h-[1px] after:w-1/2 after:bg-slate-100/80 after:text-center after:content-['']">
          Useful Links
        </div>
        <Nav />
      </div>
      <div className="self-start">
        <div className="relative mb-10 text-center font-semibold after:absolute after:-bottom-[4px] after:left-1/4 after:h-[1px] after:w-1/2 after:bg-slate-100/80 after:text-center after:content-['']">
          Follow Us
        </div>
        <div className="flex gap-5 md:col-span-1 md:col-start-3">
          <Link
            href="#"
            className="transition-colors duration-200 hover:text-pink-500"
          >
            <Instagram />
          </Link>
          <Link
            href="#"
            className="transition-colors duration-200 hover:text-blue-500"
          >
            <Facebook />
          </Link>
          <Link
            href="#"
            className="transition-colors duration-200 hover:text-foreground/50"
          >
            <Github />
          </Link>
        </div>
      </div>
      <div className="col-span-full text-sm text-foreground/50 sm:mt-3">
        All rights reserved Quantom Bytes &#169;
      </div>
    </footer>
  )
}
