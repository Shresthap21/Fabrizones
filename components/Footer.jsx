import React from "react";
import { FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0B1320] text-white px-8 md:px-20 py-16 font-urbanist h-auto">
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <div className="space-y-6 max-w-md">
          <div className="">
            <img src="/assets/images/Fabrizone.png" alt="Logo" className="-ml-8" />
          </div>
          <p className="text-lg font-light text-[#F4F4F4]">
            Get in touch with us for an in-depth one to one session.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 text-[#F4F4F4] text-lg font-light">
          <div className="space-y-2">
            <p className="">Home</p>
            <p className="">About</p>
            <p className="">Services</p>
            <p className="">Products</p>
          </div>
          <div className="space-y-2">
            <p className="">Contact</p>
            <p className="">Privacy Policy</p>
            <p className="">Terms of Service</p>
          </div>
        </div>
      </div>

      <hr className="border-t border-gray-600 mt-[6rem] mb-3" />

      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-gray-400">© 2024. All rights reserved.</p>
        <div className="flex gap-6 text-white text-xl">
          <FaInstagram size={30}/>
          <FaLinkedin size={30}/>
          <FaEnvelope size={30}/>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
