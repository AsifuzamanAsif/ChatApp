import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Navber from "./Navber";
import { useSelector } from "react-redux";

function Layout() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.userSlice.user);
  useEffect(() => {
    if (!user) {
      return navigate("/Login");
    }
  }, []);
  return (
    <div className="flex">
      <Navber />
      <Outlet />
    </div>
  );
}

export default Layout;
