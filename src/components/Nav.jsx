import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Logo from '../assets/logo.png';
export const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Project', href: '/project' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
  {name: 'Terms of Use', href: '/terms-of-use'},
  {name: 'Privacy Policy', href: '/privacypolicy'},
  {name: 'Licensing', href: 'licensing'},
];

export const Nav = () => {
  
  const [size, setSize] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const changeWidth = () => {
      if (window.scrollY >= 90) {
        setSize(true);
      } else {
        setSize(false);
      }
    };
    window.addEventListener('scroll', changeWidth);


    return () => {
      window.removeEventListener('scroll', changeWidth);
    };
  }, []);

  return (
    <div
      className={`transition-all duration-500 ease-in-out sticky top-[20px] text-white backdrop-blur-xs z-60 container mx-auto max-w-[390px] ${
        size ? 'lg:max-w-[400px]' : 'lg:max-w-[1150px]'
      } flex justify-between h-auto items-center rounded-xl pl-[5px] pr-[20px] mb-[50px]`}
    >
      {/* Logo */}
      <a href="/"><img src={Logo} className="size-[51.5px]" alt="Logo" /></a>

      {/* Navigation Links */}
      <div className={`flex  p-[10px] ${size?'bg-[#1A1A1A]':''} rounded-xl gap-5 lg:gap-8 justify-around w-auto`}>
        {navItems.slice(0, 4).map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="group relative text-white text-md font-medium"
          >
            {item.name}
            {/* Animated Dot */}

            <span className={`absolute rounded-md left-0 bottom-[-6px] size-[4px] bg-green-500 transition-all duration-500 ease-out ${location.pathname === item.href ? 'opacity-100 left-1/2' : 'opacity-0 group-hover:opacity-100 group-hover:left-1/2 group-hover:translate-x-[-50%]'}`}  ></span>

          </a>
        ))}
      </div>
    </div>
  );
};