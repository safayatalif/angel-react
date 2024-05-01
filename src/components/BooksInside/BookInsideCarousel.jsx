import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const BookInsideCarousel = () => {
    
    const books = [
        {
            backgroundImage: 'thumb/dinasaur.png',
            largeImage: 'thumb/dinasaur_L.png',
            title: 'Know you are Dinosaur',
            pages: 'Page 1-2',
        },
        {
            backgroundImage: 'thumb/ocean.png',
            largeImage: 'thumb/ocean_L.png',
            title: 'Explore Underwater Fisher and Animals',
            pages: 'Page 1-2',
        },
        {
            backgroundImage: 'thumb/alphabet.png',
            largeImage: 'thumb/alphabet_L.png',
            title: 'Alphabet Colouring Book',
            pages: 'Page 1-2',
        },
        {
            backgroundImage: 'thumb/floral.png',
            largeImage: 'thumb/floral_L.png',
            title: 'Cute Floral Face',
            pages: 'Page 1-2',
        },
        {
            backgroundImage: 'thumb/floral.png',
            largeImage: 'thumb/floral_L.png',
            title: 'Cute Floral Face',
            pages: 'Page 1-2',
        },
    ];
    return (
        <div>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 50,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {books.map((book, index) => (
                    <SwiperSlide key={index}>
                        <div
                            className="book-page h-72 w-full  mb-10"
                        >
                            <img className='h-72 border-2' src={book.backgroundImage} height="" alt="" />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default BookInsideCarousel;
