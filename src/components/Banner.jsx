import React from 'react'

function Banner() {
  return (
    <div className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white text-center p-20'>
          <h1 className='text-5xl text-center font-bold'>Trusted by Millions, Built for You</h1>
          <div className="flex">
            <div className="flex flex-col items-center justify-center w-1/3 mt-10">
                <p className='font-extralight'>Total Downloads</p>
                <h1 className='text-7xl font-bold'>29.6M</h1>
                 <p className='font-extralight mt-4'>21% more than last month</p>
            </div>
            <div className="flex flex-col items-center justify-center w-1/3 mt-10">
                <p className='font-extralight'>Total Reviews</p>
                <h1 className='text-7xl font-bold'>906K</h1>
                 <p className='font-extralight mt-4'>46% more than last month</p>
            </div>
            <div className="flex flex-col items-center justify-center w-1/3 mt-10">
                <p className='font-extralight'>Active Apps</p>
                <h1 className='text-7xl font-bold'>132+</h1>
                 <p className='font-extralight mt-4'>31 more will Launch</p>
            </div>
            </div>  
    </div>
  )
}

export default Banner