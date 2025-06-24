import React from 'react';
import { LuArrowRight } from "react-icons/lu";

const Button = ({ isHomePage, size = "default", isNavbar = false }) => {
  const sizeClasses = size === "small" ? 'text-sm p-2 gap-2' : 'text-lg p-3 gap-3';
  const baseSize = "text-lg p-3 gap-3";
  const hoverSize = isNavbar ? "group-hover:text-xs group-hover:p-1 group-hover:gap-2" : "";

  const iconSize = size === "small" ? "size-4" : "size-5";

  const scaleClass = isNavbar ? "hover:scale-95" : "";

  const arrowTranslate =
    size === "small"
      ? "group-hover:translate-x-[158px]"
      : "group-hover:translate-x-[200px]";
  const textTranslate =
    size === "small"
      ? "group-hover:-translate-x-[28px]"
      : "group-hover:-translate-x-[40px]";

  return (
    <button
      className={`font-urbanist font-normal bg-[#111B29] rounded-md flex items-center justify-center text-white 
        transform transition-all duration-300 ease-in-out group 
        ${scaleClass} ${baseSize} ${hoverSize} ${sizeClasses}`}
    >
      <span
        className={`rounded-full p-1 transition-all duration-300 ease-in-out transform 
          ${arrowTranslate}
          ${isHomePage ? "bg-[#FFFFFF38] text-[#2B2B2B]" : "bg-[#ffffff] text-[#2B2B2B]"}
        `}
      >
        <LuArrowRight className={iconSize} />
      </span>

      <span
        className={`transition-all duration-300 ease-in-out transform ${textTranslate}`}
      >
        Schedule a Consultation
      </span>
    </button>
  );
};

export default Button;
