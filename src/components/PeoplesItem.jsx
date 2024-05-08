import React from "react";
const PeoplesItem = ({ userData }) => {
  console.log(userData);
  return (
    <div className="flex gap-4">
      <div className="w-12 h-12">
        <img
          src={userData.profile_picture}
          alt="pic"
          className=" rounded-[50%] w-full"
        />
      </div>
      <div className="flex flex-col justify-center">
        <h2 className="font-secondary font-semibold text-lg">
          {userData.username}
        </h2>
      </div>
      <button className="ml-auto font-secondary font-normal text-lg text-[#32375C]">
        Add Request
      </button>
    </div>
  );
};
export default PeoplesItem;
