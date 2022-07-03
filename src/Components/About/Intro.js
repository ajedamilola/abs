import React from 'react'
import "./intro.scss"
import { FaBookOpen } from "react-icons/fa"
import { FadeRight, SlideRight } from '../Utilities/Animations'
export default function Intro() {
    return (
        <div className='about-intro'>
            <div className='container'>
                <SlideRight>
                    <span>
                        About us
                    </span>
                </SlideRight>

                <FadeRight>
                    <h1>
                        Reason And Motive Behind the company
                    </h1>
                    <a href='#story'>
                        <button className='btn btn-primary px-5 text-light'>
                            Read <FaBookOpen />
                        </button>
                    </a>

                </FadeRight>

            </div>
        </div>
    )
}
