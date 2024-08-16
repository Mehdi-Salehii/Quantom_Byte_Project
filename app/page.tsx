"use client"
import { TicketType } from "@/supabase/functions/common/schema"
import { getRecords, insertRecord } from "@/utils/actions"
import { Table } from "@/components/ui/table"
import { DataTable } from "./DataTable"
import { columns } from "./Columns"
import { useState } from "react"
import { AddTicketForm } from "@/components/AddTicketForm"

const Home = () => {
  const [data, setData] = useState<TicketType[]>([
    {
      id: 1,
      title: "windows broken",
      description: "windows is broken",
      department: "engineering",
    },
  ])
  return (
    <>
      <div className="mt-10 grid grid-cols-10 px-10">
        <div className="col-span-6 col-start-1">
          <DataTable columns={columns} data={data} />
        </div>
        <div className="col-span-2 col-start-8">
          <AddTicketForm />
        </div>
      </div>
    </>
  )
}
export default Home
