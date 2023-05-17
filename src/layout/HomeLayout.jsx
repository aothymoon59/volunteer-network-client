import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Shared/Navbar/Navbar";
import Footer from "../components/Shared/Footer/Footer";

const HomeLayout = () => {
  return (
    <div className="container mx-auto px-5 lg:px-10 mont-font bg-[#F8FAFC]">
      <Navbar></Navbar>
      <div className="min-h-[calc(100vh-129px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default HomeLayout;
