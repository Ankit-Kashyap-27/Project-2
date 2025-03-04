import React, { Component } from 'react'
import react from '../assets/react.svg'

export default class Navbar extends Component {
    render() {
        return (

            <nav>
                <div className="bg-green-100 h-[10vh] flex justify-between items-center ">
                    <div className='flex gap-[2vw]  '>
                        <div className='text-xl font-semibold mx-5'>
                            <a href='/'>NEWS!HUB</a>
                        </div>

                        <div className='flex gap-4'>
                            <a href="#">HOME</a>
                            <a href="#">ABOUT</a>
                        </div>
                    </div>
                    <div className='mx-5'>
                        <img src={react} alt="react" />
                    </div>
                </div>
            </nav>
        )
    }
}
