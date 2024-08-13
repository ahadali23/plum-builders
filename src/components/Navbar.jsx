import React from "react";
import "../styles/Navbar.css";
import logoImage from "../assets/Logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logoImage} alt="Logo" />
      </div>
      <div className="nav-links">
        <a href="#countertops">Countertops</a>
        <a href="#architectural">Architectural</a>
        <a href="#commercial">Commercial</a>
        <div className="dropdown">
          <a href="#stone-products" className="dropdown-link">
            Materials & Products
          </a>
          <span className="triangle"></span>
          <div className="dropdown-content">
            <a href="#marble">BEST SELLERS</a>
            <a href="#marble">QUARTZ</a>
            <a href="#granite">NATURAL STONES</a>
            <a href="#quartz">LIVE INVENTORY</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
