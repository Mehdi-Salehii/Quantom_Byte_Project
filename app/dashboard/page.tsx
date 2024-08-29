"use client"
import { TicketType } from "@/supabase/functions/common/schema"

import { DataTable } from "./DataTable"
import { columns } from "./Columns"
import { useEffect, useState } from "react"
import { AddTicketForm } from "@/components/AddTicketForm"
import { modifyDescription } from "@/utils/helpers"
import { tickets } from "@/utils/dummyData"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { useAuth } from "@clerk/nextjs"
import axios from "axios"
import { toast } from "@/components/ui/use-toast"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import CompleteProfile from "@/components/CompleteProfile"
import DashboardLoader from "@/components/DashboardLoader"
import ServerErrorRetry from "@/components/ServerErrorRetry"

const Dashboard = () => {
  // const [data, setData] = useState<TicketType[]>([])
  // const modifiedData = data?.length ? modifyDescription(data, 15) : []
  const [data, setData] = useState<TicketType[]>(tickets.slice(0, 15))
  const modifiedData = modifyDescription(data, 15)

  const { userId } = useAuth()

  const [userInMyDb, setUserInMyDb] = useState(true)
  const [errorInDb, setErrorInDb] = useState(false)
  const [loadingTickets, setLoadingTickets] = useState(true)
  /*
  const { mutateAsync } = useMutation({
    mutationFn: async () => {
      try {
        const { data } = await axios.get(`/api/user?id=${userId}`)

        return data
      } catch (err) {
        throw err
      }
    },
    onSuccess: async (data) => {
      try {
        }
        if (!data) {
          setErrorInDb(true)
          return
        }
        if (!data?.length) {
          setUserInMyDb(false)
          return
        const department = data[0].user_department

        const { data: recievedTickets } = await axios.get(
          `/api/tickets-recieved?department=${department}`,
        )
        const modifiedData = recievedTickets?.length
          ? modifyDescription(recievedTickets, 15)
          : []
        setData(modifiedData)
        setLoadingTickets(false)
      } catch (error) {
        toast({
          description: `Something went wrong on server. Please try again! ${error}`,
          className: "bg-red-600 text-lg font-semibold text-foreground",
        })
      }
    },
    onError: (error) => {
      console.error(error)
      toast({
        description: `Something went wrong on server. Please try again! ${error}`,
        className: "bg-red-600 text-lg font-semibold text-foreground",
      })
    },
  })
  useEffect(() => {
    const init = async () => {
      await mutateAsync()
    }
    init()
  }, [userId])
*/
  return (
    <>
      <div className="mt-10 grid xsm:px-1 sm:grid-cols-[15fr_1fr_4fr] sm:px-3 lg:px-6 xl:grid-cols-[15fr_2fr_3fr]">
        <div className="col-span-full col-start-1 col-end-[2]">
          {/* !loadingTickets && userInMyDb &&  */}
          {
            <>
              <h1 className="mb-2 text-center font-semibold">
                Tickets to your department
              </h1>
              <DataTable columns={columns} data={data} />
            </>
          }

          {/* {loadingTickets && (
            <div className="grid h-full w-full place-items-center">
              <DashboardLoader />
            </div>
          )}
          {!userInMyDb && <CompleteProfile />}
          {!loadingTickets && errorInDb && (
            <ServerErrorRetry
              mutateAsync={mutateAsync}
              setLoadingTickets={setLoadingTickets}
            />
          )} */}
        </div>
        <div className="col-start-3 col-end-[-1] hidden text-center sm:mt-0 sm:block">
          <AddTicketForm />
        </div>
      </div>
    </>
  )
}
export default Dashboard
