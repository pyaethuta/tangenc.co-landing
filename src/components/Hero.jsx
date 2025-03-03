
import BlockA from '../assets/Tangenc_land_assets/Block A.avif'
import BlockB from '../assets/Tangenc_land_assets/Block B.avif'
import BlockC from '../assets/Tangenc_land_assets/Block C.avif'
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <div className="container mx-auto mt-[70px]">
      <div className="relative mx-[10px] md:mx-auto bg-[#1A1A1A] flex gap-2 rounded-[32px] h-auto  pt-[90px] md:pt-[160px] px-[24px] md:px-[64px] pb-[35px] md:pb-[64px] max-w-[1150px] ">
        <div className='z-50' data-aos="fade-up">
          <h1 className=" h1 font-semibold  max-w-[550px] lg:max-w-[620px] z-40 mb-[10px]">
            Providing quality digital solutions for your business.
          </h1>
          <p className="text-[16px]/[28px]  max-w-[560px] text-[#A7A7A7]">
            At Tangenc, we blend the idea and technology to craft coherent digital experiences that align effortlessly with your business goals.
          </p>
        </div>
        <div>
          <motion.img animate={{
                      y: [0, -15, 0], 
                    }}
                    transition={{
                      duration:4,
                      repeat: Infinity, 
                      ease: "easeInOut",
                    }}
                     className='absolute size-[306px] bottom-[-100px] right-[120px] hidden lg:block' src={BlockA} alt="" />
          <img className='absolute size-[97px] lg:size-[177px] top-[30px] right-[0px] md:right-[20px] lg:right-[150px] cursor-pointer' src={BlockB} alt="" />
          <img className='absolute right-[0px]  md:size-[150px] lg:size-[200px] md:right-[-35px] lg:right-[-34px] bottom-[140px] lg:bottom-[100px] hidden md:block cursor-pointer' src={BlockC} alt="" />
        </div>
      </div>
    </div>
  );
};
