import React from "react";
import { FaPlus, FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const AdminSidebar = () => {
  return (
    <div className="px-5">
      <div className="mt-6">
        <Link to="/">
          <img
            src={"https://i.ibb.co/KL1mtsJ/Group-1329.png"}
            alt="Volunteer Network"
            className="w-48"
            title="Volunteer Network"
          />
        </Link>
      </div>

      <Link
        to="/admin"
        className="flex gap-2 justify-center items-center text-[#207FEE] mt-12"
      >
        <FaUserAlt className="text-[17px]" />
        <span>Volunteer register list</span>
      </Link>
      <Link
        to="/admin/addEvent"
        className="flex gap-2 justify-center items-center text-[#111111] mt-[30px]"
      >
        <FaPlus className="text-[17px]" />
        <span>Add event</span>
      </Link>
    </div>
  );
};

export default AdminSidebar;
