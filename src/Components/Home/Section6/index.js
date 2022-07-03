import React from 'react'
import "./style.scss"
import Line from "../../Utilities/Line";
import { FadeLeft, SlideRight } from '../../Utilities/Animations';

export default function index() {
  return (
    <section className="section6 py-7 container">
      <FadeLeft>
        <Line className='bg-primary' thickness={3} />
      </FadeLeft>
      <h1 className='text-primary'>What We Are Up to</h1>
      <SlideRight>
        <Line className='bg-primary ms-5' thickness={3} width={200} />
      </SlideRight>

      <div className="row g-5 py-5">
        <Event image={require("../../../Images/bg.jpg")} />
        <Event image={require("../../../Images/bg.jpg")} />
        <Event image={require("../../../Images/bg.jpg")} />
      </div>
    </section>
  )
}

const cardbg = (image) => {
  return {
    backgroundImage: `url(${image})`,
    backgroundSize: "cover", backgroundRepeat: "no-repeat",
    backgroundPosition: "center",

  }
}

const Event = ({ title, desription, image }) => <div className='col-12 col-md-6 col-lg-4'>
  <div className='card event' style={cardbg(image)}>
    <div className='overlay'></div>
    <div className='card-body'>
      <div className='title-container'>
        <h2 className='title'>Event Title</h2>
        <p>
          Dolore amet exercitation occaecat quis cillum eiusmod nostrud ad.
        </p>
        <button className='btn btn-outline-primary'>
          More Info
        </button>
      </div>
    </div>
  </div>
</div>
