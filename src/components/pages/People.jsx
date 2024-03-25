import React from "react";
import { CiSearch } from "react-icons/ci";
import Title from "../Title";
import PeoplesItem from "../PeoplesItem";
function People() {
  return (
    <div className="w-full p-4 rounded-2xl bg-white px-80">
      <Title title="People" />
      <div className="py-3 px-3 border-2 border-slate-400 rounded-lg w-full flex items-center gap-4">
        <CiSearch className="text-2xl" />
        <input
          type="text"
          className="w-full outline-none text-xl"
          placeholder="Search"
        />
      </div>
      <div className="flex flex-col gap-7 mt-7">
        <PeoplesItem />
        <PeoplesItem />
        <PeoplesItem />
        <PeoplesItem />
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
export default People;
