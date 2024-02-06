import React from "react";

function SectionSubTitle({ subtitle }: { subtitle: string }) {
  return (
    <h3 className="relative my-4 w-fit text-2xl font-medium text-black">
      {subtitle}
      <span className="absolute -bottom-1 left-0 min-h-0.5 w-1/3 bg-primary" />
    </h3>
  );
}

export default SectionSubTitle;
