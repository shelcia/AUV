import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

import Logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="nav-container">
      <div className="nav-logo">
        <a href="!#">
          <img src={Logo} height="40px" alt="logo"></img>
        </a>
      </div>
      <div className="nav-items">
        <AnchorLink href="#about">About</AnchorLink>
        <AnchorLink href="#achievement">Achievements</AnchorLink>
        <AnchorLink href="#sponsors">Sponsors</AnchorLink>
        <AnchorLink href="#post">Post</AnchorLink>
        <AnchorLink href="#team">Team</AnchorLink>
        <AnchorLink href="#contact">Contact</AnchorLink>
      </div>
    </nav>
  );
};

export default Navbar;
