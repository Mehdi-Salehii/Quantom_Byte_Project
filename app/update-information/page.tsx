"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, Building2 } from "lucide-react"
import UpdateUserForm from "@/components/UpdateUserForm"
import { useUserStore } from "@/utils/store"
import { makeLastModifiedMessage } from "@/utils/helpers"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { useAuth } from "@clerk/nextjs"

export default function ProfilePage() {
  const { userId } = useAuth()

  const {
    isPending,
    error,
    data: user,
    isFetching,
  } = useQuery({
    queryKey: ["user"],
    staleTime: 0,
    queryFn: async () => {
      try {
        const { data } = await axios.get(`/api/user?id=${userId}`)

        return data
      } catch (err) {
        console.log(err)
      }
    },
    enabled: !!userId,
  })
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
              {user && user[0]?.user_department}
            </Badge>
            <CardTitle className="flex items-center justify-center gap-2 text-2xl">
              <User className="h-6 w-6" />
              {user && user[0]?.name}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="flex items-center justify-center gap-2 text-center text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              Last modified:{" "}
              {user?.length &&
                makeLastModifiedMessage(user && user[0]?.updated_at)}
            </p>
          </CardContent>
        </Card>

        <div className="w-full md:w-1/2">
          <UpdateUserForm />
        </div>
      </div>
    </div>
  )
}
