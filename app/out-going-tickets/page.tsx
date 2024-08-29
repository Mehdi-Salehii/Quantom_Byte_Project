"use client"
import { TicketType } from "@/supabase/functions/common/schema"

import { Table } from "@/components/ui/table"
import { DataTable } from "./DataTable"
import { columns } from "./Columns"
import { useState } from "react"
import { AddTicketForm } from "@/components/AddTicketForm"
import { modifyDescription } from "@/utils/helpers"
import { tickets } from "@/utils/dummyData"
import { useAuth } from "@clerk/nextjs"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import DashboardLoader from "@/components/DashboardLoader"
import OutgoingTicketsLoader from "@/components/OutgoingTicketsLoader"
import ServerErrorRetry from "@/components/ServerErrorRetry"
import ServerErrorOutgoing from "@/components/ServerErrorOutgoing"

const OutGoingTicketsPage = () => {
  const [data, setData] = useState<TicketType[]>(
    modifyDescription(tickets.slice(15), 15),
  )
  const { userId } = useAuth()
  const [errorInDb, setErrorInDb] = useState(false)

  const {
    data: ticketsSent,
    isFetching,
    refetch,
  } = useQuery({
    queryKey: ["tickets-sent"],
    queryFn: async () => {
      try {
        const { data } = await axios.get(`/api/tickets-sent?id=${userId}`)
        if (!data) {
          setErrorInDb(true)
          return
        }
        return data
      } catch (err) {
        console.error(err)
      }
    },
    enabled: !!userId,
  })

  return (
    <>
      {!isFetching && errorInDb && <ServerErrorOutgoing refetch={refetch} />}
      {isFetching && (
        <div className="grid h-full w-full place-items-center">
          <OutgoingTicketsLoader />
        </div>
      )}
      {!isFetching && (
        <div className="lg:8/12 mx-auto mt-10 grid max-w-full px-1 xsm:w-11/12 sm:w-10/12 sm:px-3 md:w-9/12 lg:px-6 xl:w-8/12 2xl:w-7/12">
          <div className="col-span-full col-start-1 col-end-[2]">
            <h1 className="mb-2 text-center font-semibold">Outgoing Tickets</h1>
            <DataTable columns={columns} data={data} />
          </div>
        </div>
      )}
    </>
  )
}
export default OutGoingTicketsPage
