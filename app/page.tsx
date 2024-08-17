"use client"
import { TicketType } from "@/supabase/functions/common/schema"
import { getRecords, insertRecord } from "@/utils/actions"
import { Table } from "@/components/ui/table"
import { DataTable } from "./DataTable"
import { columns } from "./Columns"
import { useState } from "react"
import { AddTicketForm } from "@/components/AddTicketForm"
import { modifyDescription } from "@/utils/helpers"

const Home = () => {
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
      <div className="mt-10 grid px-1 sm:grid-cols-[15fr_1fr_4fr] sm:px-3 lg:px-6 xl:grid-cols-[15fr_2fr_3fr]">
        <div className="col-span-full col-start-1 col-end-[2]">
          <h1 className="mb-2 text-center font-semibold">
            Tickets to your department
          </h1>
          <DataTable columns={columns} data={modifiedData} />
        </div>
        <div className="col-start-3 col-end-[-1] hidden text-center sm:mt-0 sm:block">
          <AddTicketForm />
        </div>
      </div>
    </>
  )
}
export default Home
