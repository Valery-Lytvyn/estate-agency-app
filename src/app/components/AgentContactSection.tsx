import React, { useEffect, useState } from "react";
import SectionSubTitle from "./ui/typography/SectionSubTitle";
import Image from "next/image";
import { agents } from "../data";
import { AgentDetailsType } from "../types";
import SocialMediaIcons from "./ui/SocialMediaIcons";
import ContactForm from "./ContactForm";

function AgentContactSection({ agentId }: { agentId: string }) {
  const [agentData, setAgentData] = useState<AgentDetailsType>();
  useEffect(() => {
    const currentAgent = agents.find(({ id }) => id === agentId);
    if (currentAgent) {
      setAgentData(currentAgent);
    }
  }, [agentId]);

  return (
    <section>
      {agentData && (
        <>
          <SectionSubTitle subtitle="Contact agent" />
          <div className="grid grid-cols-1 gap-4 sm:gap-10 md:grid-cols-2 lg:grid-cols-3">
            <div className="relative h-[500px]">
              <Image
                src={agentData.profileImg}
                alt={agentData.name}
                fill
                sizes="100wv"
                className="h-auto w-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-5">
              <div>
                <p className=" pb-2 text-2xl font-extrabold text-black">
                  {agentData.name}
                </p>
                <p className="text-justify text-sm">{agentData.description}</p>
              </div>
              <div>
                <div className="flex justify-between">
                  <p className="font-bold text-black">Phone:</p>
                  <p>{agentData.phone}</p>
                </div>
                <div className="flex justify-between">
                  <p className="font-bold text-black">Mobile:</p>
                  <p>{agentData.mobile}</p>
                </div>
                <div className="flex justify-between">
                  <p className="font-bold text-black">Phone:</p>
                  <p>{agentData.phone}</p>
                </div>
                <div className="flex justify-between">
                  <p className="font-bold text-black">Email:</p>
                  <p>{agentData.email}</p>
                </div>
                <div className="flex justify-between">
                  <p className="font-bold text-black">Skype:</p>
                  <p>{agentData.skype}</p>
                </div>
              </div>
              <div className="self-center">
                <SocialMediaIcons variants="text-black" />
              </div>
            </div>
            <ContactForm />
          </div>
        </>
      )}
    </section>
  );
}

export default AgentContactSection;
