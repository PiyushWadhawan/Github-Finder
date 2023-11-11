import React from "react";
import { BsGithub } from "react-icons/bs";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav1">
        <span className="icon">{<BsGithub />}</span>
        <h1 className="title">Github Finder</h1>
      </div>
      <div className="nav2">
        <NavLink to="/" className="nav-link">
          Home
        </NavLink>
        <NavLink to="/about" className="nav-link">
          About
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
