import React from "react";
import { IoMdMore } from "react-icons/io";
function FriendsItem({data}) {
  return (
    <div className="flex gap-4">
      <div className="w-12 h-12 rounded-full overflow-hidden">
        <img src={data?.friendImg} alt="" />
      </div>
      <div className="flex flex-col justify-center">
        <h2 className="font-secondary font-semibold text-lg">{data?.friendName}</h2>
      </div>
      <button className="ml-auto">
        <IoMdMore />
      </button>
    </div>
  );
}
export default FriendsItem;
