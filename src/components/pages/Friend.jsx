import React from "react";
import { CiSearch } from "react-icons/ci";
import Title from "../Title";
import FriendsItem from "../FriendsItem";
function Friend() {
  return (
    <div className="w-full p-4 bg-lime-300 px-80">
      <Title title="Friend" />
      <div className="py-3 px-3 border-2 border-slate-400 rounded-lg w-full flex items-center gap-4">
        <CiSearch className="text-2xl" />
        <input
          type="text"
          className="w-full outline-none text-xl bg-transparent"
          placeholder="Search"
        />
      </div>
      <div className="flex flex-col gap-7 mt-7">
        <FriendsItem />
        <FriendsItem />
        <FriendsItem />
        <FriendsItem />
        <FriendsItem />
        <FriendsItem />
        <FriendsItem />
        <FriendsItem />
        <FriendsItem />
        <FriendsItem />
      </div>
    </div>
  );
}

export default Friend;
