import React from 'react'
import "./style.scss"

export default function NewsLetter() {
    return (
        <section className='py-6 newsletter'>
            <div className='container text-light'>
                <h1>
                    Recieve Updates
                </h1>
                <p>
                    Sign for our NewsLetter to stay updates and Informed on our latest Updates
                </p>
                <div className='row align-items-center'>
                    <div className='col'>
                        <div className='w-75'>
                            <input type="email" className='form-control mb-2 text-primary' placeholder='Enter Email Adress Here' />
                            <button className='btn btn-primary text-white'>Continue</button>
                        </div>

                    </div>
                    <div className='d-none d-md-block col-3'>
                        <img className='img-fluid' src={require("../../../Images/bg.jpg")} />
                    </div>
                </div>

            </div>
        </section>
    )
}
