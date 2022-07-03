import React from 'react'
import "./style.scss"
import { BsAward, BsDiamond, BsScissors } from "react-icons/bs"
import { FadeLeft, FadeRight, FadeUp } from '../../Utilities/Animations'

export default function Section5() {
    return (
        <section className='section5 bg-light'>
            <div className='container'>
                <div className='text-center'>
                    <h1 className='text-primary'>Heading Of Section</h1>
                    <p className='intro'>
                        Minim enim aliqua ut id excepteur. Ipsum cupidatat qui officia consequat eiusmod amet
                    </p>
                    <div className='row justify-content-center py-6 gx-0 gx-md-6'>
                        <div className='col-12 col-md-6 col-lg-4 text-center'>
                            <FadeRight  delay={"100"}>

                                <Item icon={<BsAward className='icon' />} title="Aute pariatur occa" text="Deserunt consectetur velit ad adipisicing velit non." />
                            </FadeRight>
                        </div>
                        <div className='col-12 col-md-6 col-lg-4 text-center'>
                            <FadeUp>

                                <Item icon={<BsScissors className='icon' />} title="Ea nulla reprehenderit" text="Adipisicing ullamco aliqua sunt id aute cillum sunt reprehenderit consequat adipisicing duis Lorem." />
                            </FadeUp>
                        </div>
                        <div className='col-12 col-md-6 col-lg-4 text-center'>
                            <FadeLeft delay={"100"}>

                                <Item icon={<BsDiamond className='icon' />} title="Ipsum quis consequat" text="Et id sit Lorem enim excepteur in veniam eiusmod sit labore proident consectetur exercitation ea." />
                            </FadeLeft>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

const Item = ({ icon, title, text }) => {
    return <div >
        {icon}
        <h2 className='text-primary'>
            {title}
        </h2>
        <p className='item-text'>
            {text}
        </p>
    </div>
}
