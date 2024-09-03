import React from "react"
import { Skeleton } from "./ui/skeleton"

export default function OutgoingTicketsLoader() {
  return (
    <div className="lg:8/12 mx-auto mt-10 grid px-1 xsm:w-11/12 sm:w-10/12 sm:px-3 md:w-9/12 lg:px-6 xl:w-8/12 2xl:w-7/12">
      <div className="col-span-full col-start-1 col-end-[2]">
        <div className="mb-8 text-center">
          <Skeleton className="mx-auto h-6 w-40" />
        </div>
        <div className="mb-4 text-center">
          <Skeleton className="h-9 w-96" />
        </div>
        <div className="overflow-x-auto rounded-lg border">
          <table className="min-w-full">
            <thead>
              <tr className="bg-foreground/10">
                <th className="border-b px-4 py-3">
                  <Skeleton className="h-4 w-8" />
                </th>
                <th className="border-b px-4 py-3">
                  <Skeleton className="h-4 w-8" />
                </th>
                <th className="border-b px-4 py-3">
                  <Skeleton className="h-4 w-12" />
                </th>
                <th className="border-b px-4 py-3">
                  <Skeleton className="h-4 w-12" />
                </th>
                <th className="border-b px-4 py-3">
                  <Skeleton className="h-4 w-12" />
                </th>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 5 }).map((_, index) => (
                <tr key={index}>
                  <td className="border-b px-4 py-4">
                    <Skeleton className="h-4 w-36" />
                  </td>
                  <td className="border-b px-4 py-4">
                    <Skeleton className="h-4 w-24" />
                  </td>
                  <td className="border-b px-4 py-4">
                    <Skeleton className="h-4 w-12" />
                  </td>
                  <td className="border-b px-4 py-4">
                    <Skeleton className="h-4 w-20" />
                  </td>
                  <td className="border-b px-4 py-4">
                    <Skeleton className="h-6 w-14 rounded-full" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex items-center justify-around space-x-2 py-4">
          <Skeleton className="h-8 w-24" />

          <Skeleton className="h-8 w-24" />
        </div>
      </div>
    </div>
  )
}
