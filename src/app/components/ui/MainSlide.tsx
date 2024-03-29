import Image from "next/image";
import React from "react";
import { SlideType } from "@/app/types";
import { priceConverter } from "@/app/utils";

const MainSlide = ({ slide }: { slide: SlideType }) => {
  const { bgImg, subtitle, code, number, lineOne, lineTwo, type, price } =
    slide;

  const formattedPrice = priceConverter(price);

  return (
    <div className={`h-[600px] w-full lg:h-screen `}>
      <div className="absolute inset-0  bg-dark-gradient">
        <Image
          src={bgImg}
          alt={subtitle}
          fill
          sizes="(max-width: 640px) 100vw, 50vw"
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
};

export default MainSlide;
