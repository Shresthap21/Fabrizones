import React from "react";
import Link from "next/link";
import { LuBlinds, LuBrickWall, LuArmchair  } from "react-icons/lu";
import { FiLayout } from "react-icons/fi";

const products = [
  { label: "Curtains and Drapery", icon: <FiLayout/>},
  { label: "Blinds", icon: <LuBlinds />},
  { label: "Fabrics", icon: "/assets/images/our-products/icons-dropdown/fabrics-icon.jpg"},
  { label: "Upholstery", icon: <LuArmchair/>},
  { label: "Wall Treatment", icon: <LuBrickWall />},
  { label: "Flooring", icon: "/assets/images/our-products/icons-dropdown/flooring-icon.jpg"},
  { label: "Outdoor Shades", icon: "/assets/images/our-products/icons-dropdown/outdoor-icon.jpg"},
  { label: "Home Automation", icon: "/assets/images/our-products/icons-dropdown/home-icon.jpg"},
];

const ProductsDropdown = () => {
  return (
    
      <div className="relative mt-3 font-urbanist w-full px-[5.5rem] pb-14 ">
        <div className="w-full absolute top-0 left-0 h-[1px] bg-black  z-50"></div>
        <h2 className="mb-6 pt-5 font-semibold text-[#97A3B7] text-sm">OUR PRODUCTS</h2>

      <div className="flex  gap-x-12">
        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-[3rem] gap-y-2">
          {products.map((item, idx) => (
  <Link
    key={idx}
    href={`/products/${item.label.replaceAll(" ", "-").toLowerCase()}`}
    className="flex items-center gap-3 py-5"
  >
    <span className="text-2xl text-black">
      {typeof item.icon === "string" ? (
        <img src={item.icon} alt={item.label} className="w-6 h-6 object-contain" />
      ) : (
        item.icon
      )}
    </span>
    <span className="text-[#111B29] text-base font-semibold">
      {item.label}
    </span>
  </Link>
))}

        </div>

        {/* Insight Box */}
        <div className="absolute right-0 top-0 bg-[#FAFBFD] min-h-full p-6 pr-20 ">
          <p className="text-gray-400 text-sm uppercase font-semibold mb-2">Insight</p>
          <img src="/assets/images/our-products/Illustration.jpg" alt="Insight" className="mb-4 rounded-[15px]" />
          <p className="text-base w-[80%] text-[#111B29] font-medium">
            Choosing the Right Drapes for Your Space
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductsDropdown;
