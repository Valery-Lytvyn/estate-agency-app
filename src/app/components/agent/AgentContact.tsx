import React, { useEffect, useState } from "react";
import Image from "next/image";
import { agents } from "../../data";
import { AgentDetailsType } from "../../types";
import SocialIcons from "../ui/SocialIcons";
import InquiryForm from "../form/AgentInquiryForm";
import SectionSubtitle from "../ui/typography/SectionSubtitle";
import Loading from "@/app/loading";

const AgentContact = ({ agentId }: { agentId: string }) => {
  const [agentData, setAgentData] = useState<AgentDetailsType | null>(null);
  useEffect(() => {
    const currentAgent = agents.find(({ id }) => id === agentId);
    if (currentAgent) {
      setAgentData(currentAgent);
    }
  }, [agentId]);

  if (!agentData) {
    return <Loading />;
  }

  const { name, profileImg, description, phone, mobile, email, skype } =
    agentData;
  return (
    <section>
      <SectionSubtitle subtitle="Contact agent" />
      <div className="grid grid-cols-1 gap-4 sm:gap-10 md:grid-cols-2 lg:grid-cols-3">
        <div className="relative h-[500px]">
          <Image
            src={profileImg}
            alt={name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="h-auto w-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-5">
          <div>
            <p className=" pb-2 text-2xl font-extrabold text-black">{name}</p>
            <p className="text-justify text-sm">{description}</p>
          </div>
          <div>
            <div className="flex justify-between">
              <p className="font-bold text-black">Phone:</p>
              <p>{phone}</p>
            </div>
            <div className="flex justify-between">
              <p className="font-bold text-black">Mobile:</p>
              <p>{mobile}</p>
            </div>
            <div className="flex justify-between">
              <p className="font-bold text-black">Phone:</p>
              <p>{phone}</p>
            </div>
            <div className="flex justify-between">
              <p className="font-bold text-black">Email:</p>
              <p>{email}</p>
            </div>
            <div className="flex justify-between">
              <p className="font-bold text-black">Skype:</p>
              <p>{skype}</p>
            </div>
          </div>
          <div className="self-center">
            <SocialIcons variants="text-black" />
          </div>
        </div>
        <InquiryForm />
      </div>
    </section>
  );
};

export default AgentContact;
