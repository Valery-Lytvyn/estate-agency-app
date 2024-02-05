import { SlideType } from "@/app/types";
import { priceConverter } from "@/app/utils";
import Image from "next/image";
import React from "react";

function HeroSlide({ slide }: { slide: SlideType }) {
  const { bgImg, subtitle, code, number, lineOne, lineTwo, type, price } =
    slide;

  const formattedPrice = priceConverter(price);

  return (
    <div className={`w-ful h-[600px] lg:h-screen `}>
      <div className="bg-dark-gradient absolute inset-0">
        <Image
          src={bgImg}
          alt={subtitle}
          fill
          priority
          className="-z-20 h-auto w-full object-cover"
        />
        <div className="container flex h-full  flex-col justify-center gap-10 text-white">
          <div className="flex flex-col ">
            <p>{subtitle}</p>
            <p>{code}</p>
          </div>
          <div>
            <p className="text-xl font-extrabold uppercase leading-normal sm:text-2xl md:text-4xl lg:text-7xl">
              <span className="pr-4 text-primary">{number}</span>
              {lineOne}
              <br />
              {lineTwo}
            </p>
          </div>

          <div className="w-80 rounded-full border border-primary bg-opacity-20 bg-clip-padding backdrop-blur-sm backdrop-filter ">
            <div className="flex  items-center justify-between gap-2 px-8 py-4 text-2xl ">
              <p>{type}</p>
              <p className="font-bold text-primary">{formattedPrice}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSlide;
