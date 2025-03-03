import React from 'react'
import ShowcaseCard  from '../components/ShowcaseCard'
import { ShowcaseCards } from '../constant'
export const Project = () => {
  return (
 <div className='container mx-auto mt-[30px] md:mt-[70px]'>
      <div className='mx-[10px] md:mx-auto h-auto pt-[90px] md:pt-[70px] px-[24px] md:px-[14px] pb-[35px] md:pb-[64px] max-w-[1150px]'>
        <div className='flex flex-col md:flex-row justify-between pb-8'>
          <h1 className='text-2xl md:text-6xl text-[#03FFA3] font-bold mb-1'>Our recent projects</h1>
          <div className='w-[350px] text-sm md:text-lg leading-6 tracking-wide text-justify'>
            Discover our recent projects that we craft with hearts to enhance efficiency in day-to-day processes of our clients.
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-10'>
          {ShowcaseCards.map((card) => (
            <ShowcaseCard key={card.id} card={card} />
          ))}
        </div>
      </div>
    </div>
  )
}
