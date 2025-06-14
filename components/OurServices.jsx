import React from 'react'

const OurServices = () => {
  return (
    <>
    <div className='font-cannu text-6xl mt-[12rem] text-center'>Our Services</div>
    <div className='mt-[6rem] text-center flex flex-wrap gap-8 justify-center'>
        {/* card1 */}
        <div className='bg-[#F9F9FB] w-[417px] h-[600px] text-center rounded-3xl font-urbanist shadow-figma-card '>
            <img src='/assets/images/our-services/card1.jpg' className='rounded-t-3xl w-full h-[250px] object-cover"'/>
            <div className='mx-auto bg-[#896256] rounded-full w-fit p-8 relative -top-16'>
                <img src="/assets/images/our-services/icon1.png" alt="" className='w-12 h-12 object-contain' />
            </div>
            <div className='space-y-5'>

            <div className='font-semibold text-[27px] text-[#333333] mt-[-2rem]'>Warehouse <br /> Facility</div>
            <p className='font-extralight text-[#666666] text-[19px] w-[70%] mx-auto'>We manage, store, and dispatch materials with efficiency to support seamless project execution.</p>
            </div>
        </div>

        {/* card2 */}
        <div className='bg-[#F9F9FB] w-[417px] h-[600px] text-center rounded-3xl font-urbanist shadow-figma-card'>
            <img src='/assets/images/our-services/card2.jpg' className='rounded-t-3xl w-full h-[250px] object-cover"'/>
            <div className='mx-auto bg-[#896256] rounded-full w-fit p-8 relative -top-16'>
                <img src="/assets/images/our-services/icon2.png" alt="" className='w-12 h-12 object-contain' />
            </div>
            <div className='space-y-5'>

            <div className='font-semibold text-[27px] text-[#333333] mt-[-2rem]'>Product <br /> Estimation</div>
            <p className='font-extralight text-[#666666] text-[19px] w-[80%] mx-auto'>We provide accurate estimates and proposals that balance quality, materials, and budget perfectly.</p>
            </div>
        </div>

        {/* card3 */}
        <div className='bg-[#F9F9FB] w-[417px] h-[600px] text-center rounded-3xl font-urbanist shadow-figma-card'>
            <img src='/assets/images/our-services/card3.jpg' className='rounded-t-3xl w-full h-[250px] object-cover"'/>
            <div className='mx-auto bg-[#896256] rounded-full w-fit p-8 relative -top-16'>
                <img src="/assets/images/our-services/icon3.png" alt="" className='w-12 h-12 object-contain' />
            </div>
            <div className='space-y-5'>

            <div className='font-semibold text-[27px] text-[#333333] mt-[-2rem]'>Design & Concept <br /> Development</div>
            <p className='font-extralight text-[#666666] text-[19px] w-[90%] mx-auto'>We turn your ideas into real, practical, and elegant design blueprints.</p>
            </div>
        </div>

        {/* card4 */}
        <div className='bg-[#F9F9FB] w-[417px] h-[600px] text-center rounded-3xl font-urbanist shadow-figma-card'>
            <img src='/assets/images/our-services/card4.jpg' className='rounded-t-3xl w-full h-[250px] object-cover"'/>
            <div className='mx-auto bg-[#896256] rounded-full w-fit p-8 relative -top-16'>
                <img src="/assets/images/our-services/icon4.png" alt="" className='w-12 h-12 object-contain' />
            </div>
            <div className='space-y-5'>

            <div className='font-semibold text-[27px] text-[#333333] mt-[-2rem]'>Market <br /> Research</div>
            <p className='font-extralight text-[#666666] text-[19px] w-[85%] mx-auto'>We study market trends to guide practical and elegant design decisions for every unique project.</p>
            </div>
        </div>

        {/* card5 */}
        <div className='bg-[#F9F9FB] w-[417px] h-[600px] text-center rounded-3xl  font-urbanist shadow-figma-card'>
            <img src='/assets/images/our-services/card5.jpg' className='rounded-t-3xl w-full h-[250px] object-cover"'/>
            <div className='mx-auto bg-[#896256] rounded-full w-fit p-8 relative -top-16'>
                <img src="/assets/images/our-services/icon5.png" alt="" className='w-12 h-12 object-contain' />
            </div>
            <div className='space-y-5'>

            <div className='font-semibold text-[27px] text-[#333333] mt-[-2rem]'>Value <br /> Engineering</div>
            <p className='font-extralight text-[#666666] text-[19px] w-[85%] mx-auto'>We optimize your design’s value using smart materials and cost-effective production techniques.</p>
            </div>
        </div>

        {/* card6 */}
        <div className='bg-[#F9F9FB] w-[417px] h-[600px] text-center rounded-3xl font-urbanist shadow-figma-card'>
            <img src='/assets/images/our-services/card6.jpg' className='rounded-t-3xl w-full h-[250px] object-cover"'/>
            <div className='mx-auto bg-[#896256] rounded-full w-fit p-8 relative -top-16'>
                <img src="/assets/images/our-services/icon6.png" alt="" className='w-12 h-12 object-contain' />
            </div>
            <div className='space-y-5'>

            <div className='font-semibold text-[27px] text-[#333333] mt-[-2rem]'>Inhouse <br /> Fabrication</div>
            <p className='font-extralight text-[#666666] text-[19px] w-[85%] mx-auto'>We study market trends to guide practical and elegant design decisions for every unique project.</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default OurServices