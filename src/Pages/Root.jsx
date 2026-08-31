import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer";

const Root = () => {
  return (
    <div className="dark:bg-[#070d20]">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
