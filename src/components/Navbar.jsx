import React, { useEffect, useState } from "react";
import { BsGithub } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [menu_visible, setMenuVisible] = useState(true);

  const handleResize = () => {
    if (window.innerWidth < 500) {
      setMenuVisible(true);
    } else {
      setMenuVisible(false);
    }
  };

  window.addEventListener("resize", handleResize);

  useEffect(() => {
    handleResize();
  }, []);

  const handleShowMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className="navbar">
      <div className="nav1">
        <Link to="/" className="nav1">
          <span className="icon">{<BsGithub />}</span>
          <h1 className="title">Github Finder</h1>
        </Link>
      </div>
      {!menu_visible ? (
        <div className="nav2">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
          <NavLink to="/about" className="nav-link">
            About
          </NavLink>
        </div>
      ) : (
        <button
          className={menu ? "menu_btn menu_btn_fix" : "menu_btn"}
          onClick={handleShowMenu}
        >
          <IoMenu className="menu" />
        </button>
      )}
      {menu && (
        <div className={menu ? "nav3 " : "nav3 menu_disable"}>
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
          <NavLink to="/about" className="nav-link">
            About
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Navbar;
