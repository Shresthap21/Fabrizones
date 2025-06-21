import { serviceData } from "@/data/services";

export default function Page({ params }) {
  const { slug } = params;
  const data = serviceData[slug];

  if (!data) return <div>Service not found</div>;

  return (
    <div className="pt-[12rem] mx-[6rem] flex flex-col items-center space-y-12">
      <div className="w-full flex flex-col gap-y-20">
        {/* Header */}
        <div className="bg-[#F9F9FB] w-full py-4 px-8 rounded-[30px] font-urbanist flex justify-between items-center">
          <div className="text-[65px] font-semibold">{data.title}</div>
          <div className="bg-[#FFFFFF] flex items-center py-6">
            <p className="font-extralight text-[24px] text-[#666666]">{data.tagline}</p>
          </div>
        </div>

        {/* Main Image + Text Block */}
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

            <div className="flex gap-8">
              <a href={data.section.buttons[0].link}>
                <button className="bg-black text-white px-4 py-2 text-lg rounded-md">
                  {data.section.buttons[0].label}
                </button>
              </a>
              <a href={data.section.buttons[1].link}>
                <button className="border border-[#666666] text-[#666666] px-9 py-2 text-lg rounded-md">
                  {data.section.buttons[1].label}
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* Other Services */}
        <div className="flex flex-col gap-y-16">
          <h1 className="font-cannu text-[#121C2A] text-6xl">View other Services</h1>

          <div className="flex flex-wrap gap-16 justify-start">
            {data.otherServices.map((service, index) => (
              <div
                key={index}
                className="bg-[#F9F9FB] w-[400px] min-h-[500px] pb-16 text-center rounded-3xl font-urbanist shadow-figma-card"
              >
                <img
                  src={service.image}
                  className="rounded-t-3xl w-full h-[250px] object-cover"
                  alt=""
                />
                <div className="mx-auto bg-[#896256] rounded-full w-fit p-8 relative -top-16">
                  <img
                    src={service.icon}
                    alt=""
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <div className="space-y-5 -mt-10">
                  <div className="font-semibold mx-auto w-[50%] text-[27px] text-[#333333]">
                    {service.title}
                  </div>
                  <p className="font-extralight leading-[1.3] text-[#666666] text-[19px] w-[80%] mx-auto">
                    {service.description}
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
