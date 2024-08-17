"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import React from "react"
import { twMerge } from "tailwind-merge"
export type ClassProps = {
  className?: string
}
const routes = [
  { url: "/", name: "Home" },
  { url: "/out-going-tickets", name: "OutgoingTickets" },
]
export const Nav = ({ className }: ClassProps) => {
  const curPath = usePathname()
  return (
    <nav>
      <ul className={className}>
        {routes.map((route, i) => (
          <li
            className={twMerge(
              `rounded px-5 text-primary transition-colors duration-200 ${
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
