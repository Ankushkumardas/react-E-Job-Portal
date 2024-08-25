/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import Salary from './Salary'
import Location from './Location'
import Jobpostingdata from './Jobpostingdata'
import Workexperience from './Workexperience'
import Typeofemployment from './Typeofemployment'
const Sidebar = ({ handlechange, handleclick }) => {
  return (
    <div className='space-y-5'>
      <h3 className='mb-2 text-lg font-bold'>Filters</h3>
      <Location handlechange={handlechange} />
      <Salary handleclick={handleclick} />
      <Jobpostingdata handlechange={handlechange}/>
      <Workexperience handlechange={handlechange}/>
      <Typeofemployment handlechange={handlechange}/>
    </div>
  )
}

export default Sidebar