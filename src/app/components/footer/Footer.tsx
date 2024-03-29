import React from "react";
import Link from "next/link";
import SocialIcons from "../ui/SocialIcons";
import { navListData } from "../../data";

const Footer = () => {
  return (
    <div className="border-b border-primary shadow-inner ">
      <div className="container flex flex-col items-center gap-5 py-5 md:gap-10 md:py-10">
        <ul className="flex  gap-2 sm:flex-row md:gap-10">
          {navListData.map(({ id, path, name }) => (
            <li
              key={id}
              className="flex items-center font-semibold hover:text-primary sm:text-lg"
            >
              <Link href={path}>{name}</Link>
            </li>
          ))}
        </ul>
        <SocialIcons variants="hover:text-primary" />
        <p className="text-center">
          Copyright Estate Agency. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
