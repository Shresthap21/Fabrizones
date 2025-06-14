import React from "react";

const clientLogos = [
  "/assets/images/clients/client-1.png",
  "/assets/images/clients/client-2.png",
  "/assets/images/clients/client-3.png",
  "/assets/images/clients/client-4.png",
  "/assets/images/clients/client-5.png",
];

const Client = () => {
  return (
    <div className="mx-auto text-center overflow-hidden space-y-8">
      <div className="font-cannu text-[#121C2A] text-[66px] mt-[6rem]">
        Esteemed Clientele
      </div>
      <p className="font-urbanist text-[#666666] text-[29px] w-[70%] mx-auto text-center">
        We are proud partners to some of the most recognized names across
        industries, consistently surpassing expectations with elegance and
        efficiency.
      </p>

      <div className="relative w-full overflow-hidden">
        <div className="flex animate-scroll whitespace-nowrap gap-x-4">
          {clientLogos.concat(clientLogos).map((logo, idx) => (
            <img  key={idx}
              src={logo}
              alt={`Client ${idx + 1}`}
              className="object-contain shadow-[0_4px_250px_#0000001A]" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Client;
