import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Swal from 'sweetalert2'


function Jobdetail() {

    const { id } = useParams()
    const [job, setjob] = useState([])
    // console.log(id)
    const handleapply = async () => {
        const { value: url } = await Swal.fire({
            input: "url",
            inputLabel: "URL address",
            inputPlaceholder: "Enter the URL"
        });
        if (url) {
            Swal.fire(`Entered URL: ${url}`);
        }
    }
    useEffect(() => {
        fetch(`http://localhost:5000/all-jobs/${id}`).then(res => res.json()).then(data => setjob(data))
    }, [job])
    return (
        <div className='container px-4 mx-auto max-w-screen-2xl lg:px-24'>

            <div className='py-24 mt-3 bg-[#FAFAFA] items-center flex rounded justify-center'>
                <div>
                    <h2 className='text-3xl font-semibold center text-blue'>Job Details Page</h2>
                    <p className='text-center text0sm'><a href="/">Home</a>/Single Job</p>
                </div>
            </div>


            <h2 className='mt-3 mb-2 font-semibold text-md'>Job Id:{id.slice(0,6)}</h2>
            <h3 className='h-10 text-xl font-semibold  text-blue w-[15%] flex justify-start items-center rounded-md mb-2'>Job Details</h3>
            <h1 className='text-xl font-semibold '> {job.jobTitle}</h1>
            
            <p className='mt-3 font-semibold'>Job Type :</p>
            <div className='flex gap-1 mt-2'>
                <button className='px-6 py-1 font-semibold text-white rounded bg-blue'>Full-Time</button>
                <button className='px-6 py-1 font-semibold text-white rounded bg-blue' onClick={handleapply}>Apply Now</button>
            </div>
            
        </div>
    )
}

export default Jobdetail
