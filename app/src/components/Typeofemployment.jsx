/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import Inputfield from './Inputfield'
const Typeofemployment = ({handlechange}) => {
  return (
    <div>
         <>
        <div>
        <h4 className='mb-3 text-lg font-semibold'>Type of Employment</h4>
        </div>
      <div>
        <label className='sidebar-label-container'>
          <input type="radio" name='test' id='test' value='' onChange={handlechange} />
          <span className='checkmark'></span> Any experience
        </label>

        <Inputfield handlechange={handlechange} value='Part-time' title='Part-time' name='test2' classname='text-lg' />
        
        <Inputfield handlechange={handlechange} value='Full-time' title='Full-time' name='test2' classname='text-lg' />
        
        <Inputfield handlechange={handlechange} value='Temporary' title='Temporary' name='test2' classname='text-lg' />
        
        </div>
        </>
    </div>
  )
}

export default Typeofemployment