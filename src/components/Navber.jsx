import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { IoChatboxOutline } from "react-icons/io5";
import { IoPeopleOutline } from "react-icons/io5";
import { RiAccountCircleLine } from "react-icons/ri";
import { CgMoreVerticalO } from "react-icons/cg";
import { useSelector } from "react-redux";
function Navber() {
  const user = useSelector((state) => state.userSlice.user);
  console.log(user);
  return (
    <nav className="w-48 min-h-screen bg-slate-300 shadow-[6px_0px_10px_-7px_rgba(0,0,0,0.62)];">
      <div>
        <Link to="/Newsfeed">
          <img
            src="/ChatApp_Logo-removebg-preview.png"
            alt="Logo"
            className="w-48 text-center"
          />
        </Link>
      </div>
      <div className="pl-8">
        <ul className="flex flex-col gap-4 text-lg font-secondary font-semibold ">
          <li>
            <Link
              to="/"
              className="flex items-center gap-3 py-3 px-3 bg-primary text-white rounded-lg w-fit"
            >
              <FaHome />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link
              to="/Chat"
              className="flex items-center gap-3 py-3 px-3 rounded-lg w-fit{ hover:bg-primary text-white rounded-lg}"
            >
              <IoChatboxOutline />
              <span>Chat</span>
            </Link>
          </li>
          <li>
            <Link
              to="/Group"
              className="flex items-center gap-3 py-3 px-3 rounded-lg w-fit"
            >
              <IoPeopleOutline />
              Group
            </Link>
          </li>
          <li>
            <Link
              to="/Friend"
              className="flex items-center gap-3 py-3 px-3 rounded-lg w-fit"
            >
              <RiAccountCircleLine />
              Friends
            </Link>
          </li>
          <li>
            <Link
              to="/People"
              className="flex items-center gap-3 py-3 px-3 rounded-lg w-fit"
            >
              <CgMoreVerticalO />
              People
            </Link>
          </li>
          <li className="flex">
            <Link
              to="/User"
              className="flex items-center gap-2 py-3 pt-60 rounded-lg w-fit"
            >
              <img
                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjxivAs4UknzmDfLBXGMxQkayiZDhR2ftB4jcIV7LEnIEStiUyMygioZnbLXCAND-I_xWQpVp0jv-dv9NVNbuKn4sNpXYtLIJk2-IOdWQNpC2Ldapnljifu0pnQqAWU848Ja4lT9ugQex-nwECEh3a96GXwiRXlnGEE6FFF_tKm66IGe3fzmLaVIoNL/s1600/img_avatar.png"
                alt="userpic"
                className="w-[40px] h-[40px] rounded-[50%] border-2 border-solid"
              />
              <div>
                <p className="text-sm font-primary font-semibold text-primary">
                  {user.displayName}
                </p>
                <p className="text-sm font-primary font-semibold text-primary">
                  Edit Profile
                </p>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navber;
