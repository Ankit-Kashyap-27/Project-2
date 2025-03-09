import React, { Component } from 'react'
import react from '../assets/react.svg'
import moon from '../assets/moon.svg'
import sun from '../assets/sun.svg'
import { Link } from 'react-router-dom'
const Navbar =()=>{



 
        return (
            <nav>
                <div className="bg-green-100 fixed top-0 h-[10vh] flex justify-between items-center w-full">
                    <div className='flex gap-[2vw]  items-center'>
                        <div className='text-xl font-semibold mx-[3vw]'>
                            <a href='/'>NEWS!HUB</a>
                        </div>

                        <div className='flex gap-[1vw] list-none'>
                            <li><Link className='duration-300 hover:-translate-y-1 p-2' to="/">HOME</Link></li>
                            <li><Link className='duration-300 hover:-translate-y-1 p-2' to="/business">Business</Link></li>
                            <li><Link className='duration-300 hover:-translate-y-1 p-2' to="/entertainment">Entertainment</Link></li>
                            <li><Link className='duration-300 hover:-translate-y-1 p-2' to="/health">Health</Link></li>
                            <li><Link className='duration-300 hover:-translate-y-1 p-2' to="/science">Science</Link></li>
                            <li><Link className='duration-300 hover:-translate-y-1 p-2' to="/sports">Sports</Link></li>
                            <li><Link className='duration-300 hover:-translate-y-1 p-2' to="/technology">Technology</Link></li>


                        </div>
                    </div>

                    <div className='flex items-center mx-5 w-[5vw] h-[5vh] bg-white rounded-full'>
                        <img className='size-6' src={sun} alt="" />
                    </div>
                </div>
            </nav>
        )
    }
export default Navbar
