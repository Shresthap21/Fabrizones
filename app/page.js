import Client from "@/components/Client";
import OurProducts from "@/components/OurProducts";
import OurServices from "@/components/OurServices";
import Button from "@/components/Button";
export default function Home() {
  return (
    <div>
      <div className="relative w-full h-screen overflow-hidden">
        <div className="h-screen w-full absolute top-0 bg-black bg-opacity-20 z-[2]"></div>
        <video
          src="/assets/videos/landing.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        />

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
          <h1 className="font-cannu drop-shadow-lg font-[550] text-[88px] leading-tight mt-10">
            Elevate
            <br />
            Your Realm
          </h1>

          <div className="bg-[#F9F9FB] shadow-md flex gap-x-[8rem] px-6 py-6 rounded-xl mt-[6rem] items-center">
            <div className="font-cannu  text-[#121C2A] text-6xl text-left leading-[1.1]">
              Elevate
              <br />
              Your Realm
            </div>
            <div className="text-right font-urbanist">
              <div className="space-y-1">
                <div className="text-lg text-[#4C545E] font-medium">
                  Luxury Interiors | Bespoke Furnishings | Intelligent
                  Automation
                </div>
                <div className="text-lg text-[#666666] font-light">
                  With Innovation, Craftsmanship & Timeless Design
                </div>
              </div>
              <div className="flex gap-4 justify-end mt-6 font-urbanist">
                <Button isHomePage={false} size="small" />
                <button className="border border-[#666666] text-[#666666] px-9 py-2 text-sm">
                  Explore Services
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <section className="bg-white font-urbanist  rounded-[32px] shadow-md w-[95%] mx-auto mt-24 z-20 relative py-2 flex flex-wrap items-end gap-x-[5rem] text-center">
        {/* Item 1 */}
        <div className="flex-1 min-w-[150px] flex flex-col items-center">
          <h3 className="text-[104px] font-bold text-gray-900">20+</h3>
          <p className="text-3xl text-[#4A4A4A] min-h-[80px] font-light">
            Years of Interior
            <br />
            Experience
          </p>
        </div>

        {/* Item 2 */}
        <div className="flex-1 min-w-[150px] flex flex-col items-center">
          <h3 className="text-[104px] font-bold text-[#333333]">32M</h3>
          <p className="text-3xl text-[#4A4A4A] min-h-[80px] font-light">
            Active users
          </p>
        </div>

        {/* Item 3 */}
        <div className="flex-1 min-w-[150px] flex flex-col items-center">
          <h3 className="text-[104px] font-bold text-[#333333]">18+</h3>
          <p className="text-3xl text-[#4A4A4A] min-h-[80px] font-light">
            Countries Served
          </p>
        </div>

        {/* Item 4 */}
        <div className="flex-1 min-w-[150px] flex flex-col items-center">
          <h3 className="text-[104px] font-bold text-[#333333]">240%</h3>
          <p className="text-3xl text-[#4A4A4A] min-h-[80px] font-light">
            Company growth
          </p>
        </div>
      </section>

      <section className="space-y-[5rem] mt-[5rem] text-center">
        <div className="font-cannu text-[74px] text-[#111B29]">
          Tailored Luxury, Designed for Your Space
        </div>
        <div className="text-[#666666] text-[29px] mx-auto font-urbanist w-[85%] text-center">
          Experience the best in custom drapes, upholstery, and home
          automation—where every detail enhances your home with elegance and
          every design creates a seamless blend of comfort and style.
        </div>
      </section>
      <section className="flex gap-6 justify-center px-4 mt-[10rem]">
        <div>
          <img
            src="/assets/compressed/img-1.jpg"
            className="w-[300px] h-[480px] border-[7px] border-[#896256]"
          />
        </div>
        <div>
          <img
            src="/assets/compressed/img-2.jpg"
            className="w-[300px] h-[480px] border-[7px] border-[#896256] relative top-[8rem]"
          />
        </div>
        <div>
          <img
            src="/assets/compressed/img-3.jpg"
            className="w-[300px] h-[480px] border-[7px] border-[#896256]"
          />
        </div>
        <div>
          <img
            src="/assets/compressed/img-4.jpg"
            className="w-[300px] h-[480px] border-[7px] border-[#896256] relative top-[8rem]"
          />
        </div>
        <div>
          <img
            src="/assets/compressed/img-5.jpg"
            className="w-[300px] h-[480px] border-[7px] border-[#896256]"
          />
        </div>
      </section>

      <OurServices />
      <OurProducts />
      <Client />
    </div>
  );
}
