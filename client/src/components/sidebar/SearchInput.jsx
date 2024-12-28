import React from "react";
import { FiSearch } from "react-icons/fi";

const SearchInput = () => {
  return (
    <form className="flex items-center gap-1">
      <input
        type="text"
        placeholder="Search......."
        className="input input-bordered rounded-full"
      />
      <button className="btn btn-circle">
        <FiSearch />
      </button>
    </form>
  );
};

export default SearchInput;
