import React from 'react'
import "./story.scss"
import { BsBookHalf } from "react-icons/bs"
import Line from "../Utilities/Line"
import { Fade, FadeLeft, FadeRight } from '../Utilities/Animations'

export default function Story() {
    return (
        <a name='story'>
            <div className='story'>
                <div className='container'>
                    <BsBookHalf size={55} />
                    <FadeRight>
                        <Line className='bg-primary mt-3' thickness={3} />
                    </FadeRight>

                    <FadeLeft>
                        <h1>
                            Our Story
                        </h1>
                        <Line className='bg-primary ms-4 mb-3' thickness={3} />
                    </FadeLeft>
                    <Fade>
                        <p className='main-text'>
                            Laboris veniam reprehenderit id adipisicing sunt ipsum. Aute amet veniam magna ullamco mollit cupidatat nostrud elit incididunt aute. Ea pariatur mollit aute voluptate qui commodo. Non elit Lorem dolor aliqua sunt et laboris. Occaecat velit commodo ipsum veniam ullamco laborum quis consectetur aute aliqua officia. Pariatur elit et nisi non cillum proident amet mollit deserunt ex enim sint cillum cupidatat.
                        </p>
                        <p className='main-text'>
                            Lorem commodo quis pariatur amet in excepteur voluptate nulla dolore eiusmod id aliquip dolor nulla. In nulla cillum voluptate nulla non reprehenderit et aliquip. Sint ex ad nisi irure ea Lorem quis sint. Quis sunt nulla ex nisi mollit ipsum occaecat. Voluptate nisi aute dolor dolor velit cillum laboris do. Incididunt laboris deserunt ea qui proident. Labore quis amet fugiat deserunt culpa mollit esse.
                        </p>
                    </Fade>

                </div>
                <div className='bg-primary text-white main-objectives'>
                    <div className='container'>
                        <h1>
                            Our Main Objectives
                        </h1>
                        <span>
                            Nulla voluptate aute cillum ut tempor quis adipisicing Lorem
                        </span>
                        <div className='row py-6 justify-content-center'>
                            <Objective icon={<BsBookHalf className='obj-icon' />} title="Title" subtitle="Subtitle of objecrtive" />
                            <Objective icon={<BsBookHalf className='obj-icon' />} title="Title" subtitle="Subtitle of objecrtive" />
                            <Objective icon={<BsBookHalf className='obj-icon' />} title="Title" subtitle="Subtitle of objecrtive" />
                        </div>
                    </div>

                </div>
            </div>
        </a>

    )
}

const Objective = ({ icon, title, subtitle }) => (
    <div className='text-center col-6 col-md-4'>
        {icon}
        <h2 className='obj-title'>{title}</h2>
        <span>{subtitle}</span>
    </div>
)
