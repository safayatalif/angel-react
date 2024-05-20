import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import AskAccordion from "./AskAccordion";

const BookReviews = () => {
    // JSON data for book ratings
    const bookRatings = [
        { id: 1, imageUrl: "/Rating/rating-1.png" },
        { id: 2, imageUrl: "/Rating/rating-2.png" },
        { id: 3, imageUrl: "/Rating/rating-3.png" },
        { id: 4, imageUrl: "/Rating/rating-4.png" },
        { id: 5, imageUrl: "/Rating/rating-5.png" },
        { id: 6, imageUrl: "/Rating/rating-6.png" }
    ];

    return (
        <section id="book-reviews" className="section-full p-4">
            <div className="container mx-auto py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="book-review">
                        <h2 className="text-2xl font-bold mb-4">Book Rating</h2>
                        <Swiper
                            spaceBetween={30}
                            slidesPerView={1}
                            navigation
                            pagination={{ clickable: true }}
                        >
                            {bookRatings.map((rating) => (
                                <SwiperSlide className="p-8" key={rating.id}>
                                    <img className="w-96 h-auto mx-auto" src={rating.imageUrl} alt={`Rating ${rating.id}`} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    <div className="book-review">
                        <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
                        <AskAccordion></AskAccordion>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BookReviews;
