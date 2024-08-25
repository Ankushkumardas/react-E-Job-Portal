/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import Pageheader from '../components/Pageheader'

function Salarypage() {

  const [searchtext, setsearchtext] = useState('')
  // console.log(searchtext)
  const [salary, setsalary] = useState([])
  useEffect(() => {
    fetch(`salary.json`).then(res => res.json()).then(data => setsalary(data))
  }, [searchtext])

  const handlesearch = () => {
    const filter = salary.filter(
      (job) =>
        job.title.toLowerCase().indexOf(searchtext.toLowerCase()) !== -1
    );
    // console.log(filter)
    console.log(filter)
    setsalary(filter)
  };
  return (
    <div className='container px-4 mx-auto max-w-screen-2xl xl:px-24'>
      <Pageheader title={'Estimated Salary'} path={'Salary'} />

      <div className='mt-5'>
        <div className='p-2 mb-2 text-center search-box'>
          <input type="text" id='search' className='w-full py-2 pl-3 mb-4 border focus:outline-none lg:w-1/2' onChange={(e) => setsearchtext(e.target.value)} />
          <button className='px-4 py-2 font-semibold text-white rounded bg-blue' onClick={handlesearch}>Search</button>
        </div>
      </div>
      {/* salry display card*/}

      <div className='grid items-center grid-cols-1 gap-12 my-12 lg:grid-cols-3 sm:grid-cols-2'>
        {
          salary.map((data) => (
            <div key={data.id} className='p-3 border rounded-lg'>
              <h4 className='text-lg font-semibold'>{data.title}</h4>
              <p className='font-semibold text-gray-600'>{data.salary}</p>
              <div className='flex gap-4 felx-wrap'>
                <a href="/" className=''><button className='px-2 py-1 mt-1 font-semibold text-white rounded bg-blue'>{data.status}</button></a>
                <a href="/" className=''><button className='px-2 py-1 mt-1 font-semibold text-white rounded bg-blue'>{data.skills}</button></a>
              </div>
            </div>
          ))
        }
      </div>


    </div>
  )
}

export default Salarypage
