"use client"

import { TicketType } from "@/supabase/functions/common/schema"
import { ColumnDef } from "@tanstack/react-table"

export const columns: ColumnDef<TicketType>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "description",
    header: "Description",
  },
  {
    accessorKey: "department",
    header: "Department",
  },
]
