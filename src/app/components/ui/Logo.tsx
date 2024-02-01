import Link from "next/link";
import React from "react";

function Logo() {
  return (
    <Link href="/" className="text-xl font-bold sm:text-2xl">
      Estate<span className="text-primary">Agency</span>
    </Link>
  );
}

export default Logo;
