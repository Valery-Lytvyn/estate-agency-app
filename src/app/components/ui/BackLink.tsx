import Link from "next/link";
import React from "react";
import { IoHomeSharp } from "react-icons/io5";

interface BackLinkProps {
  path?: string;
  name: string;
}

function BackLink({ path, name }: BackLinkProps) {
  return (
    <div className="flex items-center">
      <Link href="/">
        <IoHomeSharp className=" transition hover:text-black" />
      </Link>
      {path && (
        <p className="text-sm  transition hover:text-black">
          <Link href={path}>{path}</Link>
        </p>
      )}
      <p className="text-sm">{name}</p>
    </div>
  );
}

export default BackLink;
