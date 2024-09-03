"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { tickets } from "@/utils/dummyData"
import Image from "next/image"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { useAuth } from "@clerk/nextjs"
import { useState } from "react"
import { TicketType } from "@/supabase/functions/common/schema"
import ServerErrorOutgoing from "@/components/ServerErrorOutgoing"
import DetailsPageLoader from "@/components/DetailsPageLoader"
import ManageTicketForm from "@/components/ManageTicketForm"

export default function TicketDetails({ params }: { params: { id: string } }) {
  const dummyTicket = tickets.find((t) => t.id === params.id)

  const [errorInDb, setErrorInDb] = useState(false)
  const [showform, setShowform] = useState(false)
  const { userId } = useAuth()
  const {
    data: user,
    isFetching: isFetchingUser,
    refetch: refetchUser,
  } = useQuery({
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
    data: ticketDetails,
    isFetching: isFetchingTicket,
    refetch,
  } = useQuery({
    queryKey: ["ticket-details"],
    queryFn: async () => {
      try {
        const { data: userTicket } = await axios.get(`/api/ticket/${params.id}`)

        if (!userTicket) {
          setErrorInDb(true)
          return
        }

        if (!Array.isArray(userTicket) && dummyTicket) {
          if (dummyTicket?.target_department === user?.[0]?.user_department) {
            setShowform(true)
          }
          return dummyTicket
        }
        if (Array.isArray(userTicket) && userTicket?.length) {
          if (
            userTicket?.[0]?.target_department === user?.[0]?.user_department
          ) {
            setShowform(true)
          }
          return userTicket[0]
        }

        return []
      } catch (err) {
        console.error(err)
      }
    },
    enabled: !!user,
  })

  if (!ticketDetails && !isFetchingUser && !isFetchingTicket) {
    return <p className="text-center text-red-500">Ticket not found!</p>
  }
  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }
  const userLocale = "en-US"
  const dateValue: string | Date = ticketDetails?.created_at

  const date = new Date(dateValue)
  const isValidDate = date instanceof Date && !isNaN(date.getTime())

  const dateString = isValidDate
    ? new Intl.DateTimeFormat(userLocale, options).format(date)
    : "Date Unavailable"
  return (
    <div className="container mx-auto my-10 flex justify-center space-x-5 px-4">
      {!isFetchingUser &&
        !isFetchingTicket &&
        !errorInDb &&
        !!ticketDetails && (
          <div className="flex flex-col gap-5 sm:flex-row">
            <Card
              className={`${(ticketDetails.status === "fulfilled" && "bg-green-200/30") || (ticketDetails.status === "rejected" && "bg-red-200/30") || (ticketDetails.status === "processing" && "bg-purple-200/30")}`}
            >
              <CardHeader className="space-y-4">
                <div className="self-center">
                  <Badge
                    variant="secondary"
                    className={`${
                      ticketDetails.status === "fulfilled"
                        ? "bg-green-500 text-white"
                        : ticketDetails.status === "rejected"
                          ? "bg-red-500 text-white"
                          : "bg-purple-500 text-white"
                    } grid place-items-center px-2 py-[5px]`}
                  >
                    {ticketDetails.status}
                  </Badge>
                </div>
                <CardTitle>{ticketDetails.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-7">
                  <div className="text-foreground/70">{dateString}</div>
                </div>
                <div className="flex flex-col md:flex-row md:justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold">Description</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {ticketDetails.description}
                    </p>
                  </div>
                </div>
                {ticketDetails.fulfill_message && (
                  <div className="mt-6">
                    <h3 className="text-xl font-semibold">
                      Your Ticket Was Fulfilled
                    </h3>
                    <p className="mt-2 text-sm text-green-600">
                      {ticketDetails.fulfill_message}
                    </p>
                  </div>
                )}
                {ticketDetails.reject_message && (
                  <div className="mt-6">
                    <h3 className="text-xl font-semibold">
                      Your Ticket Was Rejected
                    </h3>
                    <p className="mt-2 text-sm text-red-600">
                      {ticketDetails.reject_message}
                    </p>
                  </div>
                )}

                {!!ticketDetails?.pictures?.length && (
                  <div className="mt-5 flex w-full items-center justify-center">
                    <Image
                      src={ticketDetails?.pictures?.[0]}
                      width={600}
                      height={600}
                      alt="ticket picture"
                    />
                  </div>
                )}
              </CardContent>
            </Card>
            {showform && (
              <div className="w-full text-center sm:w-80">
                <ManageTicketForm id={params.id} />
              </div>
            )}
          </div>
        )}
      {!isFetchingUser && !isFetchingTicket && errorInDb && (
        <ServerErrorOutgoing refetch={refetch} />
      )}
      {(isFetchingTicket || isFetchingUser) && (
        <div className="grid h-full w-full place-items-center">
          <DetailsPageLoader />
        </div>
      )}
    </div>
  )
}
