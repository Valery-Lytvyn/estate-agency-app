import React from "react";
import { priceConverter } from "../../utils";
import SectionSubtitle from "../ui/typography/SectionSubtitle";
import { MdKeyboardArrowRight as Mark } from "react-icons/md";

interface PropertyDetailsProps {
  id: string;
  location: string;
  type: string;
  status: string;
  price: number;
  area: number;
  beds: number;
  baths: number;
  garages: number;
  description: string;
  amenities: string[];
}

const PropertyDetails = ({
  id,
  price,
  location,
  type,
  status,
  area,
  beds,
  baths,
  garages,
  description,
  amenities,
}: PropertyDetailsProps) => {
  const formattedPrice = priceConverter(price);

  return (
    <div className="grid gap-10 md:grid-cols-3">
      <div>
        <div className="flex gap-2 py-10">
          <p className=" text-3xl font-extrabold text-primary">
            {formattedPrice}
          </p>
          <span className="self-end">/{status}</span>
        </div>
        <section className="flex flex-col gap-4">
          <SectionSubtitle subtitle="Quick Summary" />
          <div className="grid grid-cols-2">
            <p className="text-black">Property ID</p>
            <p className="text-end">{id}</p>
            <p className="text-black">Location</p>
            <p className="text-end">{location}</p>
            <p className="text-black">Property type</p>
            <p className="text-end">{type}</p>
            <p className="text-black">Area</p>
            <p className="text-end">
              {area}m<span className="align-super text-sm">2</span>
            </p>
            <p className="text-black">Beds</p>
            <p className="text-end">{beds}</p>
            <p className="text-black">Baths</p>
            <p className="text-end">{baths}</p>
            <p className="text-black">Garages</p>
            <p className="text-end">{garages}</p>
          </div>
        </section>
      </div>
      <div className="col-span-2">
        <div className="flex h-full flex-col justify-between gap-4">
          <section>
            <SectionSubtitle subtitle="Property description" />
            <p className="text-justify">{description}</p>
          </section>
          <section>
            <SectionSubtitle subtitle="Amenities" />
            <ul className="grid grid-cols-3">
              {amenities.map((amenity) => (
                <li key={amenity} className="flex items-center">
                  <Mark className="text-primary" />
                  {amenity}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
