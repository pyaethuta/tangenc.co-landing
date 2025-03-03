import { motion } from 'framer-motion'
import {marqueeItems} from "../constant"


const Marquee = () => {
   

  return (

    
        <div className="container mx-auto text-white overflow-x-hidden my-20 max-w-[1150px] ">
            <motion.div 
                whileHover={{  x: '-100%',transition: {  duration: 25 } }}
                initial={{x: '0'}}
                animate={{x: '-100%'}}
                transition={{duration: 10,repeat: Infinity, ease: "linear"}}
                className='flex MyGradient'>
                <motion.div className="flex flex-shrink-0 ">
                    {marqueeItems.map((item,index)=>{
                        return (
                            <img src={item} key={index} className='mx-4 '/>
                        )
                    })}

                </motion.div>

                <motion.div className="flex flex-shrink-0">
                    {marqueeItems.map((item,index)=>{
                        return (
                            <img src={item} key={index} className='mx-4'/>
                        )
                    })}

                </motion.div>
            </motion.div>
        </div>
    
  )
}

export default Marquee