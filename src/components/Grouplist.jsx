import React from "react";

function Grouplist() {
  return (
    <div className="flex gap-4 w-[400px] mt-5">
      <div>
        <img src="group.png" alt="" />
      </div>
      <div>
        <button className="font-secondary font-semibold text-lg">
          Johnson & Johnson
        </button>
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

export default Grouplist;
