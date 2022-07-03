import React from 'react'
import "./intro.scss"
import { MdEvent, MdArrowDownward } from "react-icons/md"

export default function Intro() {
    return (
        <div className='ev-intro'>
            <div className='overlay'>
                <img src={require("../../Images/Blog/1.jpg")} />
            </div>
            <div className='container'>
                <h1>
                    <MdEvent color='white' size={100} style={{ marginBottom: -15 }} />
                    <br />
                    Events
                </h1>
                <p>
                    Where you can see all our events (put a grid of events as bg here)
                </p>
                <a href='#init'>
                    <button className='btn btn-outline-primary'>
                        <MdArrowDownward /> See All
                    </button>
                </a>

            </div>
        </div>
    )
}
