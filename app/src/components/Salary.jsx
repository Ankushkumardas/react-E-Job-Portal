/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import Button from './Button'
import Inputfield from './Inputfield'
const Salary = ({ handlechange, handleclick }) => {
  return (
    <div>
      <h4 className='text-lg font-medium'>Salary</h4>
      <div className='flex gap-1 mb-4'>
        <Button onclickhandler={handleclick} value='' title='Hourly' />
        <Button onclickhandler={handleclick} value='Monthly' title='Monthly' />
        <Button onclickhandler={handleclick} value='Yearly' title='yearly' />
      </div>
      <div>
        <label className='sidebar-label-container'>
          <input type="radio" name='test' id='test' value='' onChange={handlechange} />
          <span className='checkmark'></span> All
        </label>

        <Inputfield handlechange={handlechange} value={30} title='< 30000K' name='test2' classname='text-lg' />
        <Inputfield handlechange={handlechange} value={50} title='< 50000K' name='test2' classname='text-lg' />
        <Inputfield handlechange={handlechange} value={80} title='< 80000K' name='test2' classname='text-lg' />
        <Inputfield handlechange={handlechange} value={100} title='< 100000K' name='test2'  classname='text-lg'/>
      </div>
    </div>
  )
}

export default Salary