import React from "react";
import { useSelector } from "react-redux";
function User() {
  const user = useSelector((state) => state.userSlice.user);
  return (
    <div className="wrap font-primary bg-slate-600">
      <div className="profile ">
        <img src="/user.png" className="w-[80px] h-[70px] pt-2" />
        <div className="pt-3 "></div>
      </div>
      <div className="links"></div>
    </div>
  );
}

export default User;
