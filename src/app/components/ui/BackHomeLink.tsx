import Link from "next/link";
import React from "react";
import { IoHomeSharp } from "react-icons/io5";

function BackHomeLink({ path }: { path: string }) {
  return (
    <Link href="/" className="flex items-center">
      <IoHomeSharp className="text-black transition hover:text-primary" />
      <p className="text-sm">{path}</p>
    </Link>
  );
}

export default BackHomeLink;
