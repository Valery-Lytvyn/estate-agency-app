import React from "react";
import { motion } from "framer-motion";
import { scaleMotion } from "@/app/utils/motionVariants";

interface ContactDetailsSubtitleProps {
  logo: React.ReactNode;
  title: string;
}

const ContactDetailsSubtitle = ({
  logo,
  title,
}: ContactDetailsSubtitleProps) => {
  return (
    <motion.div
      key={title}
      initial="initial"
      whileInView="animate"
      variants={scaleMotion}
    >
      <h3 className="flex w-fit items-center gap-2 border-b border-primary pr-5 text-2xl font-bold">
        {logo}
        <span className="capitalize">{title}</span>
      </h3>
    </motion.div>
  );
};

export default ContactDetailsSubtitle;
