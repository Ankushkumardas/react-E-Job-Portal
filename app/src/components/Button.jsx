/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

function Button({onclickhandler,value,title}) {
  return (
    <div >
      <button onClick={onclickhandler} value={value} className='px-4 py-1 text-base border rounded hover:text-white hover:bg-blue'>{title}</button>
    </div>
  )
}

export default Button
