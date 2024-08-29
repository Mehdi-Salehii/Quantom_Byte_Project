"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"
import { AlertTriangle } from "lucide-react"
import { cn } from "@/lib/utils"
import { Dispatch, SetStateAction } from "react"
import { QueryObserverResult, RefetchOptions } from "@tanstack/react-query"

type ServerErrorRetryProps = {
  refetch: (
    options?: RefetchOptions,
  ) => Promise<QueryObserverResult<any, Error>>
}

export default function ServerErrorOutgoing({
  refetch,
}: ServerErrorRetryProps) {
  const handleRetry = async () => {
    try {
      await refetch()
    } catch (error) {
      console.error("Error retrying:", error)
    }
  }

  return (
    <div className="flex h-full w-full flex-col items-center justify-center p-4 text-center transition-colors duration-300">
      <Card className="max-w-md rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
        <CardHeader className="flex flex-col items-center">
          <AlertTriangle className="mb-2 h-12 w-12 text-red-500 dark:text-red-400" />
          <CardTitle className="text-xl font-semibold text-gray-800 dark:text-white">
            Server Error
          </CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="mb-6 text-gray-600 dark:text-gray-300">
            Something went wrong while getting your tickets. Please try again
          </CardDescription>
          <Button
            onClick={handleRetry}
            variant="default"
            className={cn(
              "bg-blue-500 px-6 py-2 text-sm font-medium hover:bg-blue-400",
              "sm:px-8 sm:py-3 sm:text-base",
              "md:px-10 md:py-4 md:text-lg",
              "lg:px-12 lg:py-5 lg:text-xl",
            )}
          >
            Retry
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
