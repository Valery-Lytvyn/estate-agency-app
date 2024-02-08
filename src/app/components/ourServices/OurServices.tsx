import React from "react";
import SectionTitle from "../ui/typography/SectionTitle";
import ServiceCard from "./ServiceCard";
import { ourServices } from "../../data";

const OurServices = () => {
  return (
    <section>
      <SectionTitle title="Our Services" />
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-10 lg:grid-cols-3">
        {ourServices.map(({ title, description }) => (
          <ServiceCard key={title} title={title} description={description} />
        ))}
      </div>
    </section>
  );
};

export default OurServices;
