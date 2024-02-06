"use client";
import PropertyTile from "@/app/components/PropertyTile";
import BackLink from "@/app/components/ui/BackLink";
import SectionTitle from "@/app/components/ui/typography/SectionTitle";
import { PropertyDetailsType } from "@/app/types";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const properties: PropertyDetailsType[] = [
  {
    id: "1",
    agentId: "1",
    bgImg:
      "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    slideImg:
      "https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    location: "Redland, Queensland",
    postcode: "78345",
    number: "277",
    addressOne: "East",
    addressTwo: "Wellington Point",
    status: "Sale",
    type: "House",
    price: 220000,
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
  },
  {
    id: "2",
    agentId: "2",
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
  },
  {
    id: "3",
    agentId: "3",
    bgImg:
      "https://images.pexels.com/photos/462205/pexels-photo-462205.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    slideImg:
      "https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    location: "Doral, Florida",
    postcode: "78345",
    number: "245",
    addressOne: "Azabu",
    addressTwo: "Nishi Park Let",
    status: "Sale",
    type: "House",
    price: 320000,
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
  },
  {
    id: "4",
    agentId: "1",
    bgImg:
      "https://images.pexels.com/photos/323776/pexels-photo-323776.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    slideImg:
      "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    location: "Doral, Florida",
    postcode: "78345",
    number: "204",
    addressOne: "Montal",
    addressTwo: "South Bela Two",
    status: "Sale",
    type: "House",
    price: 385000,
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
  },
  {
    id: "5",
    agentId: "2",
    bgImg:
      "https://images.pexels.com/photos/2119713/pexels-photo-2119713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    slideImg:
      "https://images.pexels.com/photos/2098913/pexels-photo-2098913.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    location: "Doral, Florida",
    postcode: "78345",
    number: "582",
    addressOne: "Rina",
    addressTwo: "Venda Road Five",
    status: "Rent",
    type: "Apartment",
    price: 180,
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
  },
  {
    id: "6",
    agentId: "3",
    bgImg:
      "https://images.pexels.com/photos/2587054/pexels-photo-2587054.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    slideImg:
      "https://images.pexels.com/photos/2440471/pexels-photo-2440471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    location: "Doral, Florida",
    postcode: "78345",
    number: "582",
    addressOne: "Alira",
    addressTwo: "Roan Road One",
    status: "Rent",
    type: "House",
    price: 320,
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
  },
];

function Properties() {
  const [propertyList, setPropertyList] =
    useState<PropertyDetailsType[]>(properties);
  const path = usePathname();
  return (
    <main>
      <div className="container relative py-4 lg:py-8">
        <div className="flex justify-between gap-5">
          <SectionTitle title="our best offers" />
          <div className=" lg:py-4">
            <BackLink name={path} />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
          {propertyList &&
            propertyList.map((property) => (
              <PropertyTile key={property.id} property={property} />
            ))}
        </div>
      </div>
    </main>
  );
}
export default Properties;
