import React from 'react';
import { motion } from 'framer-motion';

const AnimatedText = () => {
  const text = "Since 2022, we have been creating projects that remain relevant today, tomorrow, and for decades to come";
  const words = text.split(' ');

  return (
    <div className="relative text-[36px]/[44px] text-[#F5F4F6] max-w-[830px] px-[40px] md:px-[60px] container mx-auto text-center mt-[140px] mx-[20px] py-[60px]">
      <motion.div
        className="text-[32px] z-40 relative font-medium max-w-4xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 3 }} 
        viewport={{ once: true }} 
      >
        {words.map((word, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, x: -20, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{
              delay: index * 0.12,
              type: "spring",
              stiffness: 100,
              damping: 25,
            }}
            viewport={{ once: true }}
            style={{ margin: '0 4px', display: 'inline-block' }}
          >
            {word}
          </motion.span>
        ))}
      </motion.div>
      
      {/* Decorative Images */}
      <img className='absolute size-[100px] top-[-50px] right-[-80px] hidden xl:block' src="https://framerusercontent.com/images/nVwfJfYTJH4GZwm9UXcHF6NVsr4.png?scale-down-to=512" alt="" />
      <img className='absolute top-[40px] z-30 left-[0px] size-[64px]' src="https://framerusercontent.com/images/Gy6oyLvyryjSizdl2va3wLbiYjc.png?scale-down-to=512" alt="" />
    </div>
  );
};

export default AnimatedText;
