import React from 'react'
import Category1 from '../../Components/Events/Category1'
import Intro from '../../Components/Events/Intro'
import Navbar from "../../Components/Navbar"
import Line from "../../Components/Utilities/Line"

export default function Events() {
  return (
    <div>
      <Navbar fixed page={3} filled/>
      <Intro />
      <Line className="w-75 mx-auto my-7" />
      <Category1 />
      
    </div>
  )
}
