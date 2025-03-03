import Logo from '../assets/logo.png';
import { navItems } from './Nav';
import { CiLinkedin } from "react-icons/ci";
import { AiOutlineFacebook } from "react-icons/ai";

export const Footer = () => {
  return (
    <div className="bg-[#1a1a1a] px-[10px] -mx-[12px] md:-mx-[5px] mt-50">
      <div className="bg-[#1a1a1a] rounded-2xl">
        <div className="rounded-2xl 2xl:mx-[200px] max-w-[1650px] p-[20px] pt-[70px]">
          
          {/* First Part */}
          <div className="grid grid-cols-1 md:grid-cols-2 w-full space-y-4">
            <div className="space-y-5 mb-[50px] md:w-[400px]">
              <h4 className="font-medium text-[20px]/[26px] cursor-pointer" data-aos="fade-up">
                <a href="/">
                  <img src={Logo} className="inline-block size-[38px]" alt="Logo" /> Tenganc.co
                </a>
              </h4>
              <div className="max-w-[600px] text-white text-[16px]/[20px] md:text-[14px]/[20px]" data-aos="fade-up">
                Get in touch to find out more about digital experiences to effectively reach and engage customers and target audiences.
              </div>
            </div>

            {/* Navigation Links */}
            <div className="md:ml-[30px] 2xl:ml-[200px]">
              <p className="text-[14px] text-white/50 mb-[25px]">Company</p>
              <div className="space-x-[150px] flex">
                
                {/* First Column */}
                <div className="flex flex-col space-y-3">
                  {navItems.slice(0, 4).map((item, index) => (
                    <a key={index} href={item.href} className="text-[14px] cursor-pointer hover:text-[#03FFA3]">
                      {item.name}
                    </a>
                  ))}
                </div>

                {/* Second Column */}
                <div className="flex flex-col space-y-3">
                  {navItems.slice(4, 7).map((item, index) => (
                    <a key={index} href={item.href} className="text-[14px] cursor-pointer hover:text-[#03FFA3]">
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
 
          <hr className="h-px w-[100%] my-8 bg-gray-100/15 border-0" />

          {/* Second Part */}
          <div className="grid grid-cols-1 xl:grid-cols-2 w-full space-y-4 2xl:gap-[400px]">
            <p className=" text-[12px] md:text-[14px] text-white/50 md:max-w-[1000px]">&copy; 2025 Tangenc all rights reserved</p>
            <div className="flex space-x-6 xl:justify-self-end" >
              <a href="https://www.linkedin.com/company/tangenc/"><CiLinkedin className="text-white/50 size-[20px]"/></a>
              <a href="https://www.facebook.com/RALPHclth?mibextid=ZbWKwL"><AiOutlineFacebook className="text-white/50 size-[20px]" /></a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};


