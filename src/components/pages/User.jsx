import React from "react";
import { useSelector } from "react-redux";
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
          <img
            className="profilepic"
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjxivAs4UknzmDfLBXGMxQkayiZDhR2ftB4jcIV7LEnIEStiUyMygioZnbLXCAND-I_xWQpVp0jv-dv9NVNbuKn4sNpXYtLIJk2-IOdWQNpC2Ldapnljifu0pnQqAWU848Ja4lT9ugQex-nwECEh3a96GXwiRXlnGEE6FFF_tKm66IGe3fzmLaVIoNL/s1600/img_avatar.png"
          />
          <h3>{user.displayName}</h3>
        </div>
        <div className="header2">
          <p>
            <br /> Graphic Designer
            <br /> Text
            <br />
            text
          </p>
          text
        </div>
      </div>
    </div>
  );
}
export default User;
