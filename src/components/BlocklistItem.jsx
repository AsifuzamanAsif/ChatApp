import React from "react";

function BlocklistItem() {
  return (
    <div className="flex gap-4">
      <div>
        <img src="pic.png" alt="pic" />
      </div>
      <div className="flex flex-col justify-center">
        <h2 className="font-secondary font-semibold text-lg">Paula Mora</h2>
      </div>
      <div className="ml-auto flex flex-col">
        <button className="font-secondary font-normal text-lg">Unblock</button>
      </div>
    </div>
  );
}
export default BlocklistItem;
