
import AnimatedText from '../components/AnimatedText'

import { Hero } from '../components/Hero'
import { Services1 } from '../components/Services1'
import { Services2 } from '../components/Services2'
import Testimonials from '../components/Testimonials'
import Showcase from '../components/Showcase'


export const Home = () => {
  return (
    <div >
        <Hero/>
        <Services1/>
        <Services2/>
        <AnimatedText/>
        <Showcase/>
        {/* <Testimonials/> */}

    </div>
  )
}
