// const VIDEO_URL = "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2F61555039101915%2Fvideos%2F1039600320587193%2F&show_text=false&width=560&t=0";

import { useState } from "react";

const BookVideo = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleText = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div className="bg-gradient-to-r from-violet-900 to-fuchsia-900 my-12">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between p-8 lg:p-0">
        <div className="w-full lg:w-1/2 lg:px-4 p-6 text-lg md:text-xl  lg:text-2xl font-semibold leading-[34px] text-gray-50">
          <h1 className="text-lg md:text-xl  lg:text-2xl font-semibold leading-[34px] text-gray-700">
            <span>
              Welcome to <span className="text-sky-500 font-bold">Angel Publishers</span> - Where Imagination Takes Flight! Hello, dear friends! We are thrilled to launch Angel Publishers, your go-to
              destination for a world of creativity, learning, and end
            </span>
            {/* <span>We`re the Angels of Angel Publishers. We make colors come alive in your world. With our crayons and paints so bright, you can create masterpieces, day and night.</span>
            <span className={isExpanded ? "inline" : "hidden"}>
              <p className="mt-4">Angel Publishers, spreading joy and fun. In every coloring adventure, we`ve just begun. Let your imagination fly up high. With Angel Publishers, your dreams touch the sky.</p>
            </span> */}
            <span className={isExpanded ? "inline" : "hidden"}>
              less fun! At Angel Publishers, we believe in the magic of coloring and the joy of exploring vibrant worlds through our books. Our mission is to make your kids minds more colorful, one
              page at a time!
            </span>

            <span className="cursor-pointer text-xl text-sky-800 hover:text-sky-500 duration-300" onClick={toggleText}>
              {isExpanded ? "Read Less" : "...Read More"}
            </span>
          </h1>
        </div>
        <div className="w-full lg:w-1/2 p-6">
          <img
            src="/banner_1.png"
            className="w-full h-96 rounded-lg border-b-2 border-l border-r-2 border-t border-b-[#0084ff] border-l-[#005eb6] border-r-[#0084ff] border-t-[#005eb6] bg-white shadow-md dark:bg-[#18181B]"
            alt=""
          />
          {/* <div className="overflow-hidden relative" style={{ paddingTop: "56.25%" }}>
            <iframe
              src={VIDEO_URL}
              className="absolute top-0 left-0 w-full h-full"
              style={{ border: "none" }}
              scrolling="no"
              frameBorder="0"
              allowFullScreen={true}
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            ></iframe>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default BookVideo;
