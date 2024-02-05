import React from "react";

function SectionTitle({ title }: { title: string }) {
  return (
    <h2 className="my-2 border-l-4 border-primary py-2 pl-1 text-2xl font-extrabold capitalize md:my-10 md:text-4xl">
      {title}
    </h2>
  );
}

export default SectionTitle;
