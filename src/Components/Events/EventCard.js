import React from 'react'
import "./card.scss"
import { MdSchedule } from "react-icons/md"
export default function EventCard({imgIndex = 1,title,body}) {
    return (
        <div className='event-card card'>
            <img className='card-img card-img-top' src={require(`../../Images/Portfolio/0${imgIndex}.jpg`)} />
            <div className='card-body'>
                <h2 className='card-title'>
                   {title}
                </h2>
                <p className='card-text'>
                   {body}
                </p>
                <span className='text-muted'>
                    <MdSchedule /> 19 June - 30 June 2022
                </span>
            </div>
        </div>
    )
}
