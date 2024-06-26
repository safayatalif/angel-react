import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cards";

import { EffectCards } from "swiper/modules";

export default function BookInsideCarousel({ book }) {
  return (
    <>
      <Swiper effect={"cards"} grabCursor={true} modules={[EffectCards]} className="mySwiper">
        <SwiperSlide className="border-2  ">
          <img className=" h-72 sm:h-72 md:h-64  lg:h-72 xl:h-96 w-full" src={book?.bookImageOne} alt="" />
        </SwiperSlide>
        <SwiperSlide className="border-2  ">
          <img className=" h-72 sm:h-72 md:h-64  lg:h-72 xl:h-96 w-full" src={book?.bookImageTwo} alt="" />
        </SwiperSlide>
        <SwiperSlide className="border-2  ">
          <img className=" h-72 sm:h-72 md:h-64  lg:h-72 xl:h-96 w-full" src={book?.bookImageThree} alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
