import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Shared/Footer/Footer";
import AdminSidebar from "../components/AdminSideBar/AdminSidebar";

const AdminLayout = () => {
  return (
    <div className="container mx-auto roboto-font bg-white">
      <div className="min-h-screen grid grid-cols-[1fr,4fr]">
        <AdminSidebar></AdminSidebar>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default AdminLayout;

// F8FAFC
