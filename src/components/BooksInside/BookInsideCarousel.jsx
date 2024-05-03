import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import BookInsideModal from './BookInsideModal';

const BookInsideCarousel = () => {
    const [openModal, setOpenModal] = useState(false);
    const [image, setimage] = useState(null);


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
                    160: {
                        slidesPerView: 1,
                        spaceBetween: 40,
                    },
                    560: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {books.map((book, index) => (
                    <SwiperSlide key={index}>
                        <div
                            className="book-page h-72 w-full  mb-10"
                            onClick={() => (setOpenModal(true), setimage(book.largeImage))}
                        >
                            <img className='h-72 border-2' src={book.backgroundImage} height="" alt="" />
                        </div>
                        {/* <button  className="rounded-md bg-sky-500 px-5 py-[6px] text-white">
                            Open
                        </button> */}
                    </SwiperSlide>
                ))}
            </Swiper>
            {openModal && <BookInsideModal setOpenModal={setOpenModal} image={image} />}
        </div>
    );
};

export default BookInsideCarousel;
