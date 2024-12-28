import React from "react";
import SearchInput from "./SearchInput";
import Conversations from "./Conversations";
import LogoutBtn from "./LogoutBtn";

const Sidebar = () => {
  return (
    <div className="border-r border-slate-500 p-4 flex flex-col ">
      <SearchInput />
      <div className="divider px-3" />
      <div className="overflow-y-auto">
        <Conversations />
        <Conversations />
        <Conversations />
      </div>
      <LogoutBtn />
    </div>
  );
};

export default Sidebar;
