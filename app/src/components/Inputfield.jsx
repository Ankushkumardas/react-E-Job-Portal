/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

const Inputfield = ({ handlechange, value, title, name }) => {
    return (

        <label className='sidebar-label-container'>
            <input type="radio" name={name}  value={value} onChange={handlechange} />
            <span className='checkmark'></span>{title}
        </label>

    )
}

export default Inputfield