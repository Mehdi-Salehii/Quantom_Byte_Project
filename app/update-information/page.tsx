"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, Building2 } from "lucide-react"
import UpdateUserForm from "@/components/UpdateUserForm"
import { makeLastModifiedMessage } from "@/utils/helpers"
import { useUser } from "@clerk/nextjs"
import useUserQuery from "../hooks/query/useUserQuery"

export default function ProfilePage() {
  const { user: userClerk } = useUser()
  const modifiedName = userClerk?.fullName
    ? userClerk?.fullName
        ?.split(" ")
        .map((n) => n.at(0)?.toUpperCase() + n.slice(1))
        .join(" ")
    : ""
  const { data: user, isFetching } = useUserQuery()
  return (
    <div className="container mx-auto my-10 px-4">
      <div className="mx-auto flex flex-col items-center gap-6 xsm:w-10/12 sm:flex-row sm:justify-between md:w-8/12 lg:w-7/12">
        <Card className="w-full bg-primary/10 dark:bg-primary/20 md:w-1/2">
          <CardHeader className="space-y-2 text-center">
            <Badge
              variant="default"
              className="flex items-center justify-center gap-2 px-2 py-1"
            >
              <Building2 className="h-4 w-4" />
              {user?.[0]?.user_department}
            </Badge>
            <CardTitle className="flex items-center justify-center gap-2 text-2xl">
              <User className="h-6 w-6" />
              {modifiedName}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="flex items-center justify-center gap-2 text-center text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              Last modified:{" "}
              {user?.[0]?.updated_at &&
                makeLastModifiedMessage(user?.[0]?.updated_at)}
            </p>
          </CardContent>
        </Card>

        <div className="w-full md:w-1/2">
          <UpdateUserForm isFetching={isFetching} user={user} />
        </div>
      </div>
    </div>
  )
}
