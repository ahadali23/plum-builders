import React, { useState } from "react";
import "../styles/ProjectType.css";
import kitchenImage from "../assets/kitchen.png";
import bathroomImage from "../assets/bathroom.png";
import fireplaceImage from "../assets/fireplace.png";
import wallCladdingImage from "../assets/wallCladding.png";
import cubicImage from "../assets/cubic.png";

const ProjectTypes = () => {
  const images = [
    { src: kitchenImage, alt: "Kitchen", label: "Kitchen" },
    { src: bathroomImage, alt: "Bathroom", label: "Bathroom" },
    { src: fireplaceImage, alt: "Fireplace", label: "Fireplace" },
    { src: wallCladdingImage, alt: "Wall Cladding", label: "Wall Cladding" },
    { src: cubicImage, alt: "Cubic", label: "Cubic" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const imagesToShow = 4; // Number of images to show at once

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - imagesToShow : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - imagesToShow ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="project-types">
      <div className="text-content">
        <h2>Start Your Journey</h2>
        <p>What type of project do you have?</p>
      </div>
      <div className="slider-container">
        <button className="slider-btn prev-btn" onClick={prevSlide}>
          &#8249; Prev
        </button>
        <div className="projects">
          {images
            .slice(currentIndex, currentIndex + imagesToShow)
            .map((image, index) => (
              <div className="project" key={index}>
                <img src={image.src} alt={image.alt} />
                <p>{image.label}</p>
              </div>
            ))}
        </div>
        <button className="slider-btn next-btn" onClick={nextSlide}>
          Next &#8250;
        </button>
      </div>
    </section>
  );
};

export default ProjectTypes;
