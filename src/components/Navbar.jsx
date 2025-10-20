import React from "react";
import { NavLink } from "react-router";
import logo from "../assets/logo.png";
import github from "../assets/github.png";
import './Navbar.css'

function Navbar() {
  return (
    <div className="navbar bg-white text-black shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/apps"}>Apps</NavLink>
            </li>
            <li>
              {" "}
              <NavLink to={"/installation"}>installation</NavLink>
            </li>
          </ul>
        </div>
       <div className="flex w-[50px] items-center gap-2 h-[50px]">
        <img src={logo} alt="" />
         <NavLink to={"/"} className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-bold text-xl">Hero.Io</NavLink>
       </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/apps"}>Apps</NavLink>
          </li>
          <li>
            {" "}
            <NavLink to={"/installation"}>Installation</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <NavLink to={"https://github.com/priom125"} className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] border-0 text-white">
          <img src={github} alt="" />
          Contribute</NavLink>
      </div>
    </div>
  );
}

export default Navbar;
