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
  const [data, setData] = useState<TicketType>()
  const ticket = dummyTicket ? dummyTicket : data

  const [errorInDb, setErrorInDb] = useState(false)
  const { userId } = useAuth()
  const {
    data: ticketsSent,
    isFetching,
    refetch,
  } = useQuery({
    queryKey: ["ticket-details"],
    queryFn: async () => {
      try {
        console.log(params.id)
        const { data: userTicket } = await axios.get(`/api/ticket/${params.id}`)

        if (!userTicket) {
          setErrorInDb(true)
          return
        }
        if (userTicket?.length) setData(userTicket[0])
        return userTicket
      } catch (err) {
        console.error(err)
      }
    },
    enabled: !!userId && !dummyTicket,
  })

  if (!ticket && !isFetching) {
    return <p className="text-center text-red-500">Ticket not found!</p>
  }

  return (
    <div className="container mx-auto my-10 flex justify-center space-x-5 px-4">
      {!isFetching && !errorInDb && !!ticket && (
        <div className="flex flex-col gap-5 sm:flex-row">
          <Card
            className={`${(ticket.status === "fulfilled" && "bg-green-200/30") || (ticket.status === "rejected" && "bg-red-200/30") || (ticket.status === "processing" && "bg-purple-200/30")}`}
          >
            <CardHeader className="space-y-4">
              <div className="self-center">
                <Badge
                  variant="secondary"
                  className={`${
                    ticket.status === "fulfilled"
                      ? "bg-green-500 text-white"
                      : ticket.status === "rejected"
                        ? "bg-red-500 text-white"
                        : "bg-purple-500 text-white"
                  } grid place-items-center px-2 py-[5px]`}
                >
                  {ticket.status}
                </Badge>
              </div>
              <CardTitle>{ticket.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row md:justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold">Description</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {ticket.description}
                  </p>
                </div>
              </div>
              {ticket.fulfill_message && (
                <div className="mt-6">
                  <h3 className="text-xl font-semibold">
                    Your Ticket Was Fulfilled
                  </h3>
                  <p className="mt-2 text-sm text-green-600">
                    {ticket.fulfill_message}
                  </p>
                </div>
              )}
              {ticket.reject_message && (
                <div className="mt-6">
                  <h3 className="text-xl font-semibold">
                    Your Ticket Was Rejected
                  </h3>
                  <p className="mt-2 text-sm text-red-600">
                    {ticket.reject_message}
                  </p>
                </div>
              )}

              {!!ticket?.pictures?.length && (
                <div className="mt-5 flex w-full items-center justify-center">
                  <Image
                    src={ticket?.pictures?.[0]}
                    width={600}
                    height={600}
                    alt="ticket picture"
                  />
                </div>
              )}
            </CardContent>
          </Card>
          <div className="w-56 text-center">
            <ManageTicketForm isFetching={isFetching} />
          </div>
        </div>
      )}
      {!isFetching && errorInDb && <ServerErrorOutgoing refetch={refetch} />}
      {isFetching && (
        <div className="grid h-full w-full place-items-center">
          <DetailsPageLoader />
        </div>
      )}
    </div>
  )
}
