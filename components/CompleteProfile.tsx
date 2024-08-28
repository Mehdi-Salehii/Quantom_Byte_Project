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
import { AlertCircle } from "lucide-react"
import { cn } from "@/lib/utils"

export default function CompleteProfile() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center p-4 text-center transition-colors duration-300">
      <Card className="max-w-md rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
        <CardHeader className="flex flex-col items-center">
          <AlertCircle className="mb-2 h-12 w-12 text-red-500 dark:text-red-400" />
          <CardTitle className="text-xl font-semibold text-gray-800 dark:text-white">
            Complete Your Profile
          </CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="mb-6 text-gray-600 dark:text-gray-300">
            Complete your profile now to view tickets related to your
            department.
          </CardDescription>
          <Link href="/update-information">
            <Button
              variant="default"
              className={cn(
                "bg-green-500 px-6 py-2 text-sm font-medium hover:bg-green-400",
                "sm:px-8 sm:py-3 sm:text-base",
                "md:px-10 md:py-4 md:text-lg",
                "lg:px-12 lg:py-5 lg:text-xl",
              )}
            >
              Update Information
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  )
}
