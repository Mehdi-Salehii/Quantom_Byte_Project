"use client"

import { TicketType } from "@/supabase/functions/common/schema"
import { ColumnDef } from "@tanstack/react-table"
import Link from "next/link"

export const columns: ColumnDef<TicketType>[] = [
  {
    accessorKey: "title",
    header: () => (
      <div className="text-center font-bold text-foreground/80">Title</div>
    ),
    cell: ({ row }) => {
      const title: string = row.getValue("title")

      return <div className="text-center">{title}</div>
    },
  },
  {
    accessorKey: "description",
    header: () => (
      <div className="text-center font-bold text-foreground/80">
        Description
      </div>
    ),
    cell: ({ row }) => {
      const description: string = row.getValue("description")

      return <div className="text-center">{description}</div>
    },
  },
  {
    accessorKey: "target_department",

    header: () => (
      <div className="text-center font-bold text-foreground/80">Recipient</div>
    ),
    cell: ({ row }) => {
      const Sender: string = row.getValue("target_department")

      return <div className="text-center">{Sender}</div>
    },
  },
  {
    accessorKey: "id",
    header: () => (
      <div className="text-center font-bold text-foreground/80">Details</div>
    ),
    cell: ({ row }) => {
      const id: string = row.getValue("id")
      return (
        <div className="grid place-items-center text-background/90">
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
