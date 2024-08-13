import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Design Assistance</h4>
          <ul>
            <li>Measurements</li>
            <li>Free Design Guide</li>
            <li>Design Consultation</li>
            <li>Visualizer</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>About Us</h4>
          <ul>
            <li>Who We Are</li>
            <li>What We Do</li>
            <li>How We Do It</li>
            <li>Showroom</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Company Info</h4>
          <ul>
            <li>Financing</li>
            <li>Careers</li>
            <li>Made in USA</li>
            <li>Blog</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 Plum Builders, All Rights Reserved. Powered by XYZ</p>
        <div className="social-links">
          <a href="#">Facebook</a>
          <a href="#">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
