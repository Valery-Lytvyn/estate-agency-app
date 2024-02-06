"use client";
import AboutSection from "@/app/components/AboutSection";
import AgentCard from "@/app/components/AgentCard";
import BackLink from "@/app/components/ui/BackLink";
import SectionTitle from "@/app/components/ui/typography/SectionTitle";
import { agents } from "@/app/data";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

function About() {
  // const [agentData, setAgentData] = useState()
  const path = usePathname();

  return (
    <main>
      <div className="container relative py-4 lg:py-8">
        <div className="flex justify-between gap-5">
          <SectionTitle title="Unlocking dreams, Opening New Door" />
          <div className=" lg:py-4">
            <BackLink name={path} />
          </div>
        </div>

        <div className="relative  h-[300px]  sm:h-[500px] lg:h-[700px]">
          <Image
            src="https://images.pexels.com/photos/7641899/pexels-photo-7641899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="estate-agent"
            fill
            priority
            className="h-auto w-full  object-cover  md:pl-20"
          />
          <div className="absolute bottom-2 left-0 bg-primary p-2 sm:bottom-[5%]  md:p-10">
            <p className="text-xl font-bold capitalize text-black md:text-2xl">
              EstateAgency- <br />
              Since 2015
            </p>
            <p className="text-sm font-light capitalize">Art & Creative</p>
          </div>
        </div>

        <AboutSection />

        <SectionTitle title="Meet our team" />

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
          {agents.map((agent) => (
            <AgentCard key={agent.id} agent={agent} />
          ))}
        </div>
      </div>
    </main>
  );
}

export default About;
