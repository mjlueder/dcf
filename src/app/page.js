"use client"
import { useEffect, useState } from "react";
import MapChart from "./MapChart";
import Table from "./components/table";

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
        <Table></Table>
      </div>
    </main>
  )
}
