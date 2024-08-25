/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react'
import { useLoaderData, useParams } from 'react-router'
import { useForm } from 'react-hook-form';
import Creatableselect from "react-select/creatable";

function Updatejob() {

  const { id } = useParams()
  // console.log(id)
  const { _id, companyName, jobTitle, companyLogo, minPrice, maxPrice, salaryType, jobLocation, postingDate, experienceLevel, employmentType, posteBy, description, skills } = useLoaderData()

  const [selectedoption, setselectedoption] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    data.skills = selectedoption;
    console.log(data);
    fetch(`http://localhost:5000/update-job/${id}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
  };
  return (
    <div className="container px-4 mx-auto max-w-screen-2xl xl:px-24">
      {/* /form */}

      <div className="bg-[#f5efef] py-10 px-4 lg:px-16 ">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* 1st row */}
          <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
            <div className="w-full lg:w-1/2">
              <label className="block mb-2 font-semibold text-md">
                Job title
              </label>
              <input
                type="text"
                defaultValue={jobTitle}
                {...register("jobTitle")}
                className="flex-1 block w-full py-1.5 bg-white border-1 rounded pl-3 mb-2 text-gray-600 focus:outline-none sm:text-sm"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <label className="block mb-2 font-semibold text-md">
                Company Name
              </label>
              <input
                type="text"
                placeholder="Ex: Microsoft"
                defaultValue={companyName}
                {...register("companyName")}
                className="flex-1 block w-full py-1.5 bg-white border-1 rounded pl-3 mb-2 text-gray-600 focus:outline-none sm:text-sm"
              />
            </div>
          </div>
          {/* 2nd row */}

          <div className="flex flex-col items-center justify-between gap-8 mt-3 lg:flex-row">
            <div className="w-full lg:w-1/2">
              <label className="block mb-2 font-semibold text-md">
                Minimum Salary
              </label>
              <input
                type="text"
                placeholder="$.."
                defaultValue={minPrice}
                {...register("minPrice")}
                className="flex-1 block w-full py-1.5 bg-white border-1 rounded pl-3 mb-2 text-gray-600 focus:outline-none sm:text-sm"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <label className="block mb-2 font-semibold text-md">
                Maximum Salary
              </label>
              <input
                type="text"
                placeholder="$.."
                defaultValue={maxPrice}
                {...register("maxPrice")}
                className="flex-1 block w-full py-1.5 bg-white border-1 rounded pl-3 mb-2 text-gray-600 focus:outline-none sm:text-sm"
              />
            </div>
          </div>

          {/* 3rd row */}
          <div className="flex flex-col items-center justify-between gap-8 mt-3 lg:flex-row">
            <div className="w-full lg:w-1/2">
              <label className="block mb-2 font-semibold text-md">
                Salary Type
              </label>
              <select
                {...register("salaryType")}
                className="w-full py-1.5 rounded px-1.5"
              >
                <option value={salaryType}>{salaryType}</option>
                <option value="Hourly">Hourly</option>
                <option value="Monthly">Monthly</option>
                <option value="Yearly">Yearly</option>
              </select>
            </div>
            <div className="w-full lg:w-1/2">
              <label className="block mb-2 font-semibold text-md">
                Job Location
              </label>
              <input
                type="text"
                placeholder="Job location"
                defaultValue={jobLocation}
                {...register("jobLocation")}
                className="flex-1 block w-full py-1.5 bg-white border-1 rounded pl-3 mb-2 text-gray-600 focus:outline-none sm:text-sm"
              />
            </div>
          </div>

          {/* 4th row */}
          <div className="flex flex-col items-center justify-between gap-8 mt-3 lg:flex-row">
            <div className="w-full lg:w-1/2">
              <label className="block mb-2 font-semibold text-md">
                Job Posting Date
              </label>
              <input
                type="date"
                placeholder="Job location"
                defaultValue={postingDate}
                {...register("postingDate")}
                className="flex-1 block w-full py-1.5 bg-white border-1 rounded pl-3 mb-2 text-gray-600 focus:outline-none sm:text-sm"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <label className="block mb-2 font-semibold text-md">
                Experience Level
              </label>
              <select
                {...register("experienceLevel")}
                className="w-full py-1.5 rounded px-1.5"
              >
                <option value={experienceLevel}>{experienceLevel}</option>
                <option value="NoExperience">No Experience</option>
                <option value="Intership">Internship</option>
                <option value="Work remotely">Work Remotely</option>
              </select>
            </div>
          </div>

          {/* 5th row */}
          <div>
            <label className="block mb-2 font-semibold text-md">
              Required Skill Sets
            </label>
            <Creatableselect
              defaultInputValue={selectedoption}
              defaultValue={skills}
              onChange={setselectedoption}
              options={options}
              isMulti
              className="create-job-input"
            />
          </div>

          {/* 6ht row */}
          <div className="flex flex-col items-center justify-between gap-8 mt-3 lg:flex-row">
            <div className="w-full lg:w-1/2">
              <label className="block mb-2 font-semibold text-md">
                Job Logo
              </label>
              <input
                type="url"
                placeholder="companyLogo"
                defaultValue={companyLogo}
                {...register("companyLogo")}
                className="flex-1 block w-full py-1.5 bg-white border-1 rounded pl-3 mb-2 text-gray-600 focus:outline-none sm:text-sm"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <label className="block mb-2 font-semibold text-md">
                Employment Type
              </label>
              <select
                {...register("employmentType")}
                className="w-full py-1.5 rounded px-1.5"
              >
                <option value={employmentType}>{employmentType}</option>
                <option value="Full-time">Full Time</option>
                <option value="Temporary">Temporary</option>
                <option value="Part-time">Part Time</option>
              </select>
            </div>
          </div>
          {/* 7th row */}
          <div>
            <label className="block mb-2 font-semibold text-md">
              Job Description
            </label>
            <textarea
              {...register("description")}
              className="w-full p-2 rounded focus:outline-none"
              placeholder="Job Desc.."
            />
          </div>

          {/* last row */}
          <div>
            <label className="block mb-2 text-lg"> Job Posted By</label>
            <input
              type="email"
              placeholder="your Email"
              defaultValue={posteBy}
              {...register("postedby")}
              className="flex-1 block w-full py-1.5 bg-white border-1 rounded pl-3 mb-2 text-gray-600 focus:outline-none sm:text-sm"
            />
          </div>

          <input
            type="submit"
            className="justify-center block px-4 py-2 mx-auto mt-12 font-semibold text-white rounded-md cursor-pointer bg-blue"
          />
        </form>
      </div>
    </div>
  )
}

export default Updatejob
