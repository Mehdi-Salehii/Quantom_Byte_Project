// app/test/page.tsx
"use client"

import axios from "axios"
import React, { useEffect, useState } from "react"

export default function TestPage() {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/tickets")
        setData(response.data)
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    }

    fetchData()
  }, [])

  return (
    <div>
      {data.length > 0 ? (
        data.map((d) => <p key={d.id}>{JSON.stringify(d)}</p>)
      ) : (
        <p>No data available</p>
      )}
    </div>
  )
}
