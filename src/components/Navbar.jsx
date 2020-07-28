import React from "react";

import Logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="nav-container">
      <div className="nav-logo">
        <img src={Logo} height="40px" alt="logo"></img>
      </div>
      <div className="nav-items">
        <a href="#about">About</a>
        <a href="#achievement">Achievements</a>
        <a href="#sponsors">Sponsors</a>
        <a href="#post">Post</a>
        <a href="#team">Team</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
