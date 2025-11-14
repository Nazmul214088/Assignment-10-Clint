// import Swiper core and required modules
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import first from "../assets/first.png";
import second from "../assets/02.png";
import third from "../assets/04.png";
import fourth from "../assets/05.png";
import fifth from "../assets/08.jpeg";

const Slider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000, disableOnInteraction: false }} // <-- autoplay
      loop={true} // <-- infinite loop
      className="w-full my-4"
    >
      <SwiperSlide className="flex items-center justify-center">
        <img
          className="p-14 w-full mx-auto object-cover"
          src={first}
          alt="First Slide"
        />
      </SwiperSlide>

      <SwiperSlide className="flex items-center justify-center">
        <img
          className="p-14 w-full mx-auto object-cover"
          src={second}
          alt="Second Slide"
        />
      </SwiperSlide>

      <SwiperSlide className="flex items-center justify-center">
        <img
          className="p-14 w-full mx-auto object-cover"
          src={third}
          alt="Third Slide"
        />
      </SwiperSlide>

      <SwiperSlide className="flex items-center justify-center">
        <img
          className="p-14 w-full mx-auto object-cover"
          src={fourth}
          alt="Fourth Slide"
        />
      </SwiperSlide>
      <SwiperSlide className="flex items-center justify-center">
        <img
          className="p-14 w-full mx-auto object-cover"
          src={fifth}
          alt="Fourth Slide"
        />
      </SwiperSlide>
    </Swiper>
  );
};
export default Slider;
