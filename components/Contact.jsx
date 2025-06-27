import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Footer from "./Footer";

const Contact = () => {
  return (
    <>
    <section className="flex justify-center mt-[10rem] mx-[5rem]">


    <div className="w-auto rounded-t-[30px] flex flex-col items-center font-urbanist py-16 px-8 bg-white">
  <div className="flex flex-col lg:flex-row mb-[12rem]">
    {/* Left Content */}
    <div className="">
      {/* Heading and content */}
      <div className="text-[#111B29] space-y-9">
        <div className="font-medium text-[70px]">Contact Us</div>
        <div className="font-light text-xl space-y-6">
          <p className="w-[90%]">
            Book a consultation and discover custom solutions made just for your space.
          </p>
          <p>Let’s start a conversation and bring your ideas to life!</p>
        </div>
      </div>

<div>

  
</div>
      {/* form grid */}
      <div className="grid grid-cols-2 mt-[2rem] space-x-[4rem]">
        {/* Form */}
        <div className="max-w-md">
          <form className="space-y-10">
            <div>
              <label className="block text-xl">Full Name</label>
              <input
                type="text"
                className="w-[80%] border-b-2 border-[#121C2A] focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm">E-mail</label>
              <input
                type="email"
                className="w-[60%] border-b-2 border-[#121C2A] focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm">Company</label>
              <input
                type="text"
                className="w-[60%] border-b-2 border-[#121C2A] focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm">Message</label>
              <textarea
                rows="1"
                className="w-[60%] border-b-2 border-[#121C2A] focus:outline-none resize-none"
              ></textarea>
            </div>
          </form>

          <button className="bg-[#111B29] font-urbanist rounded-full text-white text-2xl px-[6rem] py-3 mt-[6rem]">Submit</button>
        </div>

        {/* Contact Info */}
        <div className="space-y-8 text-[#121C2A]">
          <div>
            <p className="text-xl font-bold">Contact</p>
            <p className="text-xl">hi@green.com</p>
          </div>
          <div>
            <p className="text-xl font-bold">Based in</p>
            <p className="text-xl">India</p>
          </div>

          <div className="flex gap-x-10 pt-[8rem]">
            <FaFacebook size={35}/>
            <FaInstagram size={35}/>
            <FaTwitter size={35}/>
          </div>
        </div>
      </div>
    </div>

    {/* Right Image */}
    <div className="flex justify-center items-start px-[10rem]">
  <img
    src="/assets/compressed/contact/contactFlogo.png"
    alt="Contact"
    className="w-full h-auto object-contain"
  />
</div>
  </div>
</div>
    </section>
    <Footer/>
    </>

  );
};

export default Contact;
