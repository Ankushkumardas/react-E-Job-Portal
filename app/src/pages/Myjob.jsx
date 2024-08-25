/* eslint-disable no-empty */
/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Myjob() {
  // const email='ankush@gmail.com'
  const [jobs, setjobs] = useState([]);
  const [searchtext, setsearchtext] = useState("");
  const [isloading, setisloading] = useState(true);

  const handlesearch = () => {
    const filter = jobs.filter(
      (job) =>
        job.jobTitle.toLowerCase().indexOf(searchtext.toLowerCase()) !== -1
    );
    // console.log(filter)
    setjobs(filter);
    setisloading(false);
  };

  const handledelete = (id) => {
    console.log(id)
    fetch(`http://localhost:5000/job/${id}`, {
      method: 'DELETE'
    }).then(res => res.json).then(data => {
      if (data.acknowledge === true) {
        alert('job deleted succeesfully')
      }
    })
  }

  //SET CURRENT PAGE
  const [currentpage, setcurrentpage] = useState(1)
  const itemsperpage = 4;

  useEffect(() => {
    setisloading(true);
    fetch("http://localhost:5000/all-jobs")
      .then((res) => res.json())
      .then((data) => setjobs(data));
    setisloading(false)
  }, [searchtext]);
  console.log(searchtext);

  //pagination
  const indexodlastitem = currentpage + itemsperpage
  const indexoffirstitem = indexodlastitem - itemsperpage
  const currentjobs = jobs.slice(indexoffirstitem, indexodlastitem)

  //nextpage button
  const nextpage = () => {
    if (indexodlastitem < jobs.length) {
      setcurrentpage(currentpage + 1)
    }
  }
  const previouspage = () => {
    if (currentpage > 1) {
      setcurrentpage(currentpage - 1)
    }
  }

  return (
    <div className="container px-4 mx-auto max-w-screen-2xl xl:px-24">
      <div className="my-jobs-container">
        <h1 className="text-lg font-semibold text-center">All My Jobs</h1>
        <div className="mt-4 text-center">
          <input
            type="text"
            name="search"
            className="w-full py-2 pl-3 mt-3 mb-4 border focus:outline-none lg:w-6/12"
            onChange={(e) => setsearchtext(e.target.value)}
          />
          <button
            className="px-8 py-2 mb-4 font-semibold text-white rounded-sm bg-blue"
            onClick={handlesearch}
          >
            Search
          </button>
        </div>

        {/* table */}

        <section className="py-1 bg-blueGray-50">
          <div className="w-full px-4 mx-auto mt-5 mb-12 xl:w-8/12 xl:mb-0">
            <div className="relative flex flex-col w-full min-w-0 mb-6 break-words bg-white rounded shadow-lg ">
              <div className="px-4 py-3 mb-0 border-0 rounded-t">
                <div className="flex flex-wrap items-center">
                  <div className="relative flex-1 flex-grow w-full max-w-full px-4">
                    <h3 className="text-base font-semibold text-blueGray-700">
                      All Jobs
                    </h3>
                  </div>
                  <div className="relative flex-1 flex-grow w-full max-w-full px-4 text-right">
                    <Link to="/post-job">
                      <button
                        className="px-3 py-1 mb-1 mr-1 text-xs font-bold text-white uppercase transition-all duration-150 ease-linear bg-indigo-500 rounded outline-none active:bg-indigo-600 focus:outline-none"
                        type="button"
                      >
                        Post a New Job
                      </button>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="block w-full overflow-x-auto">
                <table className="items-center w-full bg-transparent border-collapse ">
                  <thead>
                    <tr>
                      <th className="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid bg-blueGray-50 text-blueGray-500 border-blueGray-100 whitespace-nowrap">
                        NO.
                      </th>
                      <th className="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid bg-blueGray-50 text-blueGray-500 border-blueGray-100 whitespace-nowrap">
                        TITLE
                      </th>
                      <th className="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid bg-blueGray-50 text-blueGray-500 border-blueGray-100 whitespace-nowrap">
                        COMPANY NAME
                      </th>
                      <th className="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid bg-blueGray-50 text-blueGray-500 border-blueGray-100 whitespace-nowrap">
                        SALARY
                      </th>
                      <th className="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid bg-blueGray-50 text-blueGray-500 border-blueGray-100 whitespace-nowrap">
                        EDIT
                      </th>
                      <th className="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid bg-blueGray-50 text-blueGray-500 border-blueGray-100 whitespace-nowrap">
                        DELETE
                      </th>
                    </tr>
                  </thead>
                  {
                    isloading ? (<div className="flex items-center justify-center h-20">
                      <p>Loading...</p>
                    </div>) : (<tbody>
                      {currentjobs.map((job, index) => (
                        <tr key={index}>
                          <th className="p-4 px-6 text-xs text-left align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap text-blueGray-700 ">
                            {index + 1}
                          </th>
                          <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap ">
                            {job.jobTitle}
                          </td>
                          <td className="p-4 px-6 text-xs border-t-0 border-l-0 border-r-0 align-center whitespace-nowrap">
                            {job.companyName}
                          </td>
                          <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                            ${job.minPrice} - ${job.maxPrice}
                          </td>
                          <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                            <button>
                              <Link to={`/edit-job/${job?._id}`}>Edit</Link>
                            </button>
                          </td>
                          <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                            <button className="px-4 py-2 font-semibold text-white bg-red-600 rounded-md" onClick={() => handledelete(job._id)}>
                              DELETE
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>)
                  }

                </table>
              </div>
            </div>
          </div>
          {/* pagination */}
          <div className="flex justify-center space-x-8 text-black">
            {
              (currentpage > 1) && (
                <button className="hover:underline" onClick={previouspage}>Previous</button>
              )
            }
            {
              (indexodlastitem < jobs.length) && (
                <button className="mb-5 hover:underline" onClick={nextpage}>Next</button>
              )
            }
          </div>
        </section>
      </div>
    </div>
  );
}
export default Myjob;
