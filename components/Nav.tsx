"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import React from "react"
import { twMerge } from "tailwind-merge"
export type ClassProps = {
  className?: string
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>
  open?: boolean
}
const routes = [
  { url: "/", name: "Home" },
  { url: "/out-going-tickets", name: "OutgoingTickets" },
  { url: "/dashboard", name: "Dashboard " },
]
export const Nav = ({ className, setIsOpen, open }: ClassProps) => {
  const curPath = usePathname()
  return (
    <nav>
      <ul className={className}>
        {routes.map((route, i) => (
          <li
            onClick={() => {
              if (setIsOpen) setIsOpen(!open)
            }}
            className={twMerge(
              `rounded px-5 text-sm text-primary transition-colors duration-200 hover:opacity-70 ${
                curPath === route.url ? "bg-primary text-foreground" : ""
              } py-1`,
            )}
            key={i}
          >
            <Link href={route.url}>{route.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
