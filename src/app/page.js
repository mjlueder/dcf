"use client"
import { useEffect, useState } from "react";
import MapChart from "./MapChart";
import Table from "./components/table";
import Link from "next/link";

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
        <p className="text-center p-8">Disney Conservation Fund</p>
        <Link href='https://impact.disney.com/environment/conservation/' target='_blank'>About DCF</Link>
        <MapChart />
        <Table></Table>
      </div>
    </main>
  )
}
