import React from "react";
import Link from "next/link";


const productData = [
  { src: "/assets/compressed/our-products/pro1.jpg", label: "Curtains and Drapery", slug: "curtains-and-drapery" },
  { src: "/assets/compressed/our-products/pro2.jpg", label: "Blinds", slug: "blinds" },
  { src: "/assets/compressed/our-products/pro3.jpg", label: "Upholstery", slug: "upholstery" },
  { src: "/assets/compressed/our-products/pro4.jpg", label: "Wallpaper", slug: "wall-treatment" },
  { src: "/assets/compressed/our-products/pro5.jpg", label: "Fabrics", slug: "fabrics" },
  { src: "/assets/compressed/our-products/pro7.png", label: "Outdoor Shades", slug: "outdoor-shades" },
  { src: "/assets/compressed/our-products/pro6.jpg", label: "Flooring", slug: "flooring" },
  { src: "/assets/compressed/our-products/pro8.jpg", label: "Automation", slug: "home-automation" },
];



const OurProducts = () => {
  return (
    <>
      <div className="font-cannu text-6xl mt-[6rem] text-center">
        Our Products
      </div>
      <div className="flex flex-wrap justify-center gap-y-12 gap-x-6 mt-[6rem]">
        {productData.map((product, index) => (
          <Link href={`/products/${product.slug}`} key={index}>
            <div
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
          </Link>
        ))}
      </div>
    </>
  );
};


export default OurProducts;
