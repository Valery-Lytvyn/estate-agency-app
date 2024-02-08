"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import AgentContact from "@/app/components/agent/AgentContact";
import PropertyDetails from "@/app/components/property/PropertyDetails";
import Breadcrumb from "@/app/components/navigation/Breadcrumb";
import SectionTitle from "@/app/components/ui/typography/SectionTitle";
import { PropertyDetailsType } from "@/app/types";
import { properties } from "@/app/data";
import Loading from "@/app/loading";
import PropertyCarousel from "@/app/components/ui/PropertyCarousel";

const SingleProperty = () => {
  const [propertyDetails, setPropertyDetails] =
    useState<PropertyDetailsType | null>(null);

  const { id } = useParams();
  useEffect(() => {
    if (id) {
      const currentProperty = properties.find((property) => property.id === id);
      if (currentProperty) {
        setPropertyDetails(currentProperty);
      }
    }
  }, [id]);

  if (!propertyDetails) {
    return <Loading />;
  }

  const {
    id: propertyId,
    agentId,
    bgImg,
    slideImg,
    location,
    number,
    addressOne,
    addressTwo,
    status,
    type,
    price,
    area,
    beds,
    baths,
    garages,
    description,
    amenities,
  } = propertyDetails;
  const propertyTitle = `${number} ${addressOne} ${addressTwo}`;
  return (
    <div className="container relative py-4 lg:py-8">
      <section className="flex justify-between gap-5">
        <SectionTitle title={propertyTitle} subtitle={location} />
        <div className=" lg:py-4">
          <Breadcrumb link="/properties" name={propertyTitle} />
        </div>
      </section>
      <div className="flex flex-col gap-4">
        <PropertyCarousel slides={[bgImg, slideImg]} />
        <PropertyDetails
          id={propertyId}
          status={status}
          price={price}
          location={location}
          type={type}
          area={area}
          beds={beds}
          baths={baths}
          garages={garages}
          description={description}
          amenities={amenities}
        />
        <AgentContact agentId={agentId} />
      </div>
    </div>
  );
};

export default SingleProperty;
