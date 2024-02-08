"use client";
import React from "react";
import { motion } from "framer-motion";
import { titleMotion } from "@/app/utils/motionVariants";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

const SectionTitle = ({ title, subtitle }: SectionTitleProps) => {
  return (
    <div className="my-2 overflow-hidden border-l-4 border-primary py-2 pl-1 pr-2 md:my-10">
      <motion.div
        key={title}
        initial="initial"
        whileInView="animate"
        variants={titleMotion}
      >
        <h2 className="text-2xl font-extrabold capitalize md:text-4xl">
          {title}
        </h2>
        {subtitle && <p className="pt-2">{subtitle}</p>}
      </motion.div>
    </div>
  );
};

export default SectionTitle;
