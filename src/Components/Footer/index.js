import React from 'react'
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md"
import "./style.scss"
import logo from "../../logo.png";
import Line from "../Utilities/Line";

export default function Footer() {
    return (
        <section className='footer'>
            <PreFooter />
            <MainFooter />
        </section>
    )
}

function MainFooter() {
    return (
        <footer className='bg-dark py-4'>
            <div className='container'>
                <div className='row justify-content-between text-light'>
                    <div className='col-12 col-md-7 text-center text-md-start'>
                        <img className='logo' src={logo} />
                        <p>
                            Company tagline should be here
                        </p>
                    </div>
                    <div className='col-12 col-md-5'>
                        <span className='ms-auto'>
                            <MdLocationOn />124,baale street, Ajegunle, Ajeromi-Ifelodun Lagos
                            <br />
                            <MdEmail /> info@mail.google.com
                            <MdPhone className='ms-2' />08024234423, 07819243439
                        </span>
                    </div>
                    <div className='col-12 col-md-7 py-4'>
                        <h2 className='title'>
                            Company Objective
                        </h2>
                        <p className='text obj'>
                            Occaecat fugiat pariatur aliqua excepteur nostrud incididunt excepteur. Commodo voluptate dolore nulla exercitation voluptate id elit sit incididunt ad officia do mollit. Proident cillum amet duis sit id officia eu. Ad do tempor eu ut duis ea ex nulla veniam occaecat nostrud cupidatat eu ex. Laboris culpa ut mollit aliqua consequat fugiat. Eiusmod nulla anim id est Lorem Lorem ea consectetur. Nostrud nisi aliquip magna adipisicing amet.
                        </p>
                    </div>
                    <div className='col-12 col-md-5 py-4'>
                        <h2 className='title'>
                            Company Goals
                        </h2>
                        <ol className='list-group'>
                            <li className='list-group-item text-light bg-dark border'>
                                Goal one 1
                            </li>
                            <li className='list-group-item text-light bg-dark border'>
                                Goal one 1
                            </li>
                            <li className='list-group-item text-light bg-dark border'>
                                Goal one 1
                            </li>
                        </ol>
                    </div>
                </div>
                <Line className='m-auto w-100' />
                {/* Quick Links */}
                <div className='py-5'>
                    <h1 className='title text-light'>
                        <b>Navigation</b>
                    </h1>
                    <div className='row pt-3'>
                        <FooterLink subheading="Subheading" links={["Home", "About", "Services"]} />
                        <FooterLink subheading="Services" links={["Service 1", "Service 2", "Service 3"]} />
                    </div>
                </div>
            </div>
            <div className='bg-black text-light text-center last'>
                &copy; {new Date().getFullYear()} by &nbsp;
                <a href='mailto:ajedamilola2005@gmail.com'>
                    <button className='btn btn-sm btn-outline-info' >Aje Damilola</button>
                </a>
            </div>
        </footer>
    )
}
function PreFooter() {
    return (
        <div className='bg-primary text-light py-1'>
            <div className='container'>
                <div className='row align-items-center'>
                    <div className='col-12 col-md-3 col-lg-2'>
                        <span style={{ fontFamily: "poppins" }}>Contact us Today:</span>
                    </div>
                    <div className='col'>
                        <span><MdPhone /> 09134345434432</span>
                        <span className='ms-3'><MdEmail /> info@abs.com</span>
                    </div>
                </div>

            </div>


        </div>
    )
}

function FooterLink({ subheading, links }) {
    var listkey = 0;
    return (
        <div className='col'>
            <div className='text-light'>
                <h2 className='title-sm'>
                    {subheading}
                </h2>
                <ul>
                    {links.map(item => {
                        return <li key={++listkey} className="text">{item}</li>
                    })}
                </ul>
            </div>
        </div>

    )
}