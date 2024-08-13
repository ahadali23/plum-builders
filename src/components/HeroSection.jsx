import React from "react";
import "../styles/HeroSection.css";
import heroImage from "../assets/hero-img.png";

const HeroSection = () => {
  return (
    <section
      className="hero-section"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="hero-content">
        <h1>Enjoy Everyday Luxury</h1>
        <p>It's never been easier to design and achieve your ideal outcome.</p>
        <button className="hero-button">Request a Quote</button>
      </div>
    </section>
  );
};

export default HeroSection;
