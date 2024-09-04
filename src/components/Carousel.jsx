import React, { useState, useEffect, useRef } from "react";
import "../styles/carousel.css";
import charlotteHarbor from "../assets/charlotteHarbor.jpg";
import jamesDriveway from "../assets/jamesDrivewayResize.jpeg";

const Carousel = () => {
  const images = [
    charlotteHarbor,
    jamesDriveway,
    charlotteHarbor,
    jamesDriveway,
    charlotteHarbor,
    jamesDriveway,
    charlotteHarbor,
    jamesDriveway,
    charlotteHarbor,
    jamesDriveway,
    charlotteHarbor,
    jamesDriveway,
    charlotteHarbor,
    jamesDriveway,
    charlotteHarbor,
    jamesDriveway,
    charlotteHarbor,
    jamesDriveway,
    charlotteHarbor,
    jamesDriveway,
  ];

  const messages = [
    "Charlotte County's Concrete Professionals since 1983",
    "Give Us a Call",
  ];
  const descriptiveText = ["", "941-204-3066"];

  const [currentIndex, setCurrentIndex] = useState(1); // Start at the first real slide
  const [currentMessage, setCurrentMessage] = useState(messages[0]);
  const [currentDescription, setCurrentDescription] = useState(
    descriptiveText[0]
  );
  const carouselInnerRef = useRef(null);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  useEffect(() => {
    carouselInnerRef.current.style.transition = "transform 0.5s ease-in-out";
    carouselInnerRef.current.style.transform = `translateX(-${
      currentIndex * 100
    }%)`;

    const items = carouselInnerRef.current.children;
    for (let i = 0; i < items.length; i++) {
      if (items[currentIndex]) {
        items[i].classList.remove("active");
      }
    }
    if (items[currentIndex]) {
      items[currentIndex].classList.add("active");
    }
    const handleTransitionEnd = () => {
      carouselInnerRef.current.style.transition = "none";
      if (currentIndex === 0) {
        setCurrentIndex(images.length);
      } else if (currentIndex === images.length) {
        setCurrentIndex(1);
      }
    };

    carouselInnerRef.current.addEventListener(
      "transitionend",
      handleTransitionEnd
    );

    // Delay the text update by 0.5s (500ms) to match the transition duration
    const textUpdateTimeout = setTimeout(() => {
      setCurrentMessage(currentIndex % 2 ? messages[0] : messages[1]);
      setCurrentDescription(
        currentIndex % 2 ? descriptiveText[0] : descriptiveText[1]
      );
    }, 220);

    return () => {
      clearTimeout(textUpdateTimeout);
      carouselInnerRef.current.removeEventListener(
        "transitionend",
        handleTransitionEnd
      );
    };
  }, [currentIndex, images.length]);

  return (
    <div className="carousel">
      <div className="carousel-inner" ref={carouselInnerRef}>
        {images.map((image, index) => (
          <div key={index} className="carousel-item">
            <img className="slideImage" src={image} alt={`Slide ${index}`} />
            <div className="carousel-text">
              <h2 className="descriptionText">{currentMessage}</h2>
              <p className="descriptionSubText">{currentDescription}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="carousel-button left" onClick={goToPrevious}>
        &#10094;
      </button>
      <button className="carousel-button right" onClick={goToNext}>
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;
