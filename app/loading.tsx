import { Skeleton } from "@/components/ui/skeleton"

export default function loading() {
  return (
    <div className="h-screen overflow-hidden">
      <div className="mt-10 grid px-1 sm:grid-cols-[15fr_1fr_4fr] sm:px-3 lg:px-6 xl:grid-cols-[15fr_2fr_3fr]">
        <div className="col-span-full col-start-1 col-end-[2]">
          <div className="mb-2 text-center">
            <Skeleton className="mx-auto h-6 w-64" />{" "}
          </div>
          <div className="overflow-x-auto rounded-lg border border-gray-200 bg-white">
            <table className="min-w-full bg-white">
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

          <div className="flex items-center justify-end space-x-2 py-4">
            <Skeleton className="h-8 w-24" />

            <Skeleton className="h-8 w-24" />
          </div>
        </div>

        <div className="col-start-3 col-end-[-1] hidden sm:mt-0 sm:block">
          <div className="flex flex-col items-center">
            <Skeleton className="mb-4 h-10 w-full" />
            <Skeleton className="mb-4 h-10 w-full" />
            <Skeleton className="mb-4 h-32 w-full" />
            <Skeleton className="h-10 w-32" />
          </div>
        </div>
      </div>
    </div>
  )
}
