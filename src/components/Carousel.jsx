import React, { useState, useEffect, useRef } from "react";
import "../styles/carousel.css";
import charlotteHarbor from "../assets/charlotteHarbor.jpg";
import jamesDriveway from "../assets/jamesDrivewayResize1550.jpg";
import { FaPhoneAlt } from "react-icons/fa";

const Carousel = () => {
  const images = [
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
    charlotteHarbor,
    jamesDriveway,
  ];

  const alts = [
    "sunset of charlotte harbor and pier",
    "concrete driveway in front of house",
  ];

  const messages = [
    "Charlotte County's Concrete Professionals since 1983",
    "Contact Us Today at",
  ];
  const descriptiveText = ["", "941-204-3066"];

  const [currentIndex, setCurrentIndex] = useState(1);
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
    if (!carouselInnerRef.current) return;

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

    const textUpdateTimeout = setTimeout(() => {
      setCurrentMessage(currentIndex % 2 ? messages[0] : messages[1]);
      setCurrentDescription(
        currentIndex % 2 ? descriptiveText[0] : descriptiveText[1]
      );
    }, 220);

    return () => {
      clearTimeout(textUpdateTimeout);
      if (carouselInnerRef.current) {
        carouselInnerRef.current.removeEventListener(
          "transitionend",
          handleTransitionEnd
        );
      }
    };
  }, [currentIndex, images.length]);

  return (
    <div className="carousel1">
      <div className="carousel-inner1" ref={carouselInnerRef}>
        {images.map((image, index) => (
          <div key={index} className="carousel-item1">
            <img
              className="slideImage1"
              src={image}
              alt={currentIndex % 2 ? alts[0] : alts[1]}
            />
            <div className="textContainer ">
              <header>
                <h1 className="interFont carousel-text1">{currentMessage}</h1>
                <h2 className="descriptionText1">
                  <a
                    aria-label="phone number"
                    href="tel:+19412043066"
                    className="phoneNumber"
                  >
                    {currentDescription}
                  </a>
                </h2>
                <div className="descriptionText2Container">
                  <h3 className="descriptionText2 interFont FreeDescription">
                    Free Estimates
                  </h3>
                  <h3 className="descriptionText2 interFont licensedDescription">
                    Licensed and Insured
                  </h3>
                </div>
              </header>
            </div>
          </div>
        ))}
      </div>
      <button className="carousel-button1 left1" onClick={goToPrevious}>
        &#10094;
      </button>
      <button className="carousel-button1 right1" onClick={goToNext}>
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;
