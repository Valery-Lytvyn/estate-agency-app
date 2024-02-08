"use client";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

interface PropertyCarouselProps {
  slides: string[];
}

const PropertyCarousel = ({ slides }: PropertyCarouselProps) => {
  return (
    <Swiper
      spaceBetween={0}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      speed={1000}
      effect={"fade"}
      modules={[EffectFade, Autoplay]}
      style={{ width: "100%" }}
      loop={true}
    >
      {slides &&
        slides.length &&
        slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-[400px] w-full self-center  sm:h-[800px] sm:w-3/4">
              <Image
                src={slide}
                alt={`slide${index}`}
                fill
                priority
                sizes="(max-width: 640px) 100vw, 50vw"
                className="h-auto w-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default PropertyCarousel;
