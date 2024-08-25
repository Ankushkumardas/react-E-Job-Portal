/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import Inputfield from './Inputfield'
const Workexperience = ({ handlechange }) => {
    return (
        <>
        <div>
        <h4 className='text-lg font-medium'>Work Experince</h4>
        </div>
      <div>
        <label className='sidebar-label-container'>
          <input type="radio" name='test' id='test' value='' onChange={handlechange} />
          <span className='checkmark'></span> Any experience
        </label>

        <Inputfield handlechange={handlechange} value='Internship' title='Internship' name='test2' classname='text-lg' />
        
        <Inputfield handlechange={handlechange} value='Work remotely' title='Work remotely' name='test2' classname='text-lg' />
        
        
        </div>
        </>
    )
}

export default Workexperience