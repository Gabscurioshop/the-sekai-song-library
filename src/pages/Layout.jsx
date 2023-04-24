import React from "react";
import {Outlet} from "react-router-dom";
import Navbar from "../Navbar";

//Combine page content with navigation
const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Layout;