import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";

export const socialMediaIconArr = [
  { icon: <FaFacebookF />, path: "https://www.facebook.com" },
  { icon: <FaXTwitter />, path: "https://twitter.com" },
  { icon: <FaInstagram />, path: "https://www.instagram.com" },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com" },
];

function SocialMediaIcons({ variants }: { variants?: string }) {
  return (
    <ul className="flex gap-5">
      {socialMediaIconArr.map(({ icon, path }) => (
        <li
          key={path}
          className={`flex items-center font-bold hover:scale-105  ${variants}`}
        >
          <a href={path} target="_blank">
            {icon}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default SocialMediaIcons;
