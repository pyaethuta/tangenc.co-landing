import React from 'react'
import Framer from '../assets/framer_icon.png'
import Figma from '../assets/figma_icon.png'
export const Services2 = () => {
  return (
    <div className='container mx-auto bg-[#1A1A1A] rounded-[28px] p-[40px] mt-[70px]'>
{/* {heading} */}
        <div className="flex md:flex-row flex-col gap-10 mx-auto container justify-center h-[160px] items-end mb-[40px] md:mb-[80px]">
                    <h2 data-aos="fade-up" className='font-medium text-[#03FFA3] w-full text-left  text-[26px]/[28px] md:text-[36px]/[44px] md:w-[300px] md:text-center lg:w-[600px] text-center md:text-left '>Professional Services That Showcase Our Expertise.</h2>
                    <p data-aos="fade-up" className=' text-left text-[14px] md:text-center md:text-[18px] w-full px-[5px] md:px-[0px] w-[390px] md:w-[320px] lg:w-[400px] text-center md:text-left'>From creative design to technical solutions, our services define industry excellence.</p>
        </div>

        <div className="space-y-5 xl:space-x-5 grid grid-cols-1 xl:grid-cols-3 mt-[20px] xl:w-[1150px] xl:mx-auto">
{/* {black box} */}
            <div data-aos="fade-up"  className='bg-black/100 rounded-2xl p-[20px]'>
                    <div className='h-[200px] '>
                        <img className='rounded-md h-full w-full object-cover ' src="https://framerusercontent.com/images/gNE42N9R0qGc9OHBFrF4nlkU7Uc.jpg"  />
                    </div>
                    <div className='space-y-4 mt-[20px]'>
                        <h5 className='h5'>Website or Mobile Application development</h5>
                        <p className='text-[14px]'>We develop beautiful and user-friendly interfaces for websites and mobile applications.</p>

                        <div>
                            <img src={Framer} className='z-40 relative inline-block  rounded-full w-[45px] h-[45px] border bg-white/100' alt="" />
                            <img src="https://framerusercontent.com/images/VSHgnszILd4LCOoi9D5kfP1f78.webp" className='z-50  -translate-x-4  inline-block rounded-full w-[45px] h-[45px] border bg-white/100 relative' alt="" />
                        </div>
                    </div>
            </div>
{/* {second column} */}
            <div className='space-y-4'>
                {/* {staff box} */}
                <div data-aos="fade-up" className='bg-[#EFEDFF]/100 rounded-2xl p-[20px] text-[#1A1A1A] space-y-4'>
                        <h5 className='h5'>A team of Technical Experts for Quality Solutions </h5>

                        <p className='text-[14px] '>Our technical experts promise to deliver quality digital products which would boost your business.</p>

                        <div>
                                <img src="https://framerusercontent.com/images/CPGgYEBeFy4gDXe5dDzh1qjQG1w.png" className='z-30 relative inline-block  rounded-full w-[46px] h-[46px] border border-white bg-[#E0AC90]/100' alt="" />
                                <img src="https://framerusercontent.com/images/qCpU7HJtiveCC9wTFuh7L4wc8YM.png" className='z-40  -translate-x-4  inline-block rounded-full w-[45px] h-[45px] border border-white bg-[#AFDCED]/100 relative' alt="" />
                                <img src="https://framerusercontent.com/images/Pm9TTOkN341IYtePLdPGmhG0E.png" className='z-50  -translate-x-8  inline-block rounded-full w-[45px] h-[45px] border border-white bg-[#C6D0F7]/100 relative' alt="" />
                        </div>       
                </div>
    {/* {light blue box} */}
                <div data-aos="fade-up" className='bg-[#E1F5FE]/100 rounded-2xl p-[20px] sm:pb-[0px] md:pb-[10px] xl:pb-[0px]'>
                        
                        <div className='space-y-4 mb-[20px] text-[#1A1A1A]'>
                            <h5 className='h5'>Reliable after sale services</h5>
                            <p className='text-[14px]'>Not only software development, Tangenc will provide services to maintain your digital solutions.</p>
                        </div>
                        <div className='h-[200px] sm:block md:hidden xl:block '>
                            <img className='h-full w-full rounded-md object-cover ' src="https://framerusercontent.com/images/Lk8bryD99CmBUZfyNXCaiSGNA.jpg?scale-down-to=512"  />
                        </div>
                </div>
            </div>
{/* {third column} */}
            <div className="space-y-4">
                {/* {last one's one box} */}
                <div data-aos="fade-up" className='text-[#1A1A1A] bg-[#F5F4F6]/100 rounded-2xl p-[20px]'>
                        <div className='h-[200px] '>
                            <img className='rounded-md h-full w-full object-cover ' src="https://framerusercontent.com/images/AqfUcDzKyJ9nuBlLjaa550Rzo.png?scale-down-to=512"  />
                        </div>
                        <div className='space-y-4 mt-[20px]'>
                            <h5 className='h5'>UX & UI Design</h5>
                            <p className='text-[14px]'>Clean and User-friendly UI/UX designs define our standard.</p>

                            <div>
                                <img src={Framer} className='z-40 relative inline-block  rounded-full w-[45px] h-[45px] border bg-white/100' alt="" />
                                <img src={Figma} className='z-50  -translate-x-4  inline-block rounded-full w-[45px] h-[45px] border bg-white/100 relative' alt="" />
                            </div>
                        </div>
                </div>
    {/* {last one's two box} */}
                <div data-aos="fade-up" className='bg-[#F5F4F6]/100 rounded-2xl p-[20px] text-[#1A1A1A] space-y-4'>
                        <h5 className='h5'>Use-centric Approach</h5>

                        <p className='text-[14px] '>We listen your problems and focus to solve them. We build not only sotwares but also solutions for you.</p>
        
                </div>
            </div>

        </div>

    </div>
  )
}
