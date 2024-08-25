/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import Inputfield from './Inputfield'
function Jobpostingdata({handlechange}) {
    const now=new Date;
    // console.log(now)
    const twentyfourago=new Date( now - 24 *60 *60*1000)
    const sevendayago=new Date( now - 7*24 *60 *60*1000)
    const thirtydayago=new Date( now - 30*24 *60 *60*1000)
    // console.log(twentyfour)

    //convert date to string:--
    const twentyfouragodate=twentyfourago.toISOString().slice(0,10)
    const sevendayagodate=sevendayago.toISOString().slice(0,10)
    const thirtydayagodate=thirtydayago.toISOString().slice(0,10)
    // console.log(twentyfouragodate)
  return (
    <div>
     <div>
            <h4 className='mb-2 text-lg font-medium'>Date of Posting</h4>
            <div>
                <label className='sidebar-label-container'>
                    <input type="radio" name='test' id='test' value='' onChange={handlechange} />
                    <span className='checkmark'></span> All Time 
                </label>

                <Inputfield handlechange={handlechange} value={twentyfouragodate} title='Last 24 Hours' name='test' />
                <Inputfield handlechange={handlechange} value={sevendayagodate} title='Last 7 Days' name='test' />
                <Inputfield handlechange={handlechange} value={thirtydayagodate} title='Last 30 Days' name='test' />
                
            </div>
        </div>
    </div>
  )
}

export default Jobpostingdata
