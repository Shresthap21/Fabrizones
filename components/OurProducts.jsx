import React from "react";

const productData = [
  { src: "/assets/compressed/our-products/pro1.jpg", label: "Curtains and Drapery" },
  { src: "/assets/compressed/our-products/pro2.jpg", label: "Blinds" },
  { src: "/assets/compressed/our-products/pro3.jpg", label: "Upholstery" },
  { src: "/assets/compressed/our-products/pro4.jpg", label: "Wallpaper" },
  { src: "/assets/compressed/our-products/pro5.jpg", label: "Fabrics" },
  { src: "/assets/compressed/our-products/pro7.png", label: "Outdoor Shades" },
  { src: "/assets/compressed/our-products/pro6.jpg", label: "Flooring" },
  { src: "/assets/compressed/our-products/pro8.jpg", label: "Automation" },
];

const OurProducts = () => {
  return (
    <>
      <div className="font-cannu text-6xl mt-[6rem] text-center">
        Our Products
      </div>
      <div className="flex flex-wrap justify-center gap-y-12 gap-x-6 mt-[6rem]">
        {productData.map((product, index) => (
          <div
            key={index}
            className="group w-[428px] rounded-2xl overflow-hidden bg-[#F9F9FB] shadow-figma-card transform transition-all duration-500 hover:-translate-y-4 hover:bg-[#11111F]"
          >
            <img
              src={product.src}
              alt={product.label}
              className="w-full h-[273px] object-cover transition-all duration-500"
            />
            <div className="px-8 py-6 text-center font-urbanist text-2xl font-semibold text-[#000000] transition-colors duration-500 group-hover:text-white">
              {product.label}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default OurProducts;
