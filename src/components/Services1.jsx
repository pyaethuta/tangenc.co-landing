import React from 'react'
import { PiRocket } from "react-icons/pi";
import { GrGroup } from "react-icons/gr";
import { IoSettingsOutline } from "react-icons/io5";


export const Services1 = () => {
  const services =[
    {icon: <PiRocket/>, title: "Software Development", description: "We develop software. We develop software. We develop software. We develop software."},
    {icon: <GrGroup />, title: "Project Management", description: "We manage projects. We manage projects. We manage projects. We manage projects. "},
    {icon: <IoSettingsOutline />, title: "Technical Consultation", description: "We consult technical. We consult technical. We consult technical. We consult technical. "}
  ]
  return (
    <div className='container mx-auto mt-[50px] md:mt-[80px]'>
        <div className='text-center mx-auto mb-[120px]' data-aos="fade-up">
            <h1 className='h1 mb-[10px] font-medium text-[#03FFA3]'>Uncover Our Distinct Services</h1>
            <p className='p max-w-[550px] mx-auto'>Website construction entails the creation and design of online platforms, encompassing layout, content, and user interaction.</p>
        </div>

        <div className='container grid gap-[10px] grid-cols-1 sm:grid-cols-3 xl:space-x-4 space-y-5 xl:w-[1150px] mx-auto'>
          {
            services.map((service,index)=>(
              <div  key={index} data-aos="fade-up" className='bg-[#1A1A1A] w-auto  text-left rounded-[28px] h-auto md:h-[310px] space-y-3 p-[32px]'>
                <div className='text-[48px]  mb-7'>
                  {service.icon}
                </div>  
                <h3 className='h3'>
                  {service.title}
                </h3>
                <p className='text-[16px]'>{service.description}</p>
              </div>
            ))
          }

        </div>
        

    </div>
  )
}
