import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.jpg";
function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-sm  justify-content-center">
        <img src={logo} class="logo-img" alt="logo" />

        <ul className="navbar-nav">
          <Link to="/">
            <li className="nav-item">
              <a className="nav-link" href="#home">
                Home
              </a>
            </li>
          </Link>
          <Link to="/about">
            <li className="nav-item">
              <a className="nav-link" href="#select">
                About Us
              </a>
            </li>
          </Link>
          <li className="nav-item">
            <a className="nav-link" href="#precautions">
              Our Mission
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <br></br>
    </div>
  );
}

export default Navbar;
