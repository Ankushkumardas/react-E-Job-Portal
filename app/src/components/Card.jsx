/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'
import { CiLocationOn,CiClock1  } from "react-icons/ci";
import { AiOutlineDollar } from "react-icons/ai";
import { SlCalender } from "react-icons/sl";

function Card({ data}) {
    const { _id,companyName, companyLogo, minPrice, maxPrice, salaryType, jobLocation, employmentType, postingDate, description, jobTitle } = data;
    // console.log(data)
    return (
        <section className='card'>
            <Link to={`/job/${_id}`} className='flex flex-col items-start gap-4 sm:flex-row'><img src={companyLogo} alt="" />
            <div>
                <h4 className='mb-1 font-semibold text-gray-600 text-md'>{companyName}</h4>
                <h3 className='mb-2 font-bold text-md'>{jobTitle}</h3>
                <div className='flex flex-wrap gap-2 mb-2 text-sm'>
                    <span className='flex items-center gap-1'><CiLocationOn />{jobLocation}</span>
                    <span className='flex items-center gap-1'><CiClock1  />{employmentType}</span>
                    <span className='flex items-center gap-1'><AiOutlineDollar />{minPrice}-{maxPrice}</span>
                    <span className='flex items-center gap-1'><SlCalender  />{postingDate}</span>
                </div>
                <p className='text-sm'>{description}</p>
            </div>
            </Link>
            
        </section>
    )
}

export default Card
