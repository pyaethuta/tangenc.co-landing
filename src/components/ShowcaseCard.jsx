import { BsArrowUpRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const ShowcaseCard = ({ card }) => {
  return (
    
       <div className="p-4 sm:pd-6 w-full h-full rounded-3xl  bg-[#1A1A1A] group">
        
          <div className="overflow-hidden rounded-2xl ">
            <img 
            className="transform group-hover:scale-110  object-cover transition duration-600 w-full h-auto" 
            src={card.image}
            alt={card.title} />
          </div>

      <div className="flex justify-between  items-center p-4 sm:p-6">
        <h1 className="text-lg sm:text-xl font-bold ">{card.title}</h1>
        <Link to={card.url} target="_blank" rel="noopener noreferrer">
          <BsArrowUpRight className="text-2xl cursor-pointer text-black opacity-0 group-hover:opacity-100" />
        </Link>
      </div>

            <div className=" flex flex-wrap gap-2 px-4 ">
                {card.tags.map((tag) => (
                  <span key={tag} className="py-1 px-3 bg-white rounded-xl text-black text-xs sm:text-sm">{tag}</span>
                  ))}   
            </div>      
        </div>



  )
}

export default ShowcaseCard