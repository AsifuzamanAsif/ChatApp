import React from "react";

const PeoplesItem = ({ userData }) => {
  console.log(userData);
  return (
    <div className="flex gap-4">
      <div>
        <img src="pic.png" alt="" />
      </div>
      <div className="flex flex-col justify-center">
        <h2 className="font-secondary font-semibold text-lg">Paula Mora</h2>
      </div>
      <button className="ml-auto font-secondary font-normal text-lg text-[#32375C]">
        Add
      </button>
    </div>
  );
}
export default PeoplesItem;
