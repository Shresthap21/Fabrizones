import React from 'react'

const page = () => {
  return (
    <section className="bg-[#F9F9FB] mt-[14rem] rounded-[30px] shadow-md p-12 max-w-[85rem] mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-20">
      <div className="text-[#333333] text-4xl md:text-7xl font-semibold md:leading-[1.1] font-urbanist">
        Let’s Turn Spaces <br /> into Statements
      </div>

      <div className="flex flex-col text-left gap-6">
        <p className="text-[#666666] text-[27px] font-extralight font-urbanist">
          Looking to elevate your interiors? Add comfort, <br />
          style, or function?
        </p>
        <p className="text-[#000000] text-4xl font-extralight font-urbanist">Let’s talk.</p>
      </div>
    </section>
  )
}

export default page