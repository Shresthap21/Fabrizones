"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "./Button";
import { RiArrowDropDownLine } from "react-icons/ri";
import ProductsDropdown from "./ProductsDropdown";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

const Navbar = () => {
  const [navHovered, setNavHovered] = useState(false);
  const pathname = usePathname();
  const [isHovered, setIsHovered] = useState(false);
  // const [isClickedOpen, setIsClickedOpen] = useState(false);

  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsHovered(false);
    }, 120); // Matches HoverCard delay
  };

  const showDropdown = isHovered;
  // const isHomePage = pathname === "/" && !showDropdown;
  const isHomePage = pathname === "/";
  const isNavTranslucent = pathname === "/" && navHovered;

  // const toggleClick = () => {
  //   setIsClickedOpen((prev) => {
  //     const next = !prev;
  //     if (!next) setIsHovered(false);
  //     return next;
  //   });
  // };

  const getLinkColor = (href) => {
    const isProducts = href === "/products";
    const isActive = isProducts ? showDropdown : pathname === href;

    if (isProducts) {
      return isActive
        ? "text-[#111B29] font-semibold"
        : "text-[#97A3B7] font-medium";
    }

    if (pathname === "/" && !isNavTranslucent) {
      return isActive
        ? "text-white font-semibold"
        : "text-[#DDDDDDCC] font-medium";
    } else {
      return isActive
        ? "text-[#111B29] font-semibold"
        : "text-[#97A3B7] font-medium";
    }
  };

  return (
    <div
      onMouseEnter={() => setNavHovered(true)}
      onMouseLeave={() => setNavHovered(false)}
    >
      <nav
        className={`absolute top-5 left-0 w-full flex justify-between items-center z-50 transition-all duration-500 px-16
      ${
        isNavTranslucent
          ? "bg-white text-white"
          : isHomePage
          ? "bg-transparent text-white"
          : "bg-white text-black"
      }`}
      >
        <div>
          <img
            src="/assets/compressed/Fabrizone.png"
            alt="Fabrizone Logo"
            className={`w-[18rem] transition duration-300 ${
              isHomePage && !isNavTranslucent ? "" : "invert"
            }`}
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
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="relative"
            >
              <HoverCard open={showDropdown}>
                <HoverCardTrigger
                  asChild
                  className={`flex items-center gap-1 cursor-pointer select-none ${getLinkColor(
                    "/products"
                  )}`}
                >
                  <div>
                    <span>Products</span>
                    <RiArrowDropDownLine
                      size={30}
                      className={`transition-transform ${
                        showDropdown ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </HoverCardTrigger>

                <HoverCardContent
                   className="w-full p-0 mt-6 shadow-none rounded-none transition-all duration-300 bg-white"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <ProductsDropdown isHomePage={isHomePage} />
                </HoverCardContent>
              </HoverCard>
            </li>

            <li>
              <Link href="/contact-us" className={getLinkColor("/contact-us")}>
                Contact Us
              </Link>
            </li>
          </ul>

          <Button isHomePage={isHomePage && !isNavTranslucent} isNavbar={true} />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
