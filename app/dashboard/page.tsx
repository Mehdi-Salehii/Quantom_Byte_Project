"use client"
import { TicketType } from "@/supabase/functions/common/schema"
import { DataTable } from "./DataTable"
import { columns } from "./Columns"
import { useEffect, useState } from "react"
import { AddTicketForm } from "@/components/AddTicketForm"
import { modifyDescription } from "@/utils/helpers"
import { tickets } from "@/utils/dummyData"
import { useAuth, useSession, useUser } from "@clerk/nextjs"
import { useMutation, useQuery } from "@tanstack/react-query"
import axios from "axios"
import { toast } from "@/components/ui/use-toast"
import DashboardLoader from "@/components/DashboardLoader"
import CompleteProfile from "@/components/CompleteProfile"
import ServerErrorRetry from "@/components/ServerErrorRetry"

const Dashboard = () => {
  const [data, setData] = useState<TicketType[]>([])

  const { isSignedIn } = useSession()
  // let modifiedData = data ?? []

  // if (data) {
  //   modifiedData = modifyDescription(data, 30)
  // }

  const { userId } = useAuth()

  const [userInMyDb, setUserInMyDb] = useState(true)
  const [errorInDb, setErrorInDb] = useState(false)
  const [loadingTickets, setLoadingTickets] = useState(true)
  const { data: user, isFetching: isFetchingUser } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      try {
        const { data } = await axios.get(`/api/user?id=${userId}`)

        return data
      } catch (err) {
        console.error(err)
      }
    },
    enabled: !!userId,
  })
  const {
    data: recievedTickets,
    isFetching: isFetchingRecievedTickets,
    refetch,
  } = useQuery({
    queryKey: ["recieved-tickets"],
    queryFn: async () => {
      try {
        const department = user?.[0]?.user_department
        const { data: recievedTickets } = await axios.get(
          `/api/tickets-recieved?department=${department}`,
        )
        if (Array.isArray(recievedTickets)) {
          setData([
            ...recievedTickets,
            ...tickets.filter((t) => t.target_department === department),
          ])
        } else {
          setData([
            ...tickets.filter((t) => t.target_department === department),
          ])
        }
        return data
      } catch (err) {
        console.error(err)
      }
    },
    enabled: !!user,
  })

  return (
    <>
      <div className="mt-10 grid xsm:px-1 sm:grid-cols-[14fr_1fr_6fr] sm:px-3 lg:px-6 xl:grid-cols-[15fr_1fr_4fr]">
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
