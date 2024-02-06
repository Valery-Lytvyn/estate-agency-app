"use client";
import Image from "next/image";
import React, { useState } from "react";
import { AgentDetailsType } from "../types";
import AgentInfo from "./AgentInfo";

interface AgentCardProps {
  agent: AgentDetailsType;
}

function AgentCard({ agent }: AgentCardProps) {
  const {
    profileImg,
    name,
    phone,
    email,

    description,
  } = agent;
  const [isInfoCardShow, setIsInfoCardShow] = useState(false);
  const mouseEnterHandler = () => {
    setIsInfoCardShow(true);
  };
  const mouseLeaveHandler = () => {
    setIsInfoCardShow(false);
  };
  return (
    <div
      className="relative min-h-[400px] overflow-hidden"
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
    >
      <Image
        src={profileImg}
        alt={name}
        fill
        sizes="100wv"
        className="h-auto w-full object-cover"
      />
      <AgentInfo
        isInfoCardShow={isInfoCardShow}
        name={name}
        description={description}
        phone={phone}
        email={email}
      />
    </div>
  );
}

export default AgentCard;
