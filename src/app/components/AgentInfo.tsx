import React from "react";
import SocialMediaIcons from "./ui/SocialMediaIcons";
import { AnimatePresence, motion } from "framer-motion";

interface AgentInfoProps {
  isInfoCardShow: boolean;
  name: string;
  description: string;
  phone: string;
  email: string;
}
const cardMotion = {
  initial: {
    translateY: "100%",
    opacity: 0,
    transition: { duration: 0.5 },
  },
  animate: {
    translateY: "0",
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

function AgentInfo({
  isInfoCardShow,
  name,
  description,
  phone,
  email,
}: AgentInfoProps) {
  return (
    <div className="absolute inset-0 z-10">
      <AnimatePresence>
        {isInfoCardShow && (
          <motion.div
            className="flex min-h-full  flex-col justify-between border-2 border-primary bg-gray-700 bg-opacity-40 bg-clip-padding p-4  backdrop-blur-md backdrop-filter md:py-8"
            key="card"
            initial="initial"
            animate="animate"
            exit="initial"
            variants={cardMotion}
          >
            <div className="flex flex-1 flex-col justify-between gap-10">
              <div>
                <p className=" pb-2 text-2xl font-extrabold text-black">
                  {name}
                </p>
                <p className="text-sm text-white">{description}</p>
              </div>
              <div>
                <p className="text-sm text-black">
                  Phone:<span className="pl-2 text-white">{phone}</span>
                </p>
                <p className="text-sm text-black">
                  Email:<span className="pl-2 text-white">{email}</span>
                </p>
              </div>
            </div>
            <div className="self-center pt-10">
              <SocialMediaIcons variants="text-primary hover:text-white" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default AgentInfo;
