"use client"
import React from "react"
import { ClassProps, Nav } from "./Nav"

import { twMerge } from "tailwind-merge"

import { Github, Linkedin } from "lucide-react"
import Link from "next/link"
import { useUser } from "@clerk/nextjs"

export const Footer = ({ className }: ClassProps) => {
  const { isSignedIn } = useUser()

  return (
    <footer
      className={twMerge([
        className,
        "border-t-border-100 flex flex-col items-center justify-center gap-2 border-t-[1px] max-sm:p-4 max-sm:pb-0 sm:gap-5 sm:px-6 sm:pb-0 sm:pt-4 md:mt-5 md:grid md:grid-cols-5 md:place-items-center",
      ])}
    >
      <div
        className={`flex ${isSignedIn ? "gap-5 md:gap-7 lg:gap-10" : ""} items-center justify-center text-center md:col-span-1 md:col-start-3`}
      >
        {isSignedIn ? (
          <div className="">
            <div className="relative mb-5 text-center font-semibold after:absolute after:-bottom-[4px] after:left-1/4 after:h-[1px] after:w-1/2 after:bg-border after:text-center after:content-['']">
              Useful Links
            </div>
            <Nav />
          </div>
        ) : (
          ""
        )}
        <div className={`self-start`}>
          <div className="relative mb-10 whitespace-nowrap text-center font-semibold after:absolute after:-bottom-[4px] after:left-1/4 after:h-[1px] after:w-1/2 after:bg-border after:text-center after:content-['']">
            Follow Us
          </div>
          <div className="flex gap-5 md:col-span-1 md:col-start-3">
            <Link
              href="https://www.linkedin.com/in/mehdi-salehi-484254331/"
              className="cursor-pointer transition-colors duration-200 hover:text-blue-500"
            >
              <Linkedin />
            </Link>
            <Link
              href="https://github.com/Mehdi-Salehii"
              className="cursor-pointer transition-colors duration-200 hover:text-foreground/50"
            >
              <Github />
            </Link>
          </div>
        </div>
      </div>
      <div className="col-span-full text-sm text-foreground/50">
        &#169; All rights reserved Quantom Byte {new Date().getFullYear()}
      </div>
    </footer>
  )
}
