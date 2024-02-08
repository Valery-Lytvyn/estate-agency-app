import Link from "next/link";
import React from "react";

const BrandLogo = () => {
  return (
    <Link href="/" className="text-xl font-bold sm:text-2xl">
      Estate<span className="text-primary">Agency</span>
    </Link>
  );
};

export default BrandLogo;
