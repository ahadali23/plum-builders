import React from "react";
import "../styles/Material.css";
import quartzImage from "../assets/quartz.png";
import marbleImage from "../assets/quartz.png";
import graniteImage from "../assets/quartz.png";

const MaterialSection = () => {
  return (
    <section className="material-section">
      <h2>Shop Your Countertop by Material and Function</h2>
      <div className="materials">
        <div className="material">
          <img src={quartzImage} alt="Quartz" />
          <p>Quartz</p>
        </div>
        <div className="material">
          <img src={marbleImage} alt="Marble" />
          <p>Marble</p>
        </div>
        <div className="material">
          <img src={graniteImage} alt="Granite" />
          <p>Granite</p>
        </div>
      </div>
      <button className="material-btn">Shop Material</button>
    </section>
  );
};

export default MaterialSection;
