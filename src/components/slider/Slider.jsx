import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { listSlides } from "./dataSlide";
const Slider = () => {
  return (
    <div className="w-full h-[234px] bg-[#F7F8F9] px-[80px]">
      <h1 className="text-center text-primary text-3xl font-semibold py-[48px]">
        KHÁCH HÀNG TIÊU BIỂU
      </h1>
      <div className="h-full w-full">
        <Swiper
          style={{
            "--swiper-navigation-color": "#000",
            "--swiper-navigation-size": "18px",
          }}
          rewind={true}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
          slidesPerView={6}
        >
          {listSlides.map((slide) => {
            return (
              <SwiperSlide key={slide.id}>
                <img
                  src={slide.url}
                  alt={slide.name}
                  className="object-contain"
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
