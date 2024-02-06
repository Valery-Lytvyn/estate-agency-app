import React from "react";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className="my-2 border-l-4 border-primary py-2 pl-1 md:my-10">
      <h2 className="text-2xl font-extrabold capitalize md:text-4xl">
        {title}
      </h2>
      {subtitle && <p className="pt-2">{subtitle}</p>}
    </div>
  );
}

export default SectionTitle;
