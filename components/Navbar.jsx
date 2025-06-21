"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "./Button";
import { RiArrowDropDownLine } from "react-icons/ri";

const Navbar = () => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <nav
      className={`absolute top-0 left-0 w-full flex justify-between items-center z-50 transition-all duration-500 ${
        isHomePage
          ? "bg-transparent text-white px-16 py-4"
          : "bg-white text-black shadow-md my-6 px-16"
      }`}
    >
      <div>
        <img
          src="/assets/images/Fabrizone.png"
          alt="Fabrizone Logo"
          className={`w-[20rem] transition duration-300 ${
            isHomePage ? "" : "invert"
          }`}
        />
      </div>

      <div className="flex items-center gap-16">
        <ul className="flex gap-[3rem] text-xl font-urbanist">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about-us">About Us</Link></li>
          <li><Link href="/services">Services</Link></li>
          <li className="flex items-center gap-1 cursor-pointer">
  <span>Products</span>
  <RiArrowDropDownLine />
</li>
          <li><Link href="/contact-us">Contact Us</Link></li>
        </ul>
        <Button isHomePage={isHomePage}/>
      </div>
    </nav>
  );
};

export default Navbar;
