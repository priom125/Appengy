import React from 'react'
import errorImg from '../assets/App-Error.png'
import { NavLink } from 'react-router'

function ErrorPages() {
  return (
    <div className='bg-white flex flex-col items-center justify-center mx-auto w-full pt-20'>
      <img src={errorImg} alt="" />
           <div className=" flex items-center flex-col justify-center py-10">
        <h1 className="text-5xl font-bold text-center pt-20 mb-6 text-black">
        Oops, page not found!
        </h1>
        <p className="text-[#627382] w-[1140px] text-center mx-auto mb-6">
          The page you are looking for is not available.
        </p>
         <NavLink to={"/"} className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white border-0">
          Back
        </NavLink>
        </div>
    </div>
  )
}

export default ErrorPages