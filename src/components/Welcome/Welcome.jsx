import { useState } from "react";

const Welcome = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleText = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div id="about" className="container mx-auto p-8 flex flex-col lg:flex-row gap-8">
      <div className="lg:w-1/2 hidden lg:block">
        <img src="/banner_1.png" className="w-full h-96" alt="" />
      </div>
      <div className="lg:w-1/2 px-4">
        <div className="about-content">
          <h3 className="text-2xl font-bold text-white">
            <span>
              Welcome to Angel Publishers - Where Imagination Takes Flight! Hello, dear friends! We are thrilled to launch Angel Publishers, your go-to destination for a world of creativity, learning,
              and end
            </span>
            <span className={isExpanded ? "inline" : "hidden"}>
              less fun! At Angel Publishers, we believe in the magic of coloring and the joy of exploring vibrant worlds through our books. Our mission is to make your kids minds more colorful, one
              page at a time!
            </span>

            <span className="cursor-pointer text-xl text-sky-800 hover:text-sky-500 duration-300 ml-4" onClick={toggleText}>
              {isExpanded ? "Read Less" : "...Read More"}
            </span>
          </h3>

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
