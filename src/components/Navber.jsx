import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { IoChatboxOutline } from "react-icons/io5";
import { IoPeopleOutline } from "react-icons/io5";
import { RiAccountCircleLine } from "react-icons/ri";
import { CgMoreVerticalO } from "react-icons/cg";
function Navber() {
  return (
    <nav className="w-48 h-screen bg-slate-300 shadow-[6px_0px_10px_-7px_rgba(0,0,0,0.62)];">
      <div>
        <Link to="/Newsfeed">
          <img
            src="/ChatApp_Logo-removebg-preview.png"
            alt="Logo"
            className="w-[200px] text-center"
          />
        </Link>
      </div>
      <div className="pl-8 ">
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
              to="User"
              className="flex items-center gap-3 py-3 pt-[300px] px-3 rounded-lg w-fit"
            >
              <img src="pic.png" alt="" />
              Profile
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navber;
