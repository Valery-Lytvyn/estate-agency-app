import React, { memo } from "react";

interface FormSubmitButtonProps {
  title: string;
  clickHandler: () => void;
}

const FormSubmitButton = ({ title, clickHandler }: FormSubmitButtonProps) => {
  return (
    <button
      type="submit"
      className="transition-500 w-full self-center bg-black px-4 py-3 font-light capitalize text-white hover:bg-green-500 hover:text-black md:w-56 "
      onClick={clickHandler}
    >
      {title}
    </button>
  );
};

export default memo(FormSubmitButton);
