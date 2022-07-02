import React from 'react'
import "./crew.scss"
import Line from "../Utilities/Line";

export default function Crew() {
    return (
        <div className='crew'>
            <div className='container'>
                <div className='row align-items-center justify-content-center' >
                    <div className='col-3'>
                    <Line thickness={2} className='bg-primary w-100'/>
                    </div>
                    <div className='col bg-light'>
                        <h1 className='text-center text-primary'>
                            Word From The Crew
                        </h1>
                    </div>

                    <div className='col-3'><Line thickness={2} className='bg-primary w-100'/></div>

                </div>

                <div className='row py-7 gy-3 align-items-center'>
                    <div className='col-12 col-md-5'>
                        <Profile
                            image={<img src={require("../../Images/office1.jpg")} />}
                            name="Aje Damilola"
                            position="Web Developer"
                        />
                    </div>
                    <div className='col'>
                        <p className='text'>
                            Minim exercitation officia reprehenderit ad amet sunt incididunt incididunt aliquip nisi consectetur. Enim ea proident dolore incididunt fugiat pariatur labore adipisicing consectetur veniam elit minim sunt est. Ea ex et in enim aute minim elit officia enim proident fugiat elit do exercitation.
                        </p>
                    </div>

                </div>
                <div className='row pb-7 gy-3 align-items-center'>
                    <div className='col-12 col-md-5 order-0 order-md-1'>
                        <Profile
                            image={<img src={require("../../Images/office1.jpg")} />}
                            name="Aje Joshua"
                            position="Web Developer"
                        />
                    </div>
                    <div className='col order-1 order-md-0'>
                        <p className='text'>
                            Minim exercitation officia reprehenderit ad amet sunt incididunt incididunt aliquip nisi consectetur. Enim ea proident dolore incididunt fugiat pariatur labore adipisicing consectetur veniam elit minim sunt est. Ea ex et in enim aute minim elit officia enim proident fugiat elit do exercitation.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
}

const Profile = ({ image, name, position }) => (
    <div className='profile text-center'>
        <div className='profile-container'>
            {image}

        </div>
        <h2>
            {name}
        </h2>
        <span>
            {position}
        </span>

    </div>
)
