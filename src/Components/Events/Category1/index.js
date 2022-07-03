import React from 'react'
import "./style.scss"
import { MdLocationPin } from "react-icons/md"
import EventCard from '../EventCard'

export default function Category1() {
    return (
        <div className='category1'>
            
            <div className='container'>
                <a name="init"></a>
                <h2>
                    <MdLocationPin />Baale Street
                </h2>
                <div className='row gy-3 py-4'>
                    <div className='col-12 col-md-4'>
                        <EventCard  title="Title One" body="Officia ea veniam officia quis labore culpa dolor. Cillum exercitation nulla amet et eu incididunt est deserunt. Eiusmod tempor exercitation et occaecat ullamco laboris. Velit esse aute nostrud nostrud nostrud ea consectetur. Pariatur magna ad incididunt laboris reprehenderit veniam nisi enim. Magna pariatur anim elit irure nulla ipsum. Nisi sunt id Lorem culpa minim."/>
                    </div>
                    <div className='col-12 col-md-4'>
                        <EventCard imgIndex={2} title="Title Two" body="Minim sint laborum aliquip ex deserunt ullamco est officia cupidatat adipisicing esse id pariatur. Proident voluptate voluptate culpa aute ad ex. Est pariatur ea adipisicing incididunt sit amet amet aute deserunt non commodo qui."/>
                    </div>
                    <div className='col-12 col-md-4'>
                        <EventCard imgIndex={3} title="Third One" body="Id commodo aute id sint et do aute amet dolore id laborum eu deserunt ea. Culpa excepteur cillum consectetur non nulla esse culpa nulla velit ut in laboris cillum. Aliquip dolor eu aliqua consequat commodo. Ea tempor ullamco magna ex labore quis nostrud mollit."/>
                    </div>
                    <div className='col-12 col-md-4'>
                        <EventCard imgIndex={4} title="Fourth Title" body="Exercitation tempor laborum irure anim anim ullamco irure ad eu nostrud. Adipisicing ut dolore qui fugiat ut. Cillum elit aliqua ut duis."/>
                    </div>
                    <div className='col-12 col-md-4'>
                        <EventCard imgIndex={5} title="Title 5" body="Ipsum nostrud incididunt cupidatat consectetur adipisicing. Sit nisi nisi minim aute anim sit. Do esse aute amet occaecat dolore do duis velit culpa minim eiusmod ipsum commodo excepteur. Cillum laboris commodo ut dolor."/>
                    </div>
                </div>
            </div>

            {/**Another Place */}
            <div className='container py-6'>
                <h2>
                    <MdLocationPin />Another Street
                </h2>
                <div className='row gy-3 py-4'>
                    <div className='col-12 col-md-4'>
                        <EventCard  title="Title One" body="Officia ea veniam officia quis labore culpa dolor. Cillum exercitation nulla amet et eu incididunt est deserunt. Eiusmod tempor exercitation et occaecat ullamco laboris. Velit esse aute nostrud nostrud nostrud ea consectetur. Pariatur magna ad incididunt laboris reprehenderit veniam nisi enim. Magna pariatur anim elit irure nulla ipsum. Nisi sunt id Lorem culpa minim."/>
                    </div>
                    <div className='col-12 col-md-4'>
                        <EventCard imgIndex={2} title="Title Two" body="Minim sint laborum aliquip ex deserunt ullamco est officia cupidatat adipisicing esse id pariatur. Proident voluptate voluptate culpa aute ad ex. Est pariatur ea adipisicing incididunt sit amet amet aute deserunt non commodo qui."/>
                    </div>
                    <div className='col-12 col-md-4'>
                        <EventCard imgIndex={3} title="Third One" body="Id commodo aute id sint et do aute amet dolore id laborum eu deserunt ea. Culpa excepteur cillum consectetur non nulla esse culpa nulla velit ut in laboris cillum. Aliquip dolor eu aliqua consequat commodo. Ea tempor ullamco magna ex labore quis nostrud mollit."/>
                    </div>
                    <div className='col-12 col-md-4'>
                        <EventCard imgIndex={4} title="Fourth Title" body="Exercitation tempor laborum irure anim anim ullamco irure ad eu nostrud. Adipisicing ut dolore qui fugiat ut. Cillum elit aliqua ut duis."/>
                    </div>
                    <div className='col-12 col-md-4'>
                        <EventCard imgIndex={5} title="Title 5" body="Ipsum nostrud incididunt cupidatat consectetur adipisicing. Sit nisi nisi minim aute anim sit. Do esse aute amet occaecat dolore do duis velit culpa minim eiusmod ipsum commodo excepteur. Cillum laboris commodo ut dolor."/>
                    </div>
                </div>
            </div>
        </div>
    )
}
