import React from 'react'
import Crew from '../../Components/About/Crew'
import Intro from '../../Components/About/Intro'
import Overlay from '../../Components/About/Overlay'
import Story from '../../Components/About/Story'
import Navbar from '../../Components/Navbar'
import Footer from "../../Components/Footer"

export default function About() {
  return (
    <div>
        <Overlay />
        <Navbar page={1} filled fixed/>
        <Intro />
        <Story />
        <Crew />
        <Footer />
    </div>
  )
}
