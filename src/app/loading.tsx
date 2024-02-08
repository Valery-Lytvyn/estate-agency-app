import React from "react";
import { BeatLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="flex h-full items-center justify-center">
      <BeatLoader color="var(--primary)" />
    </div>
  );
};

export default Loading;
