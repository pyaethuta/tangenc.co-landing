


const TestimonialsCard = ({ testimonial }) => {
  return (
    <div className="p-8 w-full h-full rounded-3xl border border-neutral-500 bg-white shadow-lg ">
      <div className="flex md:flex-row items-center ">
        <img
          src={testimonial.image}
          alt={testimonial.user}
          className="w-12 h-12 bg-blue-200 rounded-full mr-0 md:mr-4"
        />
        <div className="flex flex-col">
          <p className="font-black text-black text-lg md:text-xl">{testimonial.user}</p>
          <p className="text-sm text-gray-600">{testimonial.company}</p>
        </div>
      </div>
      <div>
        <p className="text-black my-4 text-md md:text-lg">{testimonial.text}</p>
      </div>
    </div>
  );
};



export default TestimonialsCard;
