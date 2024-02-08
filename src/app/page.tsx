import React from "react";
import OurServices from "@/app/components/ourServices/OurServices";
import MainCarousel from "@/app/components/ui/MainCarousel";
import { slides } from "@/app/data";

const Home = () => {
  return (
    <>
      <MainCarousel slides={slides} />
      <div className="container py-4 lg:py-8">
        <OurServices />
      </div>
    </>
  );
};

export default Home;
