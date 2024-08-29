import React from "react"
import { Skeleton } from "./ui/skeleton"

export default function OutgoingTicketsLoader() {
  return (
    <div className="lg:8/12 mx-auto mt-10 grid px-1 xsm:w-11/12 sm:w-10/12 sm:px-3 md:w-9/12 lg:px-6 xl:w-8/12 2xl:w-7/12">
      <div className="col-span-full col-start-1 col-end-[2]">
        <div className="mb-2 text-center">
          <Skeleton className="mx-auto h-6 w-64" />
        </div>
        <div className="overflow-x-auto rounded-lg border">
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="border-b px-4 py-3">
                  <Skeleton className="mx-auto h-4 w-8" />
                </th>
                <th className="border-b px-4 py-3">
                  <Skeleton className="mx-auto h-4 w-24" />
                </th>
                <th className="border-b px-4 py-3">
                  <Skeleton className="mx-auto h-4 w-36" />
                </th>
                <th className="border-b px-4 py-3">
                  <Skeleton className="mx-auto h-4 w-20" />
                </th>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 5 }).map((_, index) => (
                <tr key={index}>
                  <td className="border-b px-4 py-4">
                    <Skeleton className="mx-auto h-4 w-8" />
                  </td>
                  <td className="border-b px-4 py-4">
                    <Skeleton className="mx-auto h-4 w-24" />
                  </td>
                  <td className="border-b px-4 py-4">
                    <Skeleton className="mx-auto h-4 w-36" />
                  </td>
                  <td className="border-b px-4 py-4">
                    <Skeleton className="mx-auto h-4 w-20" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
