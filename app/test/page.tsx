import { getRecords } from "@/utils/actions"
import React from "react"

export default async function test() {
  const data = await getRecords()
  return (
    <div>
      {data.map((d) => (
        <p>{JSON.stringify(d)}</p>
      ))}
    </div>
  )
}
