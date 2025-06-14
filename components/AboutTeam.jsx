import React from 'react'

const AboutTeam = () => {
  return (
    
   <section className='px-12 py-20 space-y-16 bg-[#F7F7F9] font-urbanist '>
      {/* Header Section */}
      <div className='gap-8'>
        <div>
          <p className='text-sm tracking-widest text-[#8B00C9] font-medium uppercase'>Our Team</p>

        <div className='flex items-center justify-between'>

          <div className='text-4xl font-bold mt-2 text-[#333333] leading-snug'>
            The Creative Minds <br /> Behind Fabrizones
          </div>

        <div className='max-w-xl text-[17px] text-[#666666]'>
          Every piece at Fabrizones is brought to life by a team of designers, artisans, and visionaries.
          From mood boards to final stitching, their collective passion shapes everything we create.
        </div>
        </div>
        </div>
      </div>

      {/* Team Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-[4rem] gap-y-[4rem]'>
        {/* Card 1 */}
        <div className='bg-[#F1F1F1] rounded-[20px] overflow-hidden text-center'>
          <img src='/assets/images/aboutus/person.png' alt='Team Member' className='w-full object-cover' />
          <div className='py-4 bg-[#EBEBEB]'>
            <p className='font-semibold text-[18px]'>Name Surname</p>
            <p className='text-sm text-[#555]'>Occupation details</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className='bg-[#F1F1F1] rounded-[20px] overflow-hidden text-center'>
          <img src='/assets/images/aboutus/person.png' alt='Team Member' className='w-full object-cover' />
          <div className='py-4 bg-[#EBEBEB]'>
            <p className='font-semibold text-[18px]'>Name Surname</p>
            <p className='text-sm text-[#555]'>Occupation details</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className='bg-[#F1F1F1] rounded-[20px] overflow-hidden text-center'>
          <img src='/assets/images/aboutus/person.png' alt='Team Member' className='w-full object-cover' />
          <div className='py-4 bg-[#EBEBEB]'>
            <p className='font-semibold text-[18px]'>Name Surname</p>
            <p className='text-sm text-[#555]'>Occupation details</p>
          </div>
        </div>

        {/* Card 4 */}
        <div className='bg-[#F1F1F1] rounded-[20px] overflow-hidden text-center'>
          <img src='/assets/images/aboutus/person.png' alt='Team Member' className='w-full object-cover' />
          <div className='py-4 bg-[#EBEBEB]'>
            <p className='font-semibold text-[18px]'>Name Surname</p>
            <p className='text-sm text-[#555]'>Occupation details</p>
          </div>
        </div>

        {/* Card 5 */}
        <div className='bg-[#F1F1F1] rounded-[20px] overflow-hidden text-center'>
          <img src='/assets/images/aboutus/person.png' alt='Team Member' className='w-full object-cover' />
          <div className='py-4 bg-[#EBEBEB]'>
            <p className='font-semibold text-[18px]'>Name Surname</p>
            <p className='text-sm text-[#555]'>Occupation details</p>
          </div>
        </div>

        {/* Card 6 */}
        <div className='bg-[#F1F1F1] rounded-[20px] overflow-hidden text-center'>
          <img src='/assets/images/aboutus/person.png' alt='Team Member' className='w-full object-cover' />
          <div className='py-4 bg-[#EBEBEB]'>
            <p className='font-semibold text-[18px]'>Name Surname</p>
            <p className='text-sm text-[#555]'>Occupation details</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutTeam