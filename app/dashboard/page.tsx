"use client"
import { TicketType } from "@/supabase/functions/common/schema"
import { DataTable } from "./DataTable"
import { columns } from "./Columns"
import { useState } from "react"
import { AddTicketForm } from "@/components/AddTicketForm"
import DashboardLoader from "@/components/DashboardLoader"
import CompleteProfile from "@/components/CompleteProfile"
import ServerErrorRetry from "@/components/ServerErrorRetry"
import useUserQuery from "../hooks/query/useUserQuery"
import useRecievedTicketsQuery from "../hooks/query/useRecievedTicketsQuery"

const Dashboard = () => {
  const [data, setData] = useState<TicketType[]>([])
  const [userInMyDb, setUserInMyDb] = useState(true)
  const [errorInDb, setErrorInDb] = useState(false)
  const [loadingTickets, setLoadingTickets] = useState(true)
  const { data: user, isFetching: isFetchingUser } = useUserQuery()
  const {
    data: recievedTickets,
    isFetching: isFetchingRecievedTickets,
    refetch,
  } = useRecievedTicketsQuery(user, setData, data)
  return (
    <>
      <div className="mt-10 grid px-2 sm:grid-cols-[14fr_1fr_6fr] sm:px-3 lg:px-6 xl:grid-cols-[15fr_1fr_4fr]">
        <div className="col-span-full col-start-1 col-end-[2]">
          {!isFetchingRecievedTickets && !isFetchingUser && userInMyDb && (
            <>
              <h1 className="mb-2 text-center font-semibold">
                Tickets to your department
              </h1>
              <DataTable columns={columns} data={data} />
            </>
          )}

          {(isFetchingRecievedTickets || isFetchingUser) && (
            <div className="grid h-full w-full place-items-center">
              <DashboardLoader />
            </div>
          )}
          {!userInMyDb && <CompleteProfile />}
          {!isFetchingRecievedTickets && errorInDb && (
            <ServerErrorRetry
              refetch={refetch}
              setLoadingTickets={setLoadingTickets}
            />
          )}
        </div>
        <div className="col-start-3 col-end-[-1] hidden text-center sm:mt-0 sm:block">
          <AddTicketForm />
        </div>
      </div>
    </>
  )
}
export default Dashboard
