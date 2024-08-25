/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

const Jobs = ({results}) => {
  return (
    <>
    <div>
      <h3 className='mb-2 text-lg font-semibold'>{results.lenght} Jobs</h3>
    </div>
      {results}
    </>
    
  )
}

export default Jobs