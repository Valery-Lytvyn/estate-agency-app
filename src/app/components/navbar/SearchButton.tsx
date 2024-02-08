import React from "react";
import { IoSearchSharp as SearchIcon } from "react-icons/io5";

const SearchButton = () => {
  return (
    <button className="group rounded-md bg-primary p-2 text-white">
      <SearchIcon className="text-2xl group-hover:scale-105" />
    </button>
  );
};

export default SearchButton;
