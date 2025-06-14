import React from 'react'
import { LuArrowRight } from "react-icons/lu";

const Button = ({ isHomePage }) => {
  return (
    <button
      className='font-urbanist text-xl font-normal bg-[#111B29] rounded-xl p-3 flex items-center justify-center gap-3 text-white'
    >
      <span
        className={`rounded-full p-1 transition duration-300 
          ${isHomePage ? "bg-[#FFFFFF38] text-[#2B2B2B]" : "bg-[#ffffff] text-[#2B2B2B]"}`}
      >
        <LuArrowRight className="size-5" />
      </span>
      <span>Schedule a Consultation</span>
    </button>
  );
};

export default Button;
