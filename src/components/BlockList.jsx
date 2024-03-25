import React from "react";
import Title from "./Title";

import BlocklistItem from "./BlocklistItem";
function BlockList() {
  return (
    <div className="w-1/3 p-4 rounded-2xl bg-white">
      <Title title="Block List" />

      <div className="flex flex-col  gap-4 mt-5">
        <BlocklistItem />
        <BlocklistItem />
        <BlocklistItem />
        <BlocklistItem />
        <BlocklistItem />
        <BlocklistItem />
      </div>
    </div>
  );
}

export default BlockList;
