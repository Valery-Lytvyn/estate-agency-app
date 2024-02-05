"use client";
import AboutSection from "@/app/components/AboutSection";
import AgentCard from "@/app/components/AgentCard";
import BackHomeLink from "@/app/components/ui/BackHomeLink";
import SectionTitle from "@/app/components/ui/typography/SectionTitle";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const agents = [
  {
    id: "1",
    profileImg:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Margaret Sotillo",
    phone: "03 3569 4234",
    mobile: "+61 466 024 583",
    email: "margaret@example.com",
    skype: "Margaret.Es",
    facebook: "http://www.facebook.com",
    twitter: "http://twitter.com",
    instagram: "http://instagram.com",
    linkedin: "http://www.linkedin.com",
    description:
      "Sed porttitor lectus nibh. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vivamus suscipit tortor eget felis porttitor volutpat. Vivamus suscipit tortor eget felis porttitor volutpat.",
  },
  {
    id: "2",
    profileImg:
      "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "John Doe",
    phone: "03 3569 5678",
    mobile: "+61 466 024 789",
    email: "john.doe@example.com",
    skype: "John.Doe",
    facebook: "http://www.facebook.com",
    twitter: "http://twitter.com",
    instagram: "http://instagram.com",
    linkedin: "http://www.linkedin.com",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: "3",
    profileImg:
      "https://images.pexels.com/photos/774095/pexels-photo-774095.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Alice Johnson",
    phone: "03 3569 1010",
    mobile: "+61 466 024 101",
    email: "alice.johnson@example.com",
    skype: "Alice.Johnson",
    facebook: "http://www.facebook.com",
    twitter: "http://twitter.com",
    instagram: "http://instagram.com",
    linkedin: "http://www.linkedin.com",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];
function About() {
  // const [agentData, setAgentData] = useState()
  const path = usePathname();

  return (
    <main>
      <div className="container relative py-4 lg:py-8">
        <div className="flex justify-between gap-5">
          <SectionTitle title="Unlocking dreams, Opening New Door" />
          <div className=" lg:py-4">
            <BackHomeLink path={path} />
          </div>
        </div>

        <div className="relative  h-[300px]  sm:h-[500px] lg:h-[700px]">
          <Image
            src="https://images.pexels.com/photos/7641899/pexels-photo-7641899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="estate-agent"
            fill
            sizes=" 100vw"
            className="h-full w-full  object-cover sm:object-cover md:pl-20"
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
