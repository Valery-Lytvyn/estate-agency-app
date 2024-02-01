import React from "react";

function SectionTitle({ title }: { title: string }) {
  return (
    <h2 className="my-5 border-l-4 border-primary pl-1 text-2xl font-extrabold md:my-10 md:text-4xl">
      {title}
    </h2>
  );
}

export default SectionTitle;
