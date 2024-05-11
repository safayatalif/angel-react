import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import BookInsideCarousel from "./BookInsideCarousel";
const BooksInside = () => {
  const books = [
    {
      bookImageOne: "/thumb/alphabet1.png",
      bookImageTwo: "/thumb/alphabet2.png",
      bookImageThree: "/thumb/alphabet3.png",
    },
    {
      bookImageOne: "/thumb/dinasaur1.png",
      bookImageTwo: "/thumb/dinasaur2.png",
      bookImageThree: "/thumb/dinasaur3.png",
    },
    {
      bookImageOne: "/thumb/floral1.png",
      bookImageTwo: "/thumb/floral2.png",
      bookImageThree: "/thumb/floral3.png",
    },

    {
      bookImageOne: "/thumb/ocean1.png",
      bookImageTwo: "/thumb/ocean2.png",
      bookImageThree: "/thumb/ocean3.png",
    },
  ];

  return (
    <div id="books_inside" className="container mx-auto my-16 p-12 border-y-2">
      <h1 className="text-center font-bold text-4xl text-sky-500 mb-16">Books Inside</h1>
      <div className="h-96 m-16">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            160: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            560: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 100,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {books.map((book, index) => (
            <SwiperSlide className="py-8" key={index}>
              <BookInsideCarousel book={book}></BookInsideCarousel>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BooksInside;
