import { useState } from "react";

const Welcome = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleText = () => {
    setIsExpanded(!isExpanded);
  };
  const VIDEO_URL = "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2F61555039101915%2Fvideos%2F1039600320587193%2F&show_text=false&width=560&t=0";


  return (
    <div id="about" className="container mx-auto px-8 py-16 mt-12 flex flex-col lg:flex-row gap-8 border-y-2">
      <div className="lg:w-1/2  lg:block transform  hover:scale-105 transition-transform duration-300">
        {/* <img
          src="/banner_1.png"
          className="w-full h-96 rounded-lg border-b-2 border-l border-r-2 border-t border-b-[#0084ff] border-l-[#005eb6] border-r-[#0084ff] border-t-[#005eb6] bg-white shadow-md dark:bg-[#18181B]"
          alt=""
        /> */}
        <div className="overflow-hidden relative" style={{ paddingTop: "56.25%" }}>
          {/* 16:9 aspect ratio padding-top trick */}
          <iframe
            src={VIDEO_URL}
            className="absolute top-0 left-0 w-full h-full"
            style={{ border: "none" }}
            scrolling="no"
            frameBorder="0"
            allowFullScreen={true}
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          ></iframe>
        </div>
      </div>
      <div className="lg:w-1/2 px-4">
        <div className="about-content">
          <h1 className="text-lg md:text-xl  lg:text-2xl font-semibold leading-[34px] text-gray-700">
            {/* <span>
              Welcome to <span className="text-sky-500 font-bold">Angel Publishers</span> - Where Imagination Takes Flight! Hello, dear friends! We are thrilled to launch Angel Publishers, your go-to
              destination for a world of creativity, learning, and end
            </span> */}
            <span>We`re the Angels of Angel Publishers. We make colors come alive in your world. With our crayons and paints so bright, you can create masterpieces, day and night.</span>
            <span className={isExpanded ? "inline" : "hidden"}>
              <p className="mt-4">Angel Publishers, spreading joy and fun. In every coloring adventure, we`ve just begun. Let your imagination fly up high. With Angel Publishers, your dreams touch the sky.</p>
            </span>
            {/* <span className={isExpanded ? "inline" : "hidden"}>
              less fun! At Angel Publishers, we believe in the magic of coloring and the joy of exploring vibrant worlds through our books. Our mission is to make your kids minds more colorful, one
              page at a time!
            </span> */}

            <span className="cursor-pointer text-xl text-sky-800 hover:text-sky-500 duration-300" onClick={toggleText}>
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
