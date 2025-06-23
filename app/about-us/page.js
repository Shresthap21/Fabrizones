// "use client";
import AboutTeam from "@/components/AboutTeam";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import React from "react";
import Button from "@/components/Button";

const page = () => {
  return (
    <>
    <div>
      <div className="pt-[12rem] flex flex-col items-center space-y-12 ">
        <div className="">
          <div className="bg-[#F9F9FB] overflow-hidden w-[85rem] py-4 pl-8 rounded-[30px] font-urbanist flex justify-between items-center">
            <div className="text-[70px] font-semibold">About us</div>
            <div className="bg-[#FFFFFF] flex items-center pr-8  py-6">
              <p className="font-extralight text-[24px] text-[#666666]">
                Discover how Fabrizones was built — and the design values <br />{" "}
                that continue to inspire our journey.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#F9F9FB] w-[85rem] grid grid-cols-2 rounded-[30px] space-x-10">
          <div>
            <img src="/assets/images/aboutus/about.png" className="p-14" />
          </div>

          <div className="font-urbanist flex flex-col justify-center gap-y-10">
            <p className="font-semibold text-[50px]">
              Where Fabric Meets Vision
            </p>
            <p className="text-[24px] leading-[1.3] w-[90%] font-extralight text-[#666666]">
              At Fabrizones, we don’t just create furnishings — we design
              experiences. With a focus on quality, creativity, and comfort, we
              bring spaces to life through curtains, drapes, upholstery, and
              tailored textile solutions that reflect your personality and
              purpose.
            </p>
            <div className="flex gap-8 font-urbanist">
              <Button isHomePage={false} size="default" />
              <button className="border border-[#666666] text-[#666666] px-14 py-2 text-lg rounded-md">
                Explore Services
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-8 font-urbanist py-4 ">
          <div className="bg-[#2979FF] bg-opacity-50 text-[#333333] rounded-[30px] px-6 pt-20 pb-9 w-[41rem] flex flex-col justify-end gap-y-4">
            <p className="font-semibold text-[40px]">Mission</p>
            <p className="text-[20px] leading-[1.4]">
              To design and deliver thoughtful, functional, and elegant interior
              fabric solutions that enhance living and working spaces — with
              craftsmanship, care, and creativity at the core of everything we
              do.
            </p>
          </div>

          <div className="bg-[#2979FF] text-[#ffffff] rounded-[30px] px-6 pt-20 pb-9 w-[41rem] flex flex-col justify-end gap-y-4">
            <p className="font-semibold text-[40px]">Vision</p>
            <p className="text-[20px] leading-[1.4]">
              To be a leading name in interior soft furnishings by blending
              design innovation, premium quality, and customer-first service —
              making beautiful spaces accessible to everyone.
            </p>
          </div>
        </div>

        <AboutTeam/>

        
      </div>
    </div>

    </>
  );
};

export default page;
