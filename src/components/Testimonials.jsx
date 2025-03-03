
import TestimonialsCard from "./TestimonialsCard";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Marquee from "./Marquee";
import { testimonials } from "../constant";

const Testimonials = () => {
  return (
    <div className="bg-[#262626] px-4 py-16 md:px-[10px] -mx-[12px] md:-mx-[5px] md:py-[60px] mt-40 rounded-t-4xl">
      <div className="mt-10">
        <div className="text-center">
          <span className="bg-white text-black rounded-2xl text-sm md:text-base px-4 py-1" data-aos="fade-up">Testimonial</span>
          <h1 className="font-bold text-3xl md:text-5xl tracking-wide py-4 md:py-8" data-aos="fade-up">Worldwide customers</h1>
          <p className="tracking-wide text-lg max-w-[550px] mx-auto " data-aos="fade-up">
            Neutra empowers global teams with seamless integration and time-saving capabilities. Discover user success!
          </p>
        </div>
        <div className="container mx-auto mt-12 md:mt-[60px] lg:w-[1150px]" data-aos="fade-up">
          <Splide
            options={{
              arrows: false,
              autoplay: true,
              interval: 2000,
              type: 'loop',
              perPage: 3,
              gap: '1rem',
              breakpoints: {
                640: {
                  perPage: 1,
                },
                768: {
                  perPage: 2,
                },
                1024: {
                  perPage: 2,
                },
              },
            }}
          >
            {testimonials.map((testimonial) => (
              <SplideSlide key={testimonial.id}>
                <TestimonialsCard testimonial={testimonial} />
              </SplideSlide>

            ))}
          </Splide>
        </div>
        <div data-aos="fade-up">
          <Marquee />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;