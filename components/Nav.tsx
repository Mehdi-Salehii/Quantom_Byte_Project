"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import React from "react"
export type ClassProps = {
    className?: string
}
const routes = [
    { url: "/", name: "Home" },
    { url: "/tickets", name: "Tickets" },
]
export const Nav = ({ className }: ClassProps) => {
    const curPath = usePathname()
    return (
        <nav>
            <ul className={className}>
                {routes.map((route, i) => (
                    <li
                        className={`px-2 transition-colors duration-200 ${
                            curPath === route.url ? "bg-primary" : ""
                        } py-1`}
                        key={i}
                    >
                        <Link href={route.url}>{route.name}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
