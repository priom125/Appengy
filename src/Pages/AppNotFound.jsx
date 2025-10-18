import React from 'react'
import AppNotFoundIMG from '../assets/App-Error.png'
import { NavLink } from 'react-router'

function AppNotFound() {
  return (
    <div className='flex flex-col text-black items-center justify-center mx-auto'>
        <img src={AppNotFoundIMG} alt="" />
        <h1 className='my-4 text-5xl font-semibold'>OPPS!! APP NOT FOUND</h1>
        <p className='text-[#627382]'>The App you are requesting is not found on our system.  please try another apps</p>
                <NavLink to={"/apps"} className="btn mt-4 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] border-0 text-white">Go Back</NavLink>

    </div>
  )
}

export default AppNotFound