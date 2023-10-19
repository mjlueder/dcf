"use client"
import { useEffect, useState } from "react";
import MapChart from "./MapChart";

export default function Home() {

  const [projectInfo, setProjectInfo] = useState([])

  useEffect(() => {
    const getData = async() => {
      const query = await fetch
    }
  }, [])

  return (
    <main>
      <div> 
        <p>DCFFFFF</p>
        <MapChart />
      </div>
    </main>
  )
}
