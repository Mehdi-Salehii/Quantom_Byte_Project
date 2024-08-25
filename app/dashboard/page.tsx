"use client"
import { TicketType, UserType } from "@/supabase/functions/common/schema"
import { getRecords, insertRecord } from "@/utils/actions"
import { Table } from "@/components/ui/table"
import { DataTable } from "./DataTable"
import { columns } from "./Columns"
import { useEffect, useState } from "react"
import { AddTicketForm } from "@/components/AddTicketForm"
import { insertFromClerkToMyDb, modifyDescription } from "@/utils/helpers"
import { tickets } from "@/utils/dummyData"
import { useUserStore } from "@/utils/store"
import { useAuth, useUser } from "@clerk/nextjs"
import { getUser } from "@/utils/db_functions"
import axios from "axios"

const Dashboard = () => {
  const setUser = useUserStore((state) => state.setUser)
  const user = useUserStore((state) => state.User)

  const { userId } = useAuth()
  useEffect(() => {
    insertFromClerkToMyDb(userId as string)
      .then((data) => alert(JSON.stringify(data)))
      .catch((error) => {
        console.error("Error inserting or fetching user:", error)
      })
  }, [userId])

  const [data, setData] = useState<TicketType[]>(tickets.slice(0, 15))
  const modifiedData = modifyDescription(data, 15)
  // await new Promise((res) => setTimeout(res, 2000))
  return (
    <>
      <div className="mt-10 grid xsm:px-1 sm:grid-cols-[15fr_1fr_4fr] sm:px-3 lg:px-6 xl:grid-cols-[15fr_2fr_3fr]">
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
export default Dashboard
