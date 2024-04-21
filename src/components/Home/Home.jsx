import { useState } from "react";

export const Home = () => {
  const [currentSlider, setCurrentSlider] = useState(0);
  const sliders = [
    {
      img: "https://img.freepik.com/free-photo/smiling-girl-holding-eyeglasses-studying-art-craft-generated-by-ai_24640-82982.jpg?t=st=1713373420~exp=1713377020~hmac=3c6b0ec71493a827fcea2fc2fb6571e7210850f4ec794dc944ff988315901e98&w=1060",
      title: "Unlocking Creativity",
      des: "Coloring isn't just filling spaces; it's about unlocking the imagination, one stroke at a time.",
    },

    {
      img: "https://img.freepik.com/free-photo/little-girl-drawing-using-easel_23-2149024304.jpg?t=st=1713373872~exp=1713377472~hmac=32d001ded17791c48df74dcdeaef3d77e5c51e44e2645206e75a274f914b502f&w=900",
      title: "Canvas of Tranquility",
      des: "A coloring book is a canvas of tranquility, where chaos finds order and stress finds solace.",
    },
    {
      img: "https://img.freepik.com/free-photo/child-with-autism-living-fantasy-world_23-2151248933.jpg?t=st=1713375384~exp=1713378984~hmac=df2ef9e76204615fc4d283e8b19e88d7c66517a509813015e4b070f9a9eb19e2&w=900",
      title: "Mindful Expression",
      des: "With every hue chosen mindfully, a coloring book becomes an expression of inner peace and mindfulness.",
    },
    {
      img: "https://img.freepik.com/premium-photo/happy-kid-reading-books-colorful-backgrounds_62972-13890.jpg?w=1060",
      title: "Empowering Playfulness",
      des: "Coloring isn't just child's play; it's the empowerment of playfulness for minds young and old.",
    },
    {
      img: "https://img.freepik.com/premium-photo/illustration-children-s-activities-back-school_566246-12049.jpg?w=1060",
      title: "A Palette of Emotions",
      des: "Within the pages of a coloring book, emotions find their palette, blending into a tapestry of self-expression.",
    },
    {
      img: "https://img.freepik.com/premium-photo/little-girl-reading-from-magic-book_23-2149124130.jpg?w=1060",
      title: "Stress-Relieving Therapy",
      des: "Amidst the lines and curves, a coloring book transforms into a sanctuary, offering stress-relieving therapy for all.",
    },
    {
      img: "https://img.freepik.com/premium-photo/young-boy-sitting-grass-reading-book-outdoors-world-book-day_1115439-3886.jpg?w=1060",
      title: "Journey to Serenity",
      des: "Embark on a journey to serenity with a coloring book as your guide, each color a step closer to inner peace.",
    },
    {
      img: "https://img.freepik.com/premium-photo/child-studying_551707-16269.jpg?w=1060",
      title: "Artistic Liberation",
      des: "In the strokes of a crayon, lies the liberation of the artist within, regardless of age or gender.",
    },
    {
      img: "https://img.freepik.com/free-photo/autism-day-awareness-with-colourful-portrait_23-2151365108.jpg?t=st=1713457748~exp=1713461348~hmac=a9d773a070f1c32754935bfeb7e2f830cdaba0279e45eec32eaca61b62def6cb&w=900",
      title: "Creative Meditation",
      des: "Beyond mere coloring, lies a form of creative meditation, where hearts find harmony and minds find clarity",
    },
    {
      img: "https://img.freepik.com/free-photo/cute-caucasian-girl-painting-messy-portrait-indoors-generated-by-ai_188544-36778.jpg?t=st=1713373698~exp=1713377298~hmac=9acfaab17d029749683db1e05beda00ceb0df3f52b48f3ed408f245874c6e1e1&w=1060",
      title: "Therapeutic Artistry",
      des: "In the strokes of crayons lies a therapeutic artistry, soothing the mind and uplifting the soul.",
    },
  ];
  const prevSlider = () => setCurrentSlider((currentSlider) => (currentSlider === 0 ? sliders.length - 1 : currentSlider - 1));
  const nextSlider = () => setCurrentSlider((currentSlider) => (currentSlider === sliders.length - 1 ? 0 : currentSlider + 1));
  const isSmallScreen = window.innerWidth <= 768;
  return (
    <div
      id="home"
      className="w-full h-60 sm:h-96 md:h-[100vh] flex flex-col xl:flex-row items-center justify-center gap-5 lg:gap-10 relative bg-cover before:absolute before:bg-black/50 before:inset-0 transform duration-1000 ease-linear z-40 overflow-hidden"
      style={{ backgroundImage: `url(${currentSlider === 0 ? sliders[sliders.length - 1].img : sliders[currentSlider - 1].img})` }}
    >
      {/* arrow */}
      <div className="absolute bottom-1/4 flex gap-3 z-50 px-5">
        {/* arrow left */}
        <button onClick={prevSlider} className="flex justify-center items-center hover:bg-white/30 rounded-full w-6 h-6 md:w-8 md:h-8">
          <svg viewBox="0 0 1024 1024" className="w-4 h-4 md:w-6 md:h-6 icon" xmlns="http://www.w3.org/2000/svg" fill="#000000">
            <g strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <path
                fill="#0095FF"
                d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"
              ></path>
            </g>
          </svg>
        </button>
        {/* arrow right */}
        <button onClick={nextSlider} className="flex justify-center items-center hover:bg-white/30 rounded-full w-6 h-6 md:w-8 md:h-8">
          <svg viewBox="0 0 1024 1024" className="w-4 h-4 md:w-6 md:h-6 icon" xmlns="http://www.w3.org/2000/svg" fill="#000000" transform="rotate(180)">
            <g strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <path
                fill="#0095FF"
                d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"
              ></path>
            </g>
          </svg>
        </button>
      </div>
      {/* text container here */}
      <div className="w-1/2 px-4 left-5 absolute drop-shadow-lg text-white rounded-lg">
        <h1 className="lg:text-4xl  font-bold mb-3">{sliders[currentSlider].title}</h1>
        <p className="text-xs sm:text-sm md:text-base lg:text-lg">{sliders[currentSlider].des}</p>
      </div>
      {/* slider container */}
      <div className="w-1/2 ml-auto overflow-hidden  absolute -right-5 lg:-right-16 z-50 px-4 py-10">
        <div className="ease-linear duration-300 flex gap-4 items-center" style={{ transform: `translateX(-${currentSlider * (isSmallScreen ? 98 : 200)}px)` }}>
          {/* sliders */}
          {sliders.map((slide, inx) => (
            <img
              key={inx}
              src={slide.img}
              className={`h-[180px] sm:h-[200px] lg:h-[320px] min-w-[90px] lg:min-w-[184px] ${
                currentSlider - 1 === inx ? "scale-0" : "scale-100 delay-500"
              } drop-shadow-lg shadow-lg shadow-black bg-black/50 duration-300 rounded-lg z-50`}
              alt={slide.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
