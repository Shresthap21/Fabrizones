import React from 'react'
import Button from './Button';

const Navbar = () => {
  return (
         <nav className="absolute top-0 left-0 w-full flex justify-between items-center px-16 py-4 z-10 text-white">
      
      <div className="flex items-center">
        <img src="/assets/images/F-icon.png" alt="F Icon" />
        <img src="/assets/images/fabri-icon.png" alt="Fabri Icon"/>
      </div>

      <div className="flex items-center gap-12">
        <ul className="flex gap-[50px] text-xl font-urbanist text-[#DDDDDDCC]">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">About Us</li>
          <li className="cursor-pointer">Services</li>
          <li className="cursor-pointer">Products</li>
          <li className="cursor-pointer">Contact Us</li>
        </ul>
        <Button />
      </div>

    </nav>
  )
}

export default Navbar;