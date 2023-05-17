import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { AuthContext } from "../../../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const navItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/a">Donation</Link>
      </li>
      <li>
        <Link to="/b">Events</Link>
      </li>
      <li>
        <Link to="/c">Blog</Link>
      </li>
      <div className="flex flex-col lg:flex-row gap-3 lg:ml-9">
        <li>
          <Link
            to="/registerVolunteer"
            className="btn border-0 bg-[#3F90FC] text-white"
          >
            Register
          </Link>
        </li>
        <li>
          <Link to="/admin" className="btn border-0 bg-[#434141] text-white">
            Admin
          </Link>
        </li>
        <li>
          {user ? (
            <button
              onClick={handleLogOut}
              className="btn border-0 bg-red-500 text-white"
            >
              Logout
            </button>
          ) : (
            <Link to="/login" className="btn border-0 bg-[#3F90FC] text-white">
              Login
            </Link>
          )}
        </li>
      </div>
    </>
  );
  return (
    <div className="navbar bg-[#F8FAFC] justify-between py-5 lg:py-9">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden text-lg">
            <FaBars />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-[#0B0B0B]"
          >
            {navItems}
          </ul>
        </div>
        <div>
          <Link to="/">
            <img
              src={"https://i.ibb.co/KL1mtsJ/Group-1329.png"}
              alt="Volunteer Network"
              className="w-48"
              title="Volunteer Network"
            />
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-semibold text-[#0B0B0B]">
          {navItems}
        </ul>
      </div>
      <div className="ml-2">
        {user && (
          <img
            src={user?.photoURL}
            title={user?.email}
            className="w-[40px] h-[40px] rounded-full"
            alt=""
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
