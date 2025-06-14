import React from 'react'
import { LuArrowRight } from "react-icons/lu";

const Button = () => {
  return (
    <div className='font-urbanist text-xl font-normal bg-[#111B29] rounded-xl p-3 flex items-center justify-center gap-3'>
        <div className='bg-[#FFFFFF38] rounded-full p-[2px]'>
            <LuArrowRight className=' text-[#2B2B2B] size-8'/>
        </div>
        <div>
        Schedule a Consultation
        </div>
    </div>
  )
}

export default Button