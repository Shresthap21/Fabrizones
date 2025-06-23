import { serviceData } from "@/data/services";
import Button from "@/components/Button";

export default function Page({ params }) {
  const { slug } = params;
  const data = serviceData[slug];

  if (!data) return <div>Service not found</div>;

  return (
    <div className="pt-[12rem] mx-[6rem] flex flex-col items-center space-y-12">
      <div className="w-full flex flex-col gap-y-20">
        {/* Header */}
        <div className="bg-[#F9F9FB] w-full  py-4 pl-8 overflow-hidden rounded-[30px] font-urbanist flex justify-between items-center">
          <div className="text-[70px] font-semibold">{data.title}</div>
          <div className="bg-[#FFFFFF] flex items-center py-6">
            <p className="font-extralight text-[24px] text-[#666666] w-[80%]">{data.tagline}</p>
          </div>
        </div>

        {/* Main Section */}
        <div className="bg-[#F9F9FB] p-[3rem] w-full flex flex-col md:flex-row rounded-[30px] gap-x-10 overflow-hidden shadow-sm">
          <div className="md:w-1/2 w-full h-[28rem]">
            <img
              src={data.section.image}
              alt={data.title}
              className="w-[35rem] h-full object-cover rounded-2xl"
            />
          </div>

          <div className="font-urbanist w-1/2 flex flex-col justify-between gap-y-5">
            <div className="flex flex-col gap-y-5">
              <p className="font-semibold text-[50px] leading-tight">{data.section.heading}</p>
              <p className="text-[23px] leading-[1.3] font-extralight text-[#666666]">
                {data.section.description}
              </p>
            </div>

            <div className="flex gap-8 font-urbanist">
              <Button isHomePage={false} size="default" />
              <button className="border border-[#666666] text-[#666666] px-14 py-2 text-lg rounded-md">
                Explore Services
              </button>
            </div>
          </div>
        </div>

        {/* Other Services Section */}
        <div className="flex flex-col gap-y-16">
          <h1 className="font-cannu text-[#121C2A] text-6xl">View other Services</h1>

          <div className="flex flex-wrap gap-16 justify-start font-urbanist">
            {data.otherServices.map((service, index) => (
              <div
                key={index}
                className="relative group w-[400px] min-h-[36rem] text-center rounded-3xl overflow-hidden shadow-figma-card bg-[#F9F9FB] transition-all duration-500"
              >
                <img
                  src={service.image}
                  className="rounded-t-3xl w-full h-[250px] object-cover"
                  alt=""
                />

                <div className="mx-auto bg-[#896256] rounded-full w-fit p-8 relative -top-16 transition-all duration-500 group-hover:-translate-y-[8rem] group-hover:scale-150 z-10">
                  <img
                    src={service.icon}
                    alt=""
                    className="w-12 h-12 object-contain"
                  />
                </div>

                <div className="space-y-5 px-6 transition-opacity duration-300 group-hover:opacity-0">
                  <div className="font-semibold mx-auto w-[50%] text-[27px] text-[#333333] mt-[-2rem] leading-snug">
                    {service.title}
                  </div>
                  <p className="font-extralight text-[#666666] text-[19px]">
                    {service.description}
                  </p>
                </div>

                <div className="absolute top-0 left-0 w-full h-full bg-[#11111F] text-white flex flex-col items-center justify-end px-8 pt-[10rem] pb-14 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-full group-hover:translate-y-0 rounded-3xl overflow-y-auto">
                  <h3 className="text-[27px] mx-auto font-semibold leading-tight w-[70%] text-center">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-[22px] font-extralight leading-[1.3] w-[85%] text-center">
                    {service.hoverDesc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
