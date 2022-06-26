import React from 'react'

export default function Line({width=100,className="",thickness=1}) {
  return (
    <div style={{padding:thickness/2,backgroundColor:"gray",width:width}} className={className}>

    </div>
  )
}
