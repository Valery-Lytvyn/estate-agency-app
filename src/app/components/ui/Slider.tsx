"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { SlideType } from "@/app/types";
import HeroSlide from "../HeroSlide";
import { Autoplay } from "swiper/modules";

interface SliderProps {
  slides: SlideType[];
}

function Slider({ slides }: SliderProps) {
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
            <HeroSlide slide={slide} />
          </SwiperSlide>
        ))}
    </Swiper>
  );
}

export default Slider;
