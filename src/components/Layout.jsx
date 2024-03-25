import React from "react";
import { Outlet } from "react-router-dom";
import Navber from "./Navber";

function Layout() {
  return (
    <div className="flex">
      <Navber />
      <Outlet />
    </div>
  );
}

export default Layout;
