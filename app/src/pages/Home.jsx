/* eslint-disable react/jsx-key */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import Banner from '../components/Banner'
import { useState } from 'react';
import Card from '../components/Card';
import Jobs from './Jobs';
import Sidebar from '../components/Sidebar'
import Newsletter from '../components/Newsletter';
function Home() {

  const [selectedcategory, setselectedcategory] = useState(null)
  const [jobs, setjobs] = useState([])
  const [isloading, setisloading] = useState(true)
  const [currentpage, setcurrentpage] = useState(1)
  const itesmperpage = 6;

  useEffect(() => {
    setisloading(true)
    // http://localhost:5000/all-jobs
    fetch('http://localhost:5000/all-jobs').then((res) => { return res.json() }).then((data) => setjobs(data))
    setisloading(false)

  }, [])

  // console.log(jobs)


  //handle input change
  const [query, setquery] = useState('');

  const handleinputchange = (e) => {
    // console.log(e.target.value)
    setquery(e.target.value)
  }

  // filter jobs over title for filter tab
  const filtereditems = jobs.filter((job) => job.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1)
  console.log(filtereditems)


  // --------------------- radio button filtering section---------------
  const handlechange = (e) => {
    setselectedcategory(e.target.value)
  }
  //filltering for button on time
  const handleclick = (e) => {
    setselectedcategory(e.target.value)
  }

  //calculating the index range and than posting number of jobs in one page and to ther next page :--
  const calculateperpage = () => {
    const startindex = (currentpage - 1) * itesmperpage;
    const endindex = startindex + itesmperpage;
    return { startindex, endindex };
  }

  //function for the next page
  const nextpage = () => {
    if (currentpage < Math.ceil(filtereditems.length / itesmperpage)) {
      setcurrentpage(currentpage + 1)
    }
  }

  //function for previous page
  const prevpage = () => {
    if (currentpage > 1) {
      setcurrentpage(currentpage - 1)
    }
  }

  //main functions---
  const filtereddata = (jobs, selected, query) => {
    let filtedjobs = jobs;
    console.log(filtedjobs)

    //filtering the input data
    if (query) {
      filtedjobs = filtereditems
    }

    //category filtering
    if (selected) {
      filtedjobs = filtedjobs.filter(({ jobLocation, maxPrice, experienceLevel, salaryType, employmentType, postingDate }) => (
        jobLocation.toLowerCase() === selected.toLowerCase() ||
        parseInt(maxPrice) <= parseInt(selected) ||
        salaryType.toLowerCase() === selected.toLowerCase() ||
        experienceLevel.toLowerCase() === selected.toLowerCase() ||
        postingDate >= selected ||
        employmentType.toLowerCase() === selected.toLowerCase() 
        
      ))
      console.log(filtedjobs)
    }

    //slice the data based on current page
    const { startindex, endindex } = calculateperpage();
    filtedjobs = filtedjobs.slice(startindex, endindex)


    return filtedjobs.map((data, i) => <Card key={i} data={data} />)

  }


  const results = filtereddata(jobs, selectedcategory, query)
  console.log(results)



  return (
    <div>
      <Banner query={query} handleinputchange={handleinputchange} />

      {/* main content with 3 section sin column */}


      <div className='bg-[#FAFAFA] md:grid grid-cols-4 gap-8 lg:px-24 px-4 py-12 '>
        {/* left side filters */}
        <div className='p-4 bg-white rounded'><Sidebar handlechange={handlechange} handleclick={handleclick} /></div>

        {/* job cards */}
        <div className='col-span-2 p-4 bg-white'>
          {
            isloading ? (<p>Loading...</p>) : results.length > 0 ? (<Jobs results={results} />) : <><h3 className='text-lg font-semibold'>{results.length} Jobs</h3>
              <div>No Data Found</div></>
          }

          {/* pagination here to move to prev or next page  */}
          {
            results.length > 0 ? (
              <div className='flex justify-center mt-4 space-x-8 '>
                <button onClick={prevpage}>Previous</button>
                <span>Page {currentpage} of {Math.ceil(filtereditems.length / itesmperpage)}</span>
                <button onClick={nextpage} disabled={currentpage === Math.ceil(filtereditems.length)}>Next</button>
              </div>
            ) : ''
          }
        </div>




        {/* rightside */}
        <div className='p-4 bg-white rounded'><Newsletter/></div>

      </div>
    </div>
  )
}

export default Home
