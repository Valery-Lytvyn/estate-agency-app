import React from "react";
import { motion } from "framer-motion";
import { subtitleMotion } from "@/app/utils/motionVariants";

const SectionSubtitle = ({ subtitle }: { subtitle: string }) => {
  return (
    <motion.div
      key={subtitle}
      initial="initial"
      whileInView="animate"
      variants={subtitleMotion}
    >
      <h3 className="relative my-4 w-fit text-2xl font-medium">
        {subtitle}
        <span className="absolute -bottom-1 left-0 min-h-0.5 w-1/3 bg-primary" />
      </h3>
    </motion.div>
  );
};

export default SectionSubtitle;
