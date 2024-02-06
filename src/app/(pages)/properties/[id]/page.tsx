"use client";
import React, { useState } from "react";
import Image from "next/image";
import AgentContactSection from "@/app/components/AgentContactSection";
import PropertyInfo from "@/app/components/PropertyInfo";
import BackLink from "@/app/components/ui/BackLink";
import SectionTitle from "@/app/components/ui/typography/SectionTitle";
import { PropertyDetailsType } from "@/app/types";

const property = {
  id: "2",
  agentId: "1",
  bgImg:
    "https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  slideImg:
    "https://images.pexels.com/photos/2079249/pexels-photo-2079249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  location: "Doral, Florida",
  postcode: "78345",
  number: "157",
  addressOne: "West",
  addressTwo: "Central Park",
  status: "Rent",
  type: "House",
  price: 120,
  area: 340,
  beds: 2,
  baths: 4,
  garages: 1,
  description:
    "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit ametaliquam vel, ullamcorper sit amet ligula. Cras ultricies ligula sed magna dictum porta. Curabitur aliquet quam id dui posuere blandit. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar quam id dui posuere blandit.",
  details:
    "Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Donec rutrum congue leo eget malesuada. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Donec sollicitudin molestie malesuada.",
  amenities: [
    "Balcony",
    "Outdoor Kitchen",
    "Cable TV",
    "Deck",
    "Tennis Courts",
    "Internet",
    "Parking",
    "Sun Room",
    "Concrete Flooring",
  ],
};

function SingleProperty() {
  const [propertyDetails, setPropertyDetails] =
    useState<PropertyDetailsType>(property);

  const {
    id,
    agentId,
    bgImg,
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
    details,
    amenities,
  } = propertyDetails;

  return (
    <div className="container relative py-4 lg:py-8">
      <section className="flex justify-between gap-5">
        <SectionTitle
          title={`${number} ${addressOne} ${addressTwo}`}
          subtitle={location}
        />
        <div className=" lg:py-4">
          <BackLink path="/properties" name="/" />
        </div>
      </section>
      <div className="flex flex-col gap-4">
        <div className="relative h-[400px] w-full self-center sm:h-[800px] sm:w-3/4">
          <Image
            src={bgImg}
            alt={`${addressOne} ${addressTwo}`}
            fill
            priority
            sizes="100wv"
            className="h-auto w-full object-cover"
          />
        </div>
        <PropertyInfo
          id={id}
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
        <AgentContactSection agentId={agentId} />
      </div>
    </div>
  );
}

export default SingleProperty;
