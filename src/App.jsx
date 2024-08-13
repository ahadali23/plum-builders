import React from "react";
import "./App.css";
import Topbar from "./components/TopBar";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ProjectTypes from "./components/ProjectTypes";
import Material from "./components/Material";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Topbar />
      <Navbar />
      <HeroSection />
      <ProjectTypes />
      <Material />
      <Footer />
    </>
  );
}

export default App;
