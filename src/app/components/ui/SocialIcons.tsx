import React from "react";
import { socialMediaIconArr } from "@/app/data";

const SocialIcons = ({ variants }: { variants?: string }) => {
  return (
    <ul className="flex gap-5">
      {socialMediaIconArr.map(({ icon, path }) => (
        <li
          key={path}
          className={`transition-500 flex items-center font-bold hover:scale-105  ${variants} rounded-full border border-transparent p-2 hover:border-primary`}
        >
          <a href={path} target="_blank">
            {icon}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialIcons;
