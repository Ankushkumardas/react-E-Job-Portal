/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import Inputfield from './Inputfield'
const Location = ({ handlechange }) => {
    return (
        <div>
            <h4 className='mb-2 text-lg font-medium'>Location</h4>
            <div>
                <label className='sidebar-label-container'>
                    <input type="radio" name='test' id='test' value='' onChange={handlechange} />
                    <span className='checkmark'></span> All
                </label>

                <Inputfield handlechange={handlechange} value='london' title='london' name='test' />
                <Inputfield handlechange={handlechange} value='seattle' title='Seattle' name='test' />
                <Inputfield handlechange={handlechange} value='madrid' title='Madrid' name='test' />
                <Inputfield handlechange={handlechange} value='boston' title='Boston' name='test' />
            </div>
        </div>
    )
}

export default Location