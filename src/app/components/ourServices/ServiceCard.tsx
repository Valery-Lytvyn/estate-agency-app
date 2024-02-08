"use client";
import React, { useState } from "react";
import { IoIosArrowForward as ArrowForward } from "react-icons/io";
import { motion } from "framer-motion";
import { scaleMotion } from "../../utils/motionVariants";

interface ServiceCardProps {
  title: string;
  description: string;
}

const ServiceCard = ({ title, description }: ServiceCardProps) => {
  const [isShowMore, setIsShowMore] = useState(false);

  const clickHandler = () => {
    setIsShowMore((prev) => !prev);
  };
  return (
    <div className="flex flex-col gap-4 py-5">
      <div className="w-3/4  rounded-full border">
        <div className="w-full  rounded-full border-l border-primary px-8 py-4">
          <motion.h3
            className="w-fit text-xl font-bold text-primary md:text-2xl"
            initial="initial"
            whileInView="animate"
            whileHover="animate"
            variants={scaleMotion}
          >
            {title}
          </motion.h3>
        </div>
      </div>
      <p className={`line-clamp-${isShowMore ? "none" : "5"} text-justify`}>
        {description}
      </p>
      <button
        className="transition-500 group flex items-center gap-1 font-medium hover:font-extrabold "
        onClick={clickHandler}
      >
        {isShowMore ? "Read less" : "Read more"}
        <ArrowForward className="transition-500 group-hover:text-xl" />
      </button>
    </div>
  );
};

export default ServiceCard;
