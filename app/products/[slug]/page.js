import React from "react";
import { productData } from "@/data/products";
import Button from "@/components/Button";
import Link from "next/link";

export default function Page({ params }) {
  const { slug } = params;
  const data = productData[slug];

  if (!data) return <div>Product not found</div>;

  return (
    <div className="pt-[12rem] mx-[6rem] flex flex-col items-center space-y-12">
      <div className="w-full flex flex-col gap-y-20">
        {/* Header */}
        <div className="bg-[#F9F9FB] w-full py-5 pl-8 overflow-hidden rounded-[30px] flex justify-between font-urbanist">
          <div className="">
            <div className="text-[70px] font-semibold">{data.title}</div>
            <div className="font-extralight text-[24px] text-[#666666]">
              {data.tagline}
            </div>
          </div>

          <div className="bg-[#FFFFFF] flex w-[50%] py-6"></div>
        </div>

        {/* image */}
        <div>
          <img src={data.heroImage} className="rounded-[24px] w-full max-h-[70vh] object-cover" />
        </div>

        {/* introSection */}
        <div className="font-urbanist space-y-6">
          <h1 className="text-[#181A2A] font-semibold text-[38px]">
            {data.introSection.heading}
          </h1>
          <p className="text-[#3B3C4A] text-3xl leading-[1.6]">
            {data.introSection.description}
          </p>
        </div>

        {/* whyChoose */}
        <div className="font-urbanist space-y-6">
          <h2 className="text-[#181A2A] font-semibold text-[38px]">
            {data.whyChoose.heading}
          </h2>

          <ul className="list-disc list-inside text-[#3B3C4A] text-3xl leading-[1.5] space-y-2 pl-4">
            {data.whyChoose.points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>

        {/* Product Types Section */}
        {data.types?.length > 0 && (
          <div className="flex flex-col gap-[6rem] mx-auto px-4 py-10">
            {data.types.map((type, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row max-w-[90rem] max-h-[25rem] bg-[#F9F9FB] rounded-3xl overflow-hidden shadow-md ${
                  index % 2 !== 0 ? "md:flex-row-reverse gap-x-10" : ""
                }`}
              >
                {/* Text */}
                <div className="flex-1 px-6 py-10 md:px-10 flex flex-col justify-center gap-8">
                  <h3 className="text-2xl md:text-5xl font-semibold font-urbanist text-[#333333]">
                    {type.type}
                  </h3>
                  <p className="text-[#666666] text-base md:text-[23px] leading-relaxed font-extralight font-urbanist">
                    {type.description}
                  </p>
                </div>

                {/* Image */}
                <div className="flex-1">
                  <img
                    src={`/assets/compressed/our-products/${data.title}/${type.image}.jpg`}
                    alt={type.type}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Lower container */}
      <div className="bg-[#F9F9FB] w-full py-8 pl-12 rounded-[30px] grid grid-cols-2 items-center font-urbanist">
        
          <div className="text-[50px] leading-[1.2] font-semibold">
            Create the Perfect <br /> Backdrop
          </div>
      

        <div className="flex justify-center md:justify-end w-full">
  <div className="bg-white w-full md:w-auto py-5 px-6 md:px-10 overflow-hidden flex flex-col md:flex-row items-center justify-center md:justify-between gap-12 font-urbanist">
    <Button isHomePage={false} size="default" className="w-full md:w-auto text-center" />
    <Link
      href="/services"
      className="w-full md:w-auto border border-[#666666] text-[#666666] whitespace-nowrap px-10 py-3 text-base rounded-sm font-medium hover:bg-[#F0F0F0] transition-all text-center"
    >
      Explore Services
    </Link>
  </div>
</div>

      </div>
    </div>
  );
}
