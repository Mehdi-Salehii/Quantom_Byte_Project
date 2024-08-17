"use client"
import { TicketType } from "@/supabase/functions/common/schema"
import { getRecords, insertRecord } from "@/utils/actions"
import { Table } from "@/components/ui/table"
import { DataTable } from "./DataTable"
import { columns } from "./Columns"
import { useState } from "react"
import { AddTicketForm } from "@/components/AddTicketForm"
import { modifyDescription } from "../page"

const OutGoingTicketsPage = () => {
  const [data, setData] = useState<TicketType[]>([
    {
      id: 1,
      title: "windows broken",
      description: "windows is broken",
      department: "engineering",
    },
  ])
  const modifiedData = modifyDescription(data, 20)
  return (
    <>
      <div className="xsm:w-11/12 lg:8/12 mx-auto mt-10 grid px-1 sm:w-10/12 sm:px-3 md:w-9/12 lg:px-6 xl:w-8/12 2xl:w-7/12">
        <div className="col-span-full col-start-1 col-end-[2]">
          <h1 className="mb-2 text-center font-semibold">Outgoing Tickets</h1>
          <DataTable columns={columns} data={modifiedData} />
        </div>
      </div>
    </>
  )
}
export default OutGoingTicketsPage
