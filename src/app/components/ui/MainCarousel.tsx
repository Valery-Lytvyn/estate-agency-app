"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { SlideType } from "@/app/types";
import MainSlide from "./MainSlide";
import { Autoplay } from "swiper/modules";
import "swiper/css";

interface MainCarouselProps {
  slides: SlideType[];
}

const MainCarousel = ({ slides }: MainCarouselProps) => {
  return (
    <Swiper
      spaceBetween={0}
      autoplay={{
        delay: 10000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      loop={true}
    >
      {slides &&
        slides.length &&
        slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <MainSlide slide={slide} />
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default MainCarousel;
