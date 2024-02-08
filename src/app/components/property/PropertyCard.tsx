import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";
import { PropertyDetailsType } from "../../types";
import { priceConverter } from "../../utils";
import { propertyDetails } from "@/app/utils/motionVariants";

interface PropertyCardProps {
  property: PropertyDetailsType;
}

const PropertyCard = ({ property }: PropertyCardProps) => {
  const {
    id,
    bgImg,
    number,
    addressOne,
    addressTwo,
    type,
    price,
    area,
    beds,
    baths,
    garages,
  } = property;

  const formattedPrice = priceConverter(price);

  return (
    <div className="group relative min-h-[600px] overflow-hidden">
      <Link href={`/properties/${id}`}>
        <div className="absolute inset-0 bg-dark-gradient">
          <Image
            src={bgImg}
            alt={`${addressOne} ${addressTwo}`}
            priority
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="-z-20 h-auto w-full object-cover transition group-hover:scale-110"
          />
        </div>
        <div className="absolute inset-0 z-20">
          <motion.div
            className="flex h-full flex-col justify-end gap-5 "
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
};

export default PropertyCard;
