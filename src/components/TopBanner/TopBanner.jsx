import { useEffect, useState } from "react";

export const TopBanner = () => {
  const [currentSlider, setCurrentSlider] = useState(0);
  const sliders = [
    { img: "/book1/activity_book_1.jpg" },
    { img: "/book1/happy_easter.jpg" },
    { img: "/book1/ocean_book.jpg" },
    { img: "/book1/floral_face.jpg" },
    { img: "/book1/easter_holiday.jpg" },
  ];

  useEffect(() => {
    const intervalId = setInterval(() => setCurrentSlider(currentSlider === sliders.length - 1 ? 0 : currentSlider + 1), 5000);
    return () => clearInterval(intervalId);
  }, [currentSlider]);

  return (
    <div className="flex flex-row-reverse justify-between bg-sky-800">
      <div
        className="w-full h-[176px] sm:h-[296px] lg:h-[436px] xl:h-[496px] 2xl:h-[500px] flex flex-col items-center justify-center bg-transparent bg-black bg-cover transform duration-1000 ease-linear overflow-hidden"
        style={{ backgroundImage: `url(${sliders[currentSlider].img})`, backgroundSize: "cover" }}
      >
        <a className="w-full cursor-pointer" href="https://www.amazon.co.uk/stores/author/B0CPFHHHNC/allbooks" target="_blank">
          <img className="w-9/12 h-[176px] sm:h-[296px] lg:h-[436px] xl:h-[496px] 2xl:h-[500px] mx-auto" src={sliders[currentSlider].img} alt="" />
        </a>
      </div>
      {/* Slider thumbnails */}
      <div className="flex flex-col justify-center items-center gap-3 p-2">
        {sliders.map((slide, index) => (
          <img
            onClick={() => setCurrentSlider(index)}
            key={index}
            src={slide.img}
            className={`w-10 md:w-20 h-4 sm:h-6 md:h-10 bg-black/20 ${currentSlider === index ? "border-2 border-black p-px" : ""} rounded-md md:rounded-lg box-content cursor-pointer`}
            alt={`Slide ${index}`}
          />
        ))}
      </div>
    </div>
  );
};
