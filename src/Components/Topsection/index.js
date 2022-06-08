import React from 'react'
import "./top.scss"
export default function TopSection({children}) {
  return (
    <div id="topSection">
        <img className='overlay-image' src={require("../../Images/bg.jpg")} />
        <div className='overlay-mask'></div>
        {children}
    </div>
  )
}
