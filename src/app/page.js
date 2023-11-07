"use client"
import { useEffect, useState } from "react";
import MapChart from "./MapChart";
import Table from "./components/table";
import Link from "next/link";

export default function Home() {

  const [projectInfo, setProjectInfo] = useState([])
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')

  useEffect(() => {
    const getData = async() => {
      const query = await fetch
    }
  }, [])

  return (
    <main>
      <div> 
        <p className="text-center p-8">Disney Conservation Fund</p>
        <Link href='https://impact.disney.com/environment/conservation/' target='_blank' className="text-center p-8">About DCF</Link>
        <MapChart />
        <Table></Table>
        <div>
          <from>
            <div className="flex items-center justify-center">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name"></input>
            </div>
            <div className="flex items-center justify-center">
              <label htmlFor="email">email</label>
              <input type="text" name="email" id="email"></input>
            </div>
            <div className="flex items-center justify-center">
              <label htmlFor="phone">phone</label>
              <input type="text" name="phone" id="phone"></input>
            </div>
            <div className="flex items-center justify-center">
              <label htmlFor="message">Message</label>
              <textarea type="text" name="message" id="message"></textarea>
            </div>
          </from>
        </div>
      </div>
    </main>
  )
}
