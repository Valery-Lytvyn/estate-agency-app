import React from "react";
import SectionTitle from "./ui/typography/SectionTitle";
import ServiceTile from "./ServiceTile";

const ourServices = [
  {
    title: "Life style",
    description:
      "At our real estate agency, we understand that finding the perfect home is not just about the property; it's about embracing a lifestyle. We go beyond traditional real estate transactions, curating experiences that align with the unique preferences and aspirations of our clients.Our approach to selling properties is multifaceted. We believe in showcasing not only the physical attributes of a home but also its story. By emphasizing the lifestyle and distinctive features, we create a compelling narrative that resonates with potential buyers. This personalized touch sets our listings apart and helps clients envision the life they could lead in their new home.",
  },
  {
    title: "Loans",
    description:
      "When it comes to the selling process, we prioritize transparency, communication, and tailored strategies. Our dedicated team works collaboratively with sellers to understand their goals and market their properties effectively. From leveraging cutting-edge marketing techniques to hosting immersive virtual tours, we aim to present each property in its best light, reaching a wide audience of potential buyers.",
  },
  {
    title: "Sell",
    description:
      "We recognize that selling a property is not just a transaction; it's a pivotal moment in someone's life. Our commitment is not only to facilitate the sale but to make the entire process seamless and rewarding. By providing personalized attention, thorough market analysis, and strategic negotiation, we strive to maximize value for our clients. In essence, our real estate agency is not just about buying and selling; it's about creating connections between people and the spaces they call home. We believe in the transformative power of real estate, where each transaction is an opportunity to enhance lives and fulfill dreams. ",
  },
];

function ServicesSection() {
  return (
    <div>
      <SectionTitle title="Our Services" />
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-10 lg:grid-cols-3">
        {ourServices.map(({ title, description }) => (
          <ServiceTile key={title} title={title} description={description} />
        ))}
      </div>
    </div>
  );
}

export default ServicesSection;
