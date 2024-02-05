"use client";
import React, { useState } from "react";
import { IoIosArrowForward as ArrowForward } from "react-icons/io";

interface SectionTitleProps {
  title: string;
  description: string;
}

function ServiceTile({ title, description }: SectionTitleProps) {
  const [isShowMore, setIsShowMore] = useState(false);

  const clickHandler = () => {
    setIsShowMore((prev) => !prev);
  };
  return (
    <div className="flex flex-col gap-4 py-5 ">
      <div className="w-3/4 rounded-full border  border-primary bg-gradient-to-r from-white to-gray-700/20 px-8 py-4">
        <h3 className="w-fit text-xl font-bold md:text-2xl">{title}</h3>
      </div>
      <p
        className={`${isShowMore ? "line-clamp-none" : "line-clamp-5"} text-justify`}
      >
        {description}
      </p>
      <button
        className="transition-500 group flex items-center gap-1 font-medium hover:font-extrabold "
        onClick={clickHandler}
      >
        Read more
        <ArrowForward className="transition-500 group-hover:text-xl" />
      </button>
    </div>
  );
}

export default ServiceTile;
