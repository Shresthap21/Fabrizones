import React from 'react';

const services = [
  {
    img: '/assets/images/our-services/card1.jpg',
    icon: '/assets/images/our-services/icon1.png',
    title: ['Warehouse', 'Facility'],
    desc: 'We manage, store, and dispatch materials with efficiency to support seamless project execution.',
    hoverDesc:
      'Our organized warehouse operations ensure efficient material storage, tracking, labeling, and dispatch — supporting seamless execution from procurement to final delivery.',
  },
  {
    img: '/assets/images/our-services/card2.jpg',
    icon: '/assets/images/our-services/icon2.png',
    title: ['Project', 'Estimation'],
    desc: 'We provide accurate estimates and proposals that balance quality, materials, and budget perfectly.',
    hoverDesc:
      'We provide comprehensive cost breakdowns and accurate projections, helping you make informed decisions while maintaining high quality and aesthetic goals.',
  },
  {
    img: '/assets/images/our-services/card3.jpg',
    icon: '/assets/images/our-services/icon3.png',
    title: ['Design & Concept', 'Development'],
    desc: 'We turn your ideas into real, practical, and elegant design blueprints.',
    hoverDesc:
      'We transform your initial ideas into detailed and feasible design blueprints that align with your vision and functional needs. Our expert design team ensures that every detail is carefully considered, combining creativity and practicality for seamless execution.',
  },
  {
    img: '/assets/images/our-services/card4.jpg',
    icon: '/assets/images/our-services/icon4.png',
    title: ['Market', 'Research'],
    desc: 'We study market trends to guide practical and elegant design decisions for every unique project.',
    hoverDesc:
      'We study global trends, customer behavior, and material innovations to craft designs that are not only relevant and elegant but also future-focused and market-ready.',
  },
  {
    img: '/assets/images/our-services/card5.jpg',
    icon: '/assets/images/our-services/icon5.png',
    title: ['Value', 'Engineering'],
    desc: 'We optimize your design’s value using smart materials and cost-effective production techniques.',
    hoverDesc:
      'We evaluate form, function, and cost to enhance product value — selecting the right materials and methods to maintain design integrity within your budget.',
  },
  {
    img: '/assets/images/our-services/card6.jpg',
    icon: '/assets/images/our-services/icon6.png',
    title: ['Inhouse', 'Fabrication'],
    desc: 'We study market trends to guide practical and elegant design decisions for every unique project.',
    hoverDesc:
      'Our state-of-the-art facility and skilled craftsmen bring each design to life with unmatched precision, blending technology and hand-finished detailing for exceptional results.',
  },
];

const OurServices = () => {
  return (
    <>
      <div className="font-cannu text-6xl mt-[12rem] text-center">Our Services</div>
      <div className="mt-[6rem] flex flex-wrap gap-8 justify-center font-urbanist px-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative group w-[417px] h-[36rem] text-center rounded-3xl overflow-hidden shadow-figma-card bg-[#F9F9FB] transition-all duration-500"
          >
            <img
              src={service.img}
              className="rounded-t-3xl w-full h-[250px] object-cover"
              alt=""
            />

            <div className="mx-auto bg-[#896256] rounded-full w-fit p-8 relative -top-16 transition-all duration-500 group-hover:-translate-y-[8rem] group-hover:scale-150 z-10">
              <img src={service.icon} alt="" className="w-12 h-12 object-contain" />
            </div>

            <div className="space-y-5 px-6 transition-opacity duration-300 group-hover:opacity-0">
              <div className="font-semibold mx-auto w-[65%] text-3xl text-[#333333] mt-[-2rem]">
                <>
                  {service.title[0]}
                  <br />
                  {service.title[1]}
                </>
              </div>
              <p className="font-extralight text-[#666666] text-[19px]">
                {service.desc}
              </p>
            </div>

            {/* Hover Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-[#11111F] text-white flex flex-col items-center justify-end px-9 pt-[10rem] pb-14 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-full group-hover:translate-y-0 rounded-3xl overflow-y-auto">
              <h3 className="w-[70%] text-3xl py-2 mx-auto font-semibold">
                <>
                  {service.title[0]}
                  <br />
                  {service.title[1]}
                </>
              </h3>
              <p className="mt-2 text-[22px] font-extralight leading-[1.3]">
                {service.hoverDesc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default OurServices;
