import Image from "next/image";
import React from "react";

function AboutSection() {
  return (
    <div className="flex flex-col-reverse gap-10 pt-14 md:flex-row">
      <div className="stretch relative min-h-[400px] flex-1 pt-4">
        <Image
          src="https://images.pexels.com/photos/7599735/pexels-photo-7599735.jpeg"
          alt="keys"
          fill
          priority
          className="h-full object-cover"
        />
      </div>
      <div className="flex-1">
        <p className="pb-4 text-right text-2xl  font-bold">
          EstateAgency <br />
          <span className="text-black">Exclusive Property</span>
        </p>

        <p className="border-y-4 border-primary text-justify">
          Established in 2015, our fictitious estate agency has been a stalwart
          in the real estate arena. With a seasoned team, we specialize in
          property sales, purchases, leasing, and management. Our client-centric
          approach emphasizes understanding individual needs, ensuring a
          personalized experience. Key Highlights: Expertise: Our experienced
          team navigates market complexities adeptly. Comprehensive Services:
          From dream homes to investments, we cover it all. Client-Centric:
          Personalized service is at the core of our philosophy. Innovative
          Marketing: Modern strategies maximize property exposure. Community
          Engagement: We&apos;re not just an agency; we&apos;re a community
          member. Technology Integration: Streamlined processes through
          cutting-edge tech. Vision for the Future: Committed to growth and
          staying ahead of industry trends. This concise version captures the
          essence of the fictitious estate agency&apos;s journey since 2015.
        </p>
      </div>
    </div>
  );
}

export default AboutSection;
