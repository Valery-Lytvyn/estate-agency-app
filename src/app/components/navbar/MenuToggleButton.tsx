import React from "react";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

interface MenuToggleButtonProps {
  toggleHandler: () => void;
  isMenuOpen: boolean;
}

function MenuToggleButton({
  toggleHandler,
  isMenuOpen,
}: MenuToggleButtonProps) {
  return (
    <button
      onClick={toggleHandler}
      className={`transition-500 rounded-md border px-3 py-1 ${isMenuOpen ? "border-3 border-black" : null}`}
    >
      {isMenuOpen ? (
        <IoClose className=" text-2xl font-bold" />
      ) : (
        <IoMenu className=" text-2xl font-bold" />
      )}
    </button>
  );
}

export default MenuToggleButton;
