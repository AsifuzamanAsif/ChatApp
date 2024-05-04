import React from "react";
import { AiFillEdit } from "react-icons/ai";
import { useSelector } from "react-redux";
// import { useState, createRef } from "react";
// import Cropper, { ReactCropperElement } from "react-cropper";
// import "cropperjs/dist/cropper.css";
// import { Cropper } from "react-cropper";
function User() {
  const user = useSelector((state) => state.userSlice.user);
  return (
    <div className="screen">
      <div className="Pheader">
        <h4 className="mt-6">My Profile</h4>
      </div>
      <img
        className="background"
        src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiKM6rRET9CTBdVhMPRZIYaT3fHRVVEoIAZ9D3lR9da2ZlTlRdoK1X7E9mOcp7cNWP912Cq-fkhmdpD6byoX5EoDNkOHaoZa0xKcOx-ccCWxNU8Mr9TabV6dnRPqdhMD4T0EwbcX0Alxp9Z-85RRY_T8fynoHjQI38wuQcnTfwJL88JiGYW2x6jkmDR/s1600/bg-new-1.jpg"
      />
      <div className="slider">
        <div className="header1">
          <div className="w-16 h-16 m-auto mt-2 ">
            <img src={user.photoURL} alt="Photo" className="w-full rounded" />
          </div>
          {user.displayName}
        </div>
        <div className="header2">
          Email : {user.email}
          <div className="flex gap-2 px-8 text-lg mt-3">
            <AiFillEdit />
            <p className="text-base">Bio</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default User;
