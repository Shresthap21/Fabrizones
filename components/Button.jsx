import React from 'react';
import { LuArrowRight } from "react-icons/lu";

const Button = ({ isHomePage, size = "default" }) => {
  const sizeClasses =
    size === "small"
      ? "text-sm p-2 gap-2"
      : "text-lg p-3 gap-3";

  const iconSize = size === "small" ? "size-4" : "size-5";

  return (
    <button
      className={`font-urbanist font-normal bg-[#111B29] rounded-md flex items-center justify-center text-white ${sizeClasses}`}
    >
      <span
        className={`rounded-full p-1 transition duration-300 
          ${isHomePage ? "bg-[#FFFFFF38] text-[#2B2B2B]" : "bg-[#ffffff] text-[#2B2B2B]"}`}
      >
        <LuArrowRight className={iconSize} />
      </span>
      <span>Schedule a Consultation</span>
    </button>
  );
};

export default Button;
