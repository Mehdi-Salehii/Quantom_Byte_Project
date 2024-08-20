import { TicketType } from "@/supabase/functions/common/schema"
import { ColumnDef } from "@tanstack/react-table"
import { boolean } from "drizzle-orm/mysql-core"
import { twMerge } from "tailwind-merge"

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
    accessorKey: "status",

    header: () => (
      <div className="text-center font-bold text-foreground/80">Status</div>
    ),
    cell: ({ row }) => {
      const status: "rejected" | "fulfilled" | "processing" =
        row.getValue("status")
      let color =
        (status === "rejected" && "text-red-500") ||
        (status === "fulfilled" && "text-green-500") ||
        (status === "processing" && "text-purple-500")
      if (typeof color === "boolean") color = "text-purple-500"

      return <div className={twMerge("text-center", color)}>{status}</div>
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
    accessorKey: "source_department",
    header: () => (
      <div className="text-center font-bold text-foreground/80">Sender</div>
    ),
    cell: ({ row }) => {
      const Sender: string = row.getValue("source_department")

      return <div className="text-center">{Sender}</div>
    },
  },
]
