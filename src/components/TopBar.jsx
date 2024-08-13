import React from "react";
import "../styles/Topbar.css";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbar-box grey-box">Request a Quote</div>
      <div className="topbar-box black-box">Visit Our Showroom</div>
      <div className="topbar-box grey-box">What's in Stock</div>
    </div>
  );
};

export default Topbar;
