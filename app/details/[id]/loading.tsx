import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export default function loading() {
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
              <h3 className="text-xl font-semibold">
                <Skeleton className="h-5 w-32" />
              </h3>
              <p className="mt-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="mt-2 h-4 w-3/4" />
              </p>
            </div>
          </div>
          <div className="mt-6">
            <h3 className="text-xl font-semibold">
              <Skeleton className="h-5 w-36" />
            </h3>
            <p className="mt-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="mt-2 h-4 w-3/4" />
            </p>
          </div>
          <div className="mt-6">
            <h3 className="text-xl font-semibold">
              <Skeleton className="h-5 w-40" />
            </h3>
            <p className="mt-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="mt-2 h-4 w-3/4" />
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
