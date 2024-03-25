import React from "react";
import { IoMdMore } from "react-icons/io";
function FriendsItem() {
  return (
    <div className="flex gap-4">
      <div>
        <img src="pic.png" alt="" />
      </div>
      <div className="flex flex-col justify-center">
        <h2 className="font-secondary font-semibold text-lg">Paula Mora</h2>
      </div>
      <button className="ml-auto">
        <IoMdMore />
      </button>
    </div>
  );
}
export default FriendsItem;
