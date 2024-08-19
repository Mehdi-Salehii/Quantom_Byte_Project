import { TicketType } from "@/supabase/functions/common/schema"
import { ColumnDef } from "@tanstack/react-table"

export const columns: ColumnDef<TicketType>[] = [
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "description",
    header: "Description",
  },
  {
    accessorKey: "source_department",
    header: "Sender",
  },
]
