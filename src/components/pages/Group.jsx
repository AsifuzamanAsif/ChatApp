import React from "react";
import ChatBox from "../ChatBox";
import { FaSearch } from "react-icons/fa";
import Grouplist from "../Grouplist";

function Group() {
  return (
    <div className="bg-slate-200 w-full flex">
      <div className="px-6">
        <h2 className="font-semibold font-secondary text-xl py-7">Group</h2>
        <div className="py-3 px-3 border-2 border-slate-400 rounded-lg w-full flex items-center gap-4">
          <FaSearch className="text-2xl" />
          <input
            type="text"
            className="w-full outline-none bg-inherit text-xl"
            placeholder="Search"
          />
        </div>
        <Grouplist/>
        <Grouplist/>
        <Grouplist/>
        <Grouplist/>
        <Grouplist/>
      </div>
      <div className="w-full  h-screen">
        <ChatBox />
      </div>
    </div>
  );
}

export default Group;
