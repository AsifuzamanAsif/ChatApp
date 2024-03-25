import React from "react";

function GroupItems() {
  return (
    <div className="flex gap-4">
      <div>
        <img src="pic.png" alt="" />
      </div>
      <div>
        <h2 className="font-secondary font-semibold text-lg">Paula Mora</h2>
        <p className="font-secondary text-brand font-normal text-sm">
          Love You.....
        </p>
      </div>
      <p className="ml-auto font-secondary font-normal text-sm text-brand">
        10:30 PM
      </p>
    </div>
  );
}
export default GroupItems;
