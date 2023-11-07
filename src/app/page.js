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

  const handleSubmit = async(e) => {
    e.preventDefault()
    const form = {
      name,
      email,
      phone, 
      message
    }
    console.log(form);
  }

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
          <from onSubmit={handleSubmit}>
            <div className="flex items-center justify-center">
              <label htmlFor="name">Name</label>
              <input value={name} onChange={e => setName(e.target.value)} type="text" name="name" id="name" placeholder="Your Name" className="text-black"></input>
            </div>
            <div className="flex items-center justify-center">
              <label htmlFor="email">email</label>
              <input value={email} onChange={e => setEmail(e.target.value)} type="text" name="email" id="email" placeholder="Your Email" className="text-black"></input>
            </div>
            <div className="flex items-center justify-center">
              <label htmlFor="phone">phone</label>
              <input value={phone} onChange={e => setPhone(e.target.value)} type="text" name="phone" id="phone" placeholder="Your Phone" className="text-black"></input>
            </div>
            <div className="flex items-center justify-center">
              <label htmlFor="message">Message</label>
              <textarea value={message} onChange={e => setMessage(e.target.value)} type="text" name="message" id="message" placeholder="Your Message" className="text-black"></textarea>
            </div>
            <div>
              <button type="submit">Submit</button>
            </div>
          </from>
        </div>
      </div>
    </main>
  )
}
