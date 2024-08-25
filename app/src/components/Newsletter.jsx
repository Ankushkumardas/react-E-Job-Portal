/* eslint-disable no-unused-vars */
import React from 'react'
import { HiOutlineMailOpen } from "react-icons/hi";
import { FaRocketchat } from "react-icons/fa";

const Newsletter = () => {
    return (
        <div>
            <div className='p-3 border rounded'>
                <h3 className='flex items-center gap-2 mb-3 font-bold etxt-lg'><HiOutlineMailOpen className='text-2xl font-thin' />Email me for Jobs</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora laborum repellat id laboriosam expedita illo earum reiciendis, iste nihil, </p>
                <div className='w-full '>
                    <input className='w-full p-1 mt-2 border rounded outline-none' type="email" name='email' id='email' placeholder='name@gmail.com' />
                    <input type="submit" value={'Subscribe'} className='w-full p-1 mt-3 font-semibold text-white border cursor-pointer text-md rounded-xl bg-blue' />
                </div>
            </div>
            
            <div className='p-3 mt-3 border rounded'>
                <h3 className='flex items-center gap-2 mb-3 font-bold etxt-lg'><FaRocketchat  className='text-2xl font-thin' />Get Noticed Faster</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora laborum repellat id laboriosam expedita illo earum reiciendis, iste nihil, </p>
                <div className='w-full '>
                    <input className='w-full p-1 mt-2 border rounded outline-none' type="email" name='email' id='email' placeholder='name@gmail.com' />
                    <input type="submit" value={'Upload your Resume'} className='w-full p-1 mt-3 font-semibold text-white border cursor-pointer text-md rounded-xl bg-blue' />
                </div>
            </div>
        </div>

    )
}

export default Newsletter