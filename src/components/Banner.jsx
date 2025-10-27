import React from 'react'

function Banner() {
  return (
    <div className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white text-center sm:p-16 md:p-20 rounded-xl mx-4 md:mx-auto max-w-full'>
          <h1 className='text-3xl sm:text-4xl md:text-5xl text-center font-bold'>Trusted by Millions, Built for You</h1>
          
          <div className="flex flex-col md:flex-row justify-center items-center md:space-x-8 lg:space-x-16 mt-8 md:mt-12">
            
            <div className="flex flex-col items-center justify-center w-full md:w-1/3 py-6 md:py-0 border-b border-white/20 md:border-b-0 md:border-r md:last:border-r-0">
                <p className='font-extralight text-sm sm:text-base'>Total Downloads</p>
                <h1 className='text-5xl sm:text-6xl md:text-7xl font-bold'>29.6M</h1>
                <p className='font-extralight mt-2 text-xs sm:text-sm'>21% more than last month</p>
            </div>
            
            <div className="flex flex-col items-center justify-center w-full md:w-1/3 py-6 md:py-0 border-b border-white/20 md:border-b-0 md:border-r md:last:border-r-0">
                <p className='font-extralight text-sm sm:text-base'>Total Reviews</p>
                <h1 className='text-5xl sm:text-6xl md:text-7xl font-bold'>906K</h1>
                <p className='font-extralight mt-2 text-xs sm:text-sm'>46% more than last month</p>
            </div>
            
            <div className="flex flex-col items-center justify-center w-full md:w-1/3 py-6 md:py-0">
                <p className='font-extralight text-sm sm:text-base'>Active Apps</p>
                <h1 className='text-5xl sm:text-6xl md:text-7xl font-bold'>132+</h1>
                <p className='font-extralight mt-2 text-xs sm:text-sm'>31 more will Launch</p>
            </div>
          </div>  
    </div>
  )
}

export default Banner
