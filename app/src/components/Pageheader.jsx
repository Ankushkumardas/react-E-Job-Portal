/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

function Pageheader({title,path}) {
  return (
    <div className='py-24 mt-3 bg-[#FAFAFA] items-center flex rounded justify-center'>
      <div>
        <h2 className='text-3xl font-semibold center text-blue'>{title}</h2>
        <p className='text-center text0sm'><a href="/">Home</a>/{path}</p>
      </div>
    </div>
  )
}

export default Pageheader
