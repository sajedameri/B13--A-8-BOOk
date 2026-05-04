
import Link from 'next/link';
import React from 'react';
import { FaUserCircle } from "react-icons/fa";
import NavLink from './NavLink';
const Navbar = () => {
  return (
    <div>
    <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
     <li><NavLink href={"/"}>Home</NavLink></li>
      <li>
        <NavLink href={"/all-books"}>All Books</NavLink>
      </li>

       <li>
        <NavLink href={"/my-profile"} className={"text-yellow-500"}>My Profile</NavLink>
      </li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Mary Book House</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      
     <li><NavLink href={"/"}>Home</NavLink></li>
      <li>
        <NavLink href={"/all-books"}>All Books</NavLink>
      </li>

       <li>
        <NavLink href={"/my-profile"}>My Profile</NavLink>
      </li>
    </ul>
  </div>
  
  <div className="navbar-end flex gap-4">
       <FaUserCircle size={30} />
    <a className="btn">Button</a>
     <a className="btn">Button</a>
  
  </div>
</div>
    </div>
  );
};

export default Navbar;