import React from "react";
import { PropertyDetailsType } from "../types";
import Image from "next/image";
import { priceConverter } from "../utils";
import { FaArrowRight } from "react-icons/fa6";
import { animate, motion } from "framer-motion";
import Link from "next/link";

interface PropertyTileProps {
  property: PropertyDetailsType;
}
const propertyDetails = {
  initial: {
    translateY: "5rem",
    transition: { duration: 0.5 },
  },
  animate: {
    translateY: "0rem",
    transition: { duration: 0.5 },
  },
};

function PropertyTile({ property }: PropertyTileProps) {
  const {
    bgImg,
    slideImg,
    location,
    postcode,
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
  } = property;
  const formattedPrice = priceConverter(price);
  const currentName = `${number}${addressOne}${addressTwo}`;
  return (
    <div className="group relative min-h-[600px] overflow-hidden">
      <Link href={`/properties/${currentName}`}>
        <div className="absolute inset-0 bg-dark-gradient">
          <Image
            src={bgImg}
            alt={`${addressOne} ${addressTwo}`}
            priority
            fill
            sizes="100wv"
            className="-z-20 h-auto w-full object-cover transition group-hover:scale-110"
          />
        </div>
        <div className="absolute inset-0 z-20">
          <motion.div
            className="flex h-full flex-col justify-end gap-5"
            key="propertyDetails"
            initial="initial"
            whileHover="animate"
            variants={propertyDetails}
          >
            <div className="flex flex-col gap-2 p-3">
              <h2 className="text-2xl font-bold text-white">
                {number} {addressOne} <br />
                {addressTwo}
              </h2>
              <div className="min-w-80 rounded-full border border-primary bg-opacity-20 bg-clip-padding backdrop-blur-sm backdrop-filter ">
                <div className="flex  items-center justify-between gap-2 px-4 py-2 text-2xl ">
                  <p>{type}</p>
                  <p className="font-bold text-primary">{formattedPrice}</p>
                </div>
              </div>
              <button className="flex items-center gap-2 text-white hover:font-semibold ">
                Click here to view
                <FaArrowRight />
              </button>
            </div>

            <div className="bg-primary">
              <div className="grid grid-cols-4 px-2 py-1">
                <div className="flex flex-col items-center">
                  <p className="text-sm font-medium">Area</p>
                  <p className="font-thin text-white">
                    {area}m<span className="align-super text-sm">2</span>
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <p className="text-sm font-medium">Beads</p>
                  <p className="font-thin text-white">{beds}</p>
                </div>
                <div className="flex flex-col items-center">
                  <p className="text-sm font-medium">Baths</p>
                  <p className="font-thin text-white">{baths}</p>
                </div>
                <div className="flex flex-col items-center">
                  <p className="text-sm font-medium">Garages</p>
                  <p className="font-thin text-white">{garages}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Link>
    </div>
  );
}

export default PropertyTile;
