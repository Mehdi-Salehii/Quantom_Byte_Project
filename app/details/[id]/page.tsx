import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { tickets } from "@/utils/dummyData"

export default function TicketDetails({ params }: { params: { id: string } }) {
  const ticket = tickets.find((t) => t.id === params.id)

  if (!ticket) {
    return <p className="text-center text-red-500">Ticket not found!</p>
  }

  return (
    <div className="container relative mx-auto my-10 flex justify-center px-4">
      <Card className="">
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
              }`}
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
              <h3 className="text-xl font-semibold">Fulfillment Message</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {ticket.fulfill_message}
              </p>
            </div>
          )}
          {ticket.reject_message && (
            <div className="mt-6">
              <h3 className="text-xl font-semibold">Rejection Message</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {ticket.reject_message}
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
