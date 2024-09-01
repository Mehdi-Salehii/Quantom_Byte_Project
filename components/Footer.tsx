"use client"
import React, { useState } from "react"
import { ClassProps, Nav } from "./Nav"

import { twMerge } from "tailwind-merge"

import { Facebook, Github, Instagram } from "lucide-react"
import Link from "next/link"
import { SignedIn, useUser } from "@clerk/nextjs"

export const Footer = ({ className }: ClassProps) => {
  const { isSignedIn, isLoaded } = useUser()
  const SignedInFooterStyle =
    isLoaded && isSignedIn ? "" : "grid-cols-1 md:grid-cols-1"
  return (
    <footer
      className={twMerge([
        className,
        "border-t-border-100 mt-5 grid grid-cols-2 place-items-center gap-2 border-t-[1px] max-sm:p-4 max-sm:pb-0 sm:gap-5 sm:px-6 sm:pb-0 sm:pt-4 md:grid-cols-4",
        SignedInFooterStyle,
      ])}
    >
      <div className="text-center md:col-span-1 md:col-start-2">
        <SignedIn>
          <div className="relative mb-5 text-center font-semibold after:absolute after:-bottom-[4px] after:left-1/4 after:h-[1px] after:w-1/2 after:bg-border after:text-center after:content-['']">
            Useful Links
          </div>
          <Nav />
        </SignedIn>
      </div>
      <div className="self-start">
        <div className="relative mb-10 text-center font-semibold after:absolute after:-bottom-[4px] after:left-1/4 after:h-[1px] after:w-1/2 after:bg-border after:text-center after:content-['']">
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
      <div className="col-span-full text-sm text-foreground/50">
        All rights reserved Quantom Byte {new Date().getFullYear()} &#169;
      </div>
    </footer>
  )
}
