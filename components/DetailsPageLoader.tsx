import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Skeleton } from "./ui/skeleton"

export default function DetailsPageLoader() {
  return (
    <div className="mx-auto my-10 flex max-h-svh w-full justify-center overflow-hidden px-4 xsm:w-4/5 sm:w-1/2 md:w-[35%] lg:w-[30%]">
      <Card className="w-full max-w-screen-md">
        <CardHeader className="space-y-4">
          <div className="self-center">
            <Skeleton className="h-6 w-20" />
          </div>
          <CardTitle>
            <Skeleton className="mx-auto h-8 w-3/4" />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row md:justify-between">
            <div className="flex-1">
              <div className="text-xl font-semibold">
                <Skeleton className="h-5 w-32" />
              </div>
              <div className="mt-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="mt-2 h-4 w-3/4" />
              </div>
            </div>
          </div>
          <div className="mt-6">
            <div className="text-xl font-semibold">
              <Skeleton className="h-5 w-36" />
            </div>
            <div className="mt-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="mt-2 h-4 w-3/4" />
            </div>
          </div>
          <div className="mt-6">
            <div className="text-xl font-semibold">
              <Skeleton className="h-5 w-40" />
            </div>
            <div className="mt-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="mt-2 h-4 w-3/4" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
