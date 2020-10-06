import React from "react";
import Logo from "../assets/new_logo.png";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-md bg-dark navbar-dark fixed-top"
      id="navbar"
    >
      <a className="navbar-brand ml-4" href="#home">
        <img src={Logo} alt="logo" height="40px" />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavbar"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="collapsibleNavbar">
        <ul className="navbar-nav mr-4">
          <li className="nav-item">
            <a href="#about" className="nav-link">
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="#achievement" className="nav-link">
              Achievements
            </a>
          </li>
          <li className="nav-item">
            <a href="#vehicles" className="nav-link">
              Vehicles
            </a>
          </li>
          <li className="nav-item">
            <a href="#sponsors" className="nav-link">
              Sponsors
            </a>
          </li>
          <li className="nav-item">
            <a href="#post" className="nav-link">
              Post
            </a>
          </li>
          <li className="nav-item">
            <a href="#team" className="nav-link">
              Team
            </a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
