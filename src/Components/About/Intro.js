import React from 'react'
import "./intro.scss"
import {FaBookOpen} from "react-icons/fa"
export default function Intro() {
    return (
        <div className='about-intro'>
            <div className='container'>
                <span>
                    About us
                </span>
                <h1>
                    Reason And Motive Behind the company
                </h1>
                <button className='btn btn-primary px-5 text-light'>
                    Read <FaBookOpen />
                </button>
            </div>
        </div>
    )
}
