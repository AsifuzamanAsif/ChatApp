import React from "react";

function FrendRequestItem({ reqList }) {
  console.log(reqList);
  return (
    <div className="flex gap-4">
      <div className="w-12 h-12 rounded-full overflow-hidden">
        <img src={reqList.profile_picture} alt="pic" />
      </div>
      <div className="flex flex-col justify-center">
        <h2 className="font-secondary font-semibold text-lg">
          {reqList?.username}
        </h2>
      </div>
      <div className="ml-auto flex flex-col">
        <button className="px-3 bg-primary text-white rounded font-secondary font-normal text-lg">
          Confirm
        </button>
        <button className="font-secondary font-normal text-lg">Cancel</button>
      </div>
    </div>
  );
}
export default FrendRequestItem;
