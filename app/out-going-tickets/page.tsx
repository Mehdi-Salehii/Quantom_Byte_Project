"use client"
import { TicketType } from "@/supabase/functions/common/schema"
import { DataTable } from "./DataTable"
import { columns } from "./Columns"
import { useEffect, useState } from "react"
import { modifyDescription } from "@/utils/helpers"
import { tickets } from "@/utils/dummyData"
import OutgoingTicketsLoader from "@/components/OutgoingTicketsLoader"
import ServerErrorOutgoing from "@/components/ServerErrorOutgoing"
import useOutgoingTicketsQuery from "../hooks/query/useOutgoingTicketsQuery"

const OutGoingTicketsPage = () => {
  const [data, setData] = useState<TicketType[]>([])
  let modifiedData = data ?? []

  if (data) {
    modifiedData = modifyDescription(data, 30)
  }
  const [errorInDb, setErrorInDb] = useState(false)
  const {
    data: ticketsSent,
    isFetching,
    refetch,
  } = useOutgoingTicketsQuery(setErrorInDb)
  const ticketsFromDb =
    ticketsSent?.length && Array.isArray(ticketsSent) ? ticketsSent : []
  const dummyTickets = tickets.slice(0, 3)

  useEffect(() => {
    setData([...ticketsFromDb, ...dummyTickets])
  }, [isFetching])

  return (
    <>
      {!isFetching && errorInDb && <ServerErrorOutgoing refetch={refetch} />}
      {isFetching && (
        <div className="h-full w-full">
          <OutgoingTicketsLoader />
        </div>
      )}
      {!isFetching && (
        <div className="lg:8/12 mx-auto mt-10 grid max-w-full xsm:w-11/12 sm:w-10/12 sm:px-3 md:w-9/12 lg:px-6 xl:w-8/12 2xl:w-7/12">
          <div className="col-span-full col-start-1 col-end-[2]">
            <h1 className="mb-2 text-center font-semibold">Outgoing Tickets</h1>
            <DataTable columns={columns} data={modifiedData} />
          </div>
        </div>
      )}
    </>
  )
}
export default OutGoingTicketsPage
