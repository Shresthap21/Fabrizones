"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "./Button";
import { RiArrowDropDownLine } from "react-icons/ri";
import ProductsDropdown from "./ProductsDropdown";

const Navbar = () => {
  const pathname = usePathname();
  const [isClickedOpen, setIsClickedOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const isHomePage = pathname === "/" && !(isClickedOpen || isHovered);

  const toggleClick = () => {
    setIsClickedOpen((prev) => {
      const nextState = !prev;
      if (!nextState) {
        setIsHovered(false);
      }
      return nextState;
    });
  };

  const showDropdown = isClickedOpen || isHovered;

  const getLinkColor = (href) => {
    const isProducts = href === "/products";
    const isActive = isProducts ? showDropdown : pathname === href;

    if (isProducts) {
      return isActive ? "text-[#111B29] font-semibold" : "text-[#97A3B7] font-medium";
    }

    if (pathname === "/") {
      return isActive ? "text-white font-semibold" : "text-[#DDDDDDCC] font-medium";
    } else {
      return isActive ? "text-[#111B29] font-semibold" : "text-[#97A3B7] font-medium";
    }
  };

  return (
    <>
      <nav
        className={`absolute top-5 left-0 w-full flex justify-between items-center z-50 transition-all duration-500 ${
          isHomePage
            ? "bg-transparent text-white px-16"
            : "bg-white text-black px-16"
        }`}
      >
        <div>
          <img
            src="/assets/images/Fabrizone.png"
            alt="Fabrizone Logo"
            className={`w-[18rem] transition duration-300 ${isHomePage ? "" : "invert"}`}
          />
        </div>

        <div className="flex items-center gap-16">
          <ul className="flex gap-[3rem] text-lg font-urbanist">
            <li>
              <Link href="/" className={getLinkColor("/")}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/about-us" className={getLinkColor("/about-us")}>
                About Us
              </Link>
            </li>
            <li>
              <Link href="/services" className={getLinkColor("/services")}>
                Services
              </Link>
            </li>

            <li
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div
                onClick={toggleClick}
                className={`flex items-center gap-1 cursor-pointer select-none ${getLinkColor("/products")}`}
              >
                <span>Products</span>
                <RiArrowDropDownLine
                  size={30}
                  className={`transition-transform ${showDropdown ? "rotate-180" : ""}`}
                />
              </div>
            </li>

            <li>
              <Link href="/contact-us" className={getLinkColor("/contact-us")}>
                Contact Us
              </Link>
            </li>
          </ul>

          <Button isHomePage={isHomePage} />
        </div>
      </nav>

      {showDropdown && (
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="absolute left-0 top-[100px] w-full bg-white z-40 shadow-md"
        >
          <div className="mx-auto px-12 py-8">
            <ProductsDropdown />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
