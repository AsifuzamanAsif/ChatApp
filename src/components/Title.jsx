import React from "react";
import { IoMdMore } from "react-icons/io";
function Title({ title }) {
  return (
    <div className="flex justify-between pb-4">
      <h2 className="title font-secondary font-semibold text-2xl">{title}</h2>
      <button className="text-xl">
        <IoMdMore />
      </button>
    </div>
  );
}

export default Title;
