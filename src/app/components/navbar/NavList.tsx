"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { navListData } from "@/app/data";

const NavList = () => {
  const pathName = usePathname();

  return (
    <ul className=" flex flex-col gap-5 md:flex-row md:items-center">
      {navListData.map(({ id, path, name }) => (
        <li
          key={id}
          className="relative flex items-center  py-1 text-xl font-bold hover:text-primary "
        >
          <Link href={path}>{name}</Link>
          <div
            className={`transition-500 absolute inset-x-0 bottom-0 min-h-0.5 w-0 bg-primary
${pathName === path ? "w-full" : null}
`}
          />
        </li>
      ))}
    </ul>
  );
};

export default NavList;
