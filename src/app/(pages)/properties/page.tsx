"use client";
import React from "react";
import PropertyCard from "@/app/components/property/PropertyCard";
import Breadcrumb from "@/app/components/navigation/Breadcrumb";
import SectionTitle from "@/app/components/ui/typography/SectionTitle";
import { properties } from "@/app/data";

const Properties = () => {
  return (
    <main>
      <div className="container relative py-4 lg:py-8">
        <div className="flex justify-between gap-5">
          <SectionTitle title="our best offers" />
          <div className=" lg:py-4">
            <Breadcrumb />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </main>
  );
};
export default Properties;
