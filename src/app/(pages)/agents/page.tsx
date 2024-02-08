import React from "react";
import AgentProfile from "@/app/components/agent/AgentProfile";
import Breadcrumb from "@/app/components/navigation/Breadcrumb";
import SectionTitle from "@/app/components/ui/typography/SectionTitle";
import { agents } from "@/app/data";

const Agents = () => {
  return (
    <div className="container relative py-4 lg:py-8">
      <section>
        <div className="flex justify-between gap-5">
          <SectionTitle title="Our amazing agents" subtitle="Agents list" />
          <div className=" lg:py-4">
            <Breadcrumb />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
          {agents.map((agent) => (
            <AgentProfile key={agent.id} agent={agent} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Agents;
