"use client"

import { TicketType } from "@/supabase/functions/common/schema"
import { ColumnDef } from "@tanstack/react-table"
import Link from "next/link"
import { twMerge } from "tailwind-merge"

export const columns: ColumnDef<TicketType>[] = [
  {
    accessorKey: "title",
    header: () => (
      <div className="text-left font-bold text-foreground/80">Title</div>
    ),
    cell: ({ row }) => {
      const title: string = row.getValue("title")

      return <div className="text-left">{title}</div>
    },
  },
  {
    accessorKey: "created_at",
    header: () => (
      <div className="text-left font-bold text-foreground/80">Date</div>
    ),
    cell: ({ row }) => {
      const date: Date = new Date(row.getValue("created_at"))
      const options: Intl.DateTimeFormatOptions = {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }
      const userLocale = "en-US"

      const dateString = new Intl.DateTimeFormat(userLocale, options).format(
        date,
      )
      return <div className="text-left">{dateString}</div>
    },
  },
  {
    accessorKey: "status",

    header: () => (
      <div className="text-left font-bold text-foreground/80">Status</div>
    ),
    cell: ({ row }) => {
      const status: "rejected" | "fulfilled" | "processing" =
        row.getValue("status")
      let color =
        (status === "rejected" && "text-red-500") ||
        (status === "fulfilled" && "text-green-500") ||
        (status === "processing" && "text-purple-500")
      if (typeof color === "boolean") color = "text-purple-500"

      return <div className={twMerge("text-left", color)}>{status}</div>
    },
  },

  {
    accessorKey: "target_department",

    header: () => (
      <div className="text-left font-bold text-foreground/80">Recipient</div>
    ),
    cell: ({ row }) => {
      const Sender: string = row.getValue("target_department")

      return <div className="text-left">{Sender}</div>
    },
  },
  {
    accessorKey: "id",
    header: () => (
      <div className="text-left font-bold text-foreground/80">Details</div>
    ),
    cell: ({ row }) => {
      const id: string = row.getValue("id")
      return (
        <div className="grid place-items-start text-background/90">
          <Link
            href={`/details/${id}`}
            className="rounded-full bg-primary px-[8px] py-[2px]"
          >
            Details
          </Link>
        </div>
      )
    },
  },
]
