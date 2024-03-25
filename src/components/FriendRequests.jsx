import React from "react";
import Title from "./Title";

import FrendRequestItem from "./FrendRequestItem";
function FrendRequests() {
  return (
    <div className="w-1/3 p-4 rounded-2xl bg-white">
      <Title title="Friend Request" />

      <div className="flex flex-col  gap-4 mt-5">
        <FrendRequestItem />
        <FrendRequestItem />
        <FrendRequestItem />
        <FrendRequestItem />
        <FrendRequestItem />
        <FrendRequestItem />
      </div>
    </div>
  );
}

export default FrendRequests;
