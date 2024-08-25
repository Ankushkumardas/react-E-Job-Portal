/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

function Navbar() {
    const [ismenuopen, setismenuopen] = useState(false)
    const handlemenutoggler = () => {
        setismenuopen(!ismenuopen)
    }
    const navitems = [
        { path: '/', title: "Start a search" },
        { path: '/my-job', title: "My Job" },
        { path: '/salary', title: "Salary Est" },
        { path: '/post-job', title: "Post a Job" }
    ]
    return (
        <header className='container px-4 mx-auto max-w-screen-2xl xl:px-24'>
            <nav className='flex items-center justify-between py-6'>
                <a href="/" className='text-2xl font-bold'>Job <span className='text-blue'>Portel</span></a>
                {/* nav items  */}
                <ul className='hidden gap-12 md:flex'>
                    {
                        navitems.map(({ path, title }) => (
                            <li key={path} className='font-medium text-md text-primary'>
                                <NavLink to={path} className={({ isActive, isPending }) => isActive ? 'active' : ''}>
                                    {title}
                                </NavLink>
                            </li>
                        ))
                    }
                </ul>
                {/* signup nad login  */}
                <div className='hidden space-x-5 text-base font-medium text-primary lg:block'>
                    <Link to='/login' className='px-5 py-2 border rounded-xl'>Log In</Link>
                    <Link to='/SignUp' className='px-5 py-2 text-white border rounded-xl bg-blue'>SignUp</Link>
                </div>

                {/* for small md screen for mobile menu */}
                <div className='block md:hidden'>
                    <button onClick={handlemenutoggler}>
                        {
                            ismenuopen ? <FaXmark className='w-5 h-5 text-primary' /> : <FaBars className='w-5 h-5 text-primary' />
                        }
                    </button>
                </div>
            </nav>

            {/* nav items for mobile */}
            
            <div className={`px-4 bg-black py-5 rounded-md text-white ${ismenuopen ? "":"hidden"}`}>
                <ul >
                    {
                        navitems.map(({ path, title }) => (
                            <li key={path} className='font-medium text-white text-md'>
                                <NavLink to={path} className={({ isActive, isPending }) => isActive ? 'active' : ''}>
                                    {title}
                                </NavLink>
                            </li>
                        ))
                    }
                    <li className='py-3'>
                    <Link to='/login' className='px-3 py-2 text-white bg-blue rounded-xl'>Log In</Link>
                    
                    </li>
                </ul>
                
            </div>
        </header>
    )
}

export default Navbar
