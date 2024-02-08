"use client";
import React from "react";
import LocationMap from "@/app/components/contactUs/LocationMap";
import InquiryForm from "@/app/components/form/InquiryForm";
import ContactInfo from "@/app/components/contactUs/ContactInfo";
import Breadcrumb from "@/app/components/navigation/Breadcrumb";
import SectionTitle from "@/app/components/ui/typography/SectionTitle";

const Contact = () => {
  return (
    <div className="container relative py-4 lg:py-8">
      <div className="flex justify-between gap-5">
        <SectionTitle
          title="Contact US"
          subtitle="We are closer than you think"
        />
        <div className=" lg:py-4">
          <Breadcrumb />
        </div>
      </div>
      <div className="py-10">
        <LocationMap />
      </div>
      <div className="flex flex-col gap-4 md:flex-row md:gap-8">
        <div className="flex-1">
          <InquiryForm />
        </div>
        <div className="flex-1 py-4 md:py-0">
          <ContactInfo />
        </div>
      </div>
    </div>
  );
};

export default Contact;
