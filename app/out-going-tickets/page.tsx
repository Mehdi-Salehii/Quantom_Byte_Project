"use client"
import { TicketType } from "@/supabase/functions/common/schema"
import { getRecords, insertRecord } from "@/utils/actions"
import { Table } from "@/components/ui/table"
import { DataTable } from "./DataTable"
import { columns } from "./Columns"
import { useState } from "react"
import { AddTicketForm } from "@/components/AddTicketForm"
import { modifyDescription } from "@/utils/helpers"
import { tickets } from "@/utils/dummyData"

const OutGoingTicketsPage = () => {
  const [data, setData] = useState<TicketType[]>(
    modifyDescription(tickets.slice(30), 25),
  )

  return (
    <>
      <div className="lg:8/12 mx-auto mt-10 grid px-1 xsm:w-11/12 sm:w-10/12 sm:px-3 md:w-9/12 lg:px-6 xl:w-8/12 2xl:w-7/12">
        <div className="col-span-full col-start-1 col-end-[2]">
          <h1 className="mb-2 text-center font-semibold">Outgoing Tickets</h1>
          <DataTable columns={columns} data={data} />
        </div>
      </div>
    </>
  )
}
export default OutGoingTicketsPage
