import React from "react"
import { Skeleton } from "./ui/skeleton"

export default function OutgoingTicketsLoader() {
  return (
    <div className="lg:8/12 mx-auto mt-10 grid px-1 xsm:w-11/12 sm:w-10/12 sm:px-3 md:w-9/12 lg:px-6 xl:w-8/12 2xl:w-7/12">
      <div className="col-span-full col-start-1 col-end-[2]">
        <div className="mb-8 text-center">
          <Skeleton className="mx-auto h-6 w-1/2 sm:w-40" />
        </div>
        <div className="mb-4 text-center">
          <Skeleton className="h-9 sm:w-96" />
        </div>
        <div className="overflow-x-auto rounded-lg border">
          <table className="min-w-full">
            <thead>
              <tr className="bg-foreground/10">
                {Array.from({ length: 5 }).map((_, thIndex) => (
                  <th key={thIndex} className="border-b px-4 py-3">
                    <Skeleton className="h-4 w-7 sm:w-8" />
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 5 }).map((_, index) => (
                <tr key={index}>
                  {Array.from({ length: 5 }).map((_, tdIndex) => (
                    <td key={tdIndex} className="border-b px-4 py-4">
                      <Skeleton className="h-4 w-7 sm:w-36" />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex items-center justify-around space-x-2 py-4">
          <Skeleton className="h-8 sm:w-24" />

          <Skeleton className="h-8 sm:w-24" />
        </div>
      </div>
    </div>
  )
}
