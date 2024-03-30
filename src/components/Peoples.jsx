import React from "react";
import Title from "./Title";
import { CiSearch } from "react-icons/ci";
import PeoplesItem from "./PeoplesItem";
function Peoples() {
  return (
    <div className="w-1/3 p-4 rounded-2xl bg-white">
      <Title title="People" />
      <div className="py-3 px-3 border-2 border-slate-400 rounded-lg w-full flex items-center gap-4">
        <CiSearch className="text-2xl" />
        <input
          type="text"
          className="w-full outline-none text-xl"
          placeholder="Search"
        />
      </div>
      <div className="flex flex-col gap-4 mt-5">
        <PeoplesItem />
        <PeoplesItem />
        <PeoplesItem />
        <PeoplesItem />
        <PeoplesItem />
        <PeoplesItem />
      </div>
    </div>
  );
}
export default Peoples;