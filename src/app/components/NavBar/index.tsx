"use client";

import React, { useState } from "react";
import classes from "./index.module.scss";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={classes.navbar}>
      {/* Logo */}
      <div className={classes.logo}>
        <img src="/logo.png" alt="Logo" />
      </div>

      {/* Hamburger / Close Button */}
      <button
        className={`${classes.hamburger} ${isOpen ? classes.close : ""}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {isOpen ? "✖" : "☰"}
      </button>

      {/* Menu */}
      <ul className={`${classes.menu} ${isOpen ? classes.open : classes.closed}`}>
        <li>
          <a href="#about" onClick={toggleMenu}>
            About
          </a>
        </li>
        <li>
          <a href="#gallery" onClick={toggleMenu}>
            Gallery
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
