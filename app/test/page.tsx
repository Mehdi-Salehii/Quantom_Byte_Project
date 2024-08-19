import axios from "axios"
import React from "react"

export default async function test() {
  const { data } = await axios.get("http://localhost:3000/api/tickets")

  console.log(data, "***** api call from test")
  if (!Array.isArray(data)) {
    return <div>data is not array</div>
  }
  return (
    <div>
      {data.map((d) => (
        <p>{JSON.stringify(d)}</p>
      ))}
    </div>
  )
}
