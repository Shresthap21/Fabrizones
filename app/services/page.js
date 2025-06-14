import React from "react";

const page = () => {
  return (
    <div className="pt-[12rem] flex flex-col items-center space-y-14">
      <div className="bg-[#F9F9FB] w-[85rem] py-4 px-8 rounded-[30px] font-urbanist flex justify-between items-center">
        <div className="text-[70px] text-[#333333] font-semibold">
          Our Services
        </div>
        <div className="bg-[#FFFFFF] flex items-center py-6">
          <p className="text-[24px] text-[#4C545E] w-[90%]">
            Luxury Interiors | Bespoke Furnishings | Intelligent Automation
          </p>
        </div>
      </div>

      <div>
        <img
          src="/assets/images/our-services/service-img.png"
          className="w-[85rem]"
        />
      </div>

      <div className="flex flex-col gap-[6rem] mx-auto px-4 py-10">
        {/* service 1 */}
        <div className="flex flex-col md:flex-row max-w-[85rem] max-h-[25rem] bg-[#f9f9f9] rounded-3xl overflow-hidden shadow-sm">
          <div className="flex-1 px-6 py-10 md:px-10 flex flex-col justify-center gap-8">
            <h3 className="text-2xl md:text-6xl font-semibold font-urbanist text-[#333333]">
              Market Research
            </h3>
            <p className="text-[#666666] text-base md:text-2xl leading-relaxed w-[85%] font-extralight font-urbanist">
              We analyze trends and customer preferences to design meaningful,
              relevant, and forward-looking interior solutions that last.
            </p>
          </div>
          <div className="flex-1">
            <img
              src="/assets/images/our-services/card4.jpg"
              alt="Market Research"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* service 2 */}
        <div className="flex flex-col md:flex-row max-w-[85rem] max-h-[25rem] bg-[#f9f9f9] gap-x-10 rounded-3xl overflow-hidden shadow-sm">
          <div className="flex-1">
            <img
              src="/assets/images/our-services/card7.png"
              alt="Market Research"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 px-6 py-10 md:px-10 flex flex-col justify-center gap-8">
            <h3 className="text-2xl md:text-6xl font-semibold font-urbanist text-[#333333]">
              Design Development
            </h3>
            <p className="text-[#666666] text-base md:text-2xl leading-relaxed w-[85%] font-extralight font-urbanist">
              We translate ideas into refined, executable designs tailored to
              your needs with elegance and practicality in mind.
            </p>
          </div>
        </div>

        {/* service 3 */}
        <div className="flex flex-col md:flex-row max-w-[85rem] max-h-[25rem] bg-[#f9f9f9] rounded-3xl overflow-hidden shadow-sm">
          <div className="flex-1 px-6 py-10 md:px-10 flex flex-col justify-center gap-8">
            <h3 className="text-2xl md:text-6xl font-semibold font-urbanist text-[#333333]">
              Inhouse Fabrication
            </h3>
            <p className="text-[#666666] text-base md:text-2xl leading-relaxed w-[85%] font-extralight font-urbanist">
              Our inhouse facility produces high-quality, custom furnishings using advanced machinery and skilled hands.
            </p>
          </div>
          <div className="flex-1">
            <img
              src="/assets/images/our-services/card6.jpg"
              alt="Market Research"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* service 4 */}
         <div className="flex flex-col md:flex-row max-w-[85rem] max-h-[25rem] bg-[#f9f9f9] gap-x-10 rounded-3xl overflow-hidden shadow-sm">
          <div className="flex-1">
            <img
              src="/assets/images/our-services/card1.jpg"
              alt="Market Research"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 px-6 py-10 md:px-10 flex flex-col justify-center gap-8">
            <h3 className="text-2xl md:text-6xl font-semibold font-urbanist text-[#333333]">
              Warehouse Facility
            </h3>
            <p className="text-[#666666] text-base md:text-2xl leading-relaxed w-[85%] font-extralight font-urbanist">
              Efficient inventory management and precise packaging for timely delivery and smooth operations.
            </p>
          </div>
        </div>

        {/* service 5 */}
        <div className="flex flex-col md:flex-row max-w-[85rem] max-h-[25rem] bg-[#f9f9f9] rounded-3xl overflow-hidden shadow-sm">
          <div className="flex-1 px-6 py-10 md:px-10 flex flex-col justify-center gap-8">
            <h3 className="text-2xl md:text-6xl font-semibold font-urbanist text-[#333333]">
              Project Estimation
            </h3>
            <p className="text-[#666666] text-base md:text-2xl leading-relaxed w-[85%] font-extralight font-urbanist">
              Detailed cost analysis and material planning to ensure budget-friendly yet premium-quality proposals.
            </p>
          </div>
          <div className="flex-1">
            <img
              src="/assets/images/our-services/card2.jpg"
              alt="Market Research"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* service 6 */}
         <div className="flex flex-col md:flex-row max-w-[85rem] max-h-[25rem] bg-[#f9f9f9] gap-x-10 rounded-3xl overflow-hidden shadow-sm">
          <div className="flex-1">
            <img
              src="/assets/images/our-services/card5.jpg"
              alt="Market Research"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 px-6 py-10 md:px-10 flex flex-col justify-center gap-8">
            <h3 className="text-2xl md:text-6xl font-semibold font-urbanist text-[#333333]">
              Value Engineering
            </h3>
            <p className="text-[#666666] text-base md:text-2xl leading-relaxed w-[85%] font-extralight font-urbanist">
              We optimize form, function, and cost using innovative methods without compromising design integrity or quality.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
