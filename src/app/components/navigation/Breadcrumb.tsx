"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { IoHomeSharp } from "react-icons/io5";

interface BreadcrumbProps {
  link?: string;
  name?: string;
}

const Breadcrumb = ({ link, name }: BreadcrumbProps) => {
  const pathname = usePathname();

  return (
    <div className="flex items-center space-x-2">
      <Link href="/">
        <IoHomeSharp className=" transition hover:text-black" />
      </Link>
      {link && (
        <p className="text-sm  transition hover:text-black">
          <Link href={link}>{link}</Link>
        </p>
      )}
      <p className="text-sm">{name ? `/${name}` : pathname}</p>
    </div>
  );
};

export default Breadcrumb;
