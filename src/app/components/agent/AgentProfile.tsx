"use client";
import Image from "next/image";
import React, { useState } from "react";
import { AgentDetailsType } from "../../types";
import AgentDetails from "./AgentDetails";

interface AgentProfileProps {
  agent: AgentDetailsType;
}

const AgentProfile = ({ agent }: AgentProfileProps) => {
  const [isInfoCardVisible, setIsInfoCardVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsInfoCardVisible(true);
  };
  const handleMouseLeave = () => {
    setIsInfoCardVisible(false);
  };

  const { profileImg, name, phone, email, description } = agent;

  return (
    <div
      className="relative min-h-[600px] overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Image
        src={profileImg}
        alt={name}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="h-auto w-full object-cover"
      />
      <AgentDetails
        isInfoCardVisible={isInfoCardVisible}
        name={name}
        description={description}
        phone={phone}
        email={email}
      />
    </div>
  );
};

export default AgentProfile;
