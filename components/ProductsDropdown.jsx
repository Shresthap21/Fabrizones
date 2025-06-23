import React from "react";
import Link from "next/link";
import { LuBlinds, LuBrickWall } from "react-icons/lu";
import { FiHome, FiGrid, FiSliders, FiMonitor, FiLayers, FiBox, FiSun, FiZap } from "react-icons/fi";

const products = [
  { label: "Curtains and Drapery", icon: <FiHome />},
  { label: "Blinds", icon: <LuBlinds />},
  { label: "Fabrics", icon: <FiSliders />},
  { label: "Upholstery", icon: <FiMonitor />},
  { label: "Wall Treatment", icon: <LuBrickWall />},
  { label: "Flooring", icon: <FiBox />},
  { label: "Outdoor Shades", icon: <FiSun />},
  { label: "Home Automation", icon: <FiZap />},
];

const ProductsDropdown = () => {
  return (
      <div className="font-urbanist w-full bg-white px-10 py-5">
        <h2 className="mb-6 font-semibold text-[#97A3B7] text-sm">OUR PRODUCTS</h2>

      <div className="flex gap-x-12">
        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-[3rem] gap-y-2">
          {products.map((item, idx) => (
            <Link
              key={idx}
              href={`/products/${item.label.replaceAll(" ", "-").toLowerCase()}`}
              className="flex items-center gap-3"
            >
              <span className="text-2xl text-black">{item.icon}</span>
              <span className="text-[#111B29] text-base font-semibold">
                {item.label}
              </span>
            </Link>
          ))}
        </div>

        {/* Insight Box */}
        <div className=" bg-[#FAFBFD] p-6 ">
          <p className="text-gray-400 text-sm uppercase font-semibold mb-2">Insight</p>
          <img src="/assets/insight-illustration.png" alt="Insight" className="mb-4 rounded-md" />
          <p className="text-sm text-gray-700 font-medium">
            Choosing the Right Drapes for Your Space
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductsDropdown;
