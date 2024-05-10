import { useState } from "react";

const Welcome = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleText = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div id="about" className="container mx-auto px-8 py-16 mt-12 flex flex-col lg:flex-row gap-8">
      <div className="lg:w-1/2 hidden lg:block transform rotate-3 hover:scale-105 hover:rotate-0 transition-transform duration-300">
        <img
          src="/banner_1.png"
          className="w-full h-96 rounded-lg border-b-2 border-l border-r-2 border-t border-b-[#0084ff] border-l-[#005eb6] border-r-[#0084ff] border-t-[#005eb6] bg-white shadow-md dark:bg-[#18181B]"
          alt=""
        />
      </div>
      <div className="lg:w-1/2 px-4">
        <div className="about-content">
          <h1 className="text-xl md:text-2xl  lg:text-3xl font-semibold leading-[34px] ">
            <span>
              Welcome to <span className="text-sky-500 font-bold">Angel Publishers</span> - Where Imagination Takes Flight! Hello, dear friends! We are thrilled to launch Angel Publishers, your go-to
              destination for a world of creativity, learning, and end
            </span>
            <span className={isExpanded ? "inline" : "hidden"}>
              less fun! At Angel Publishers, we believe in the magic of coloring and the joy of exploring vibrant worlds through our books. Our mission is to make your kids minds more colorful, one
              page at a time!
            </span>

            <span className="cursor-pointer text-xl text-sky-800 hover:text-sky-500 duration-300 ml-4" onClick={toggleText}>
              {isExpanded ? "Read Less" : "...Read More"}
            </span>
          </h1>

          <div className="btn-group flex flex-wrap mt-8">
            <button className="w-36 h-16 border-2 border-sky-300 text-sky-800 font-black rounded-full hover:text-white duration-300 relative group">
              <span className="absolute w-12 group-hover:w-[88%] duration-300 flex group-hover:justify-start rounded-full inset-2 bg-sky-300 group-hover:bg-sky-500 group-hover:duration-500 -z-10"></span>
              <a href="https://www.amazon.co.uk/stores/author/B0CPFHHHNC/allbooks" target="_blank" rel="noopener noreferrer">
                Buy Book
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
