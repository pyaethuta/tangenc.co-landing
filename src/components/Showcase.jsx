import ShowcaseCard from "./ShowcaseCard";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { ShowcaseCards } from "../constant";

const Showcase = () => {
  return (
    <>
        <div className="container max-w-[830px] px-[60px] mx-auto">
            <div className=" text-center px-4 ">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold py-2 leading-tight tracking-wide text-white" data-aos="fade-up">
                Building Digital Excellence with Tangenc</h1>
                <p className="text-gray-400 text-xl tracking-wide" data-aos="fade-up">Discover the innovative strategies that set Tangence apart, driving success in the digital landscape.</p>
            </div>
        </div>
        <div className="container mx-auto mt-12 md:mt-[60px] lg:w-[1150px]">
          <Splide options={{
            arrows:false,
            autoplay:true,
            interval:2000,
            type:'loop',
            perPage:2,
            gap:'1.5rem',
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
            }}>
            {ShowcaseCards.map((card) =>
              (
                <SplideSlide key={card.id} >
                  <ShowcaseCard card={card}/>
                </SplideSlide>
              ))}
          </Splide>

            
        </div>
    </>
  )
}

export default Showcase