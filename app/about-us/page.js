// "use client";
import Navbar from '@/components/Navbar'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar/>
      <div className='bg-[#F9F9FB] rounded-[30px] p-4 font-urbanist flex justify-between '>
        <div>About us</div>
        <div className='bg-[#FFFFFF]'>
          Discover how Fabrizones was built — and the design values that continue to inspire our journey.
        </div>
      </div>
    </div>
  )
}

export default page