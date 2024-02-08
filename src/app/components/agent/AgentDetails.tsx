import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import SocialIcons from "../ui/SocialIcons";
import { cardMotion } from "@/app/utils/motionVariants";

interface AgentDetailsProps {
  isInfoCardVisible: boolean;
  name: string;
  description: string;
  phone: string;
  email: string;
}

const AgentDetails = ({
  isInfoCardVisible,
  name,
  description,
  phone,
  email,
}: AgentDetailsProps) => {
  return (
    <div className="absolute inset-0 z-10">
      <AnimatePresence>
        {isInfoCardVisible && (
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
              <SocialIcons variants="text-primary hover:text-white" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AgentDetails;
