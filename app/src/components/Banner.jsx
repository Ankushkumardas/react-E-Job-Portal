/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// import React, { useState } from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { FaMapMarkerAlt } from "react-icons/fa";

function Banner({ query, handleinputchange }) {

  return (
    <div className='container px-4 mx-auto max-w-screen-2xl xl:px-24 md:py-20 py-14'>
      <h1 className='mb-3 text-5xl font-bold'>Find Your <span className='text-blue'>New Job</span>  Today</h1>
      <p className='mb-8 text-lg'>Thousands of jobs in the computer, enginnering andtecjnology sectoesa are waiting for you</p>

      {/* input form for the job and filters */}

      <form>
        <div className='flex flex-col justify-start gap-4 md:flex-row md:gap-0'>
          <div className='flex w-full rounded shadow-sm md:rounded-s-md ring-1 ring-inset ring-grey-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 md:w-1/2'>
            <input type="text" placeholder='Location' id='title' className='flex-1 block py-1.5 bg-transparent border-0 pl-8 text-grey-600 focus:right-0 sm:text-sm sm:leading-6' name='title' value={query} onChange={handleinputchange}/>
            <IoSearchOutline className='absolute mt-1 ml-1 text-2xl' />
           
          </div>
          <div className='flex w-full rounded shadow-sm md:rounded-s-md ring-1 ring-inset ring-grey-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 md:w-1/3'>
            <input type="text" placeholder='What job you are looking for' id='title' className='flex-1 block py-1.5 bg-transparent border-0 pl-8 text-grey-600 focus:right-0 sm:text-sm sm:leading-6'  name='title' />
            <FaMapMarkerAlt className='absolute mt-1 ml-1 text-2xl text-blue' />
           
          </div>
        <button type='submit' className="w-40 gap-1 px-2 text-white rounded-lg bg-blue">Search</button>
        </div>
      
      </form>
      
    </div>
  )
}

export default Banner
