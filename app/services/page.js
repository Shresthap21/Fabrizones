import React from "react";
import Link from "next/link";

const services = [
  {
    title: "Market Research",
    description:
      "We analyze trends and customer preferences to design meaningful, relevant, and forward-looking interior solutions that last.",
    image: "/assets/images/our-services/card4.jpg",
    imageFirst: false,
  },
  {
    title: "Design Development",
    description:
      "We translate ideas into refined, executable designs tailored to your needs with elegance and practicality in mind.",
    image: "/assets/images/our-services/card7.png",
    imageFirst: true,
  },
  {
    title: "Inhouse Fabrication",
    description:
      "Our inhouse facility produces high-quality, custom furnishings using advanced machinery and skilled hands.",
    image: "/assets/images/our-services/card6.jpg",
    imageFirst: false,
  },
  {
    title: "Warehouse Facility",
    description:
      "Efficient inventory management and precise packaging for timely delivery and smooth operations.",
    image: "/assets/images/our-services/card1.jpg",
    imageFirst: true,
  },
  {
    title: "Project Estimation",
    description:
      "Detailed cost analysis and material planning to ensure budget-friendly yet premium-quality proposals.",
    image: "/assets/images/our-services/card2.jpg",
    imageFirst: false,
  },
  {
    title: "Value Engineering",
    description:
      "We optimize form, function, and cost using innovative methods without compromising design integrity or quality.",
    image: "/assets/images/our-services/card5.jpg",
    imageFirst: true,
  },
];

const page = () => {
  return (
    <div className="pt-[12rem] flex flex-col items-center space-y-14">
      <div className="bg-[#F9F9FB] overflow-hidden w-[85rem] py-4 pl-8 rounded-[30px] font-urbanist flex justify-between items-center">
        <div className="text-[70px] text-[#333333] font-semibold">
          Our Services
        </div>
        <div className="bg-[#FFFFFF] flex items-center py-6 ">
          <p className="text-[24px] text-[#4C545E] w-[90%]">
            Luxury Interiors | Bespoke Furnishings | Intelligent Automation
          </p>
        </div>
      </div>

      <div>
        <img
          src="/assets/images/our-services/service-img.png"
          className="w-[85rem]"
          alt="Our Services"
        />
      </div>

      <div className="flex flex-col gap-[6rem] mx-auto px-4 py-10">
        {services.map((service, index) => (
          <Link
            href={`/services/${service.title.replaceAll(" ", "-").toLowerCase()}`}
            key={index}
            className={`flex flex-col md:flex-row max-w-[85rem] max-h-[25rem] bg-[#f9f9f9] rounded-3xl overflow-hidden shadow-sm ${
              service.imageFirst ? "md:flex-row-reverse gap-x-10" : ""
            }`}
          >
            <div className="flex-1 px-6 py-10 md:px-10 flex flex-col justify-center gap-8">
              <h3 className="text-2xl md:text-6xl font-semibold font-urbanist text-[#333333]">
                {service.title}
              </h3>
              <p className="text-[#666666] text-base md:text-2xl leading-relaxed w-[85%] font-extralight font-urbanist">
                {service.description}
              </p>
            </div>
            <div className="flex-1">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default page;
