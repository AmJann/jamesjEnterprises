import React, { useEffect, useRef, useState } from "react";
import "../styles/main.css";
import yellowFlorida from "../assets/yellow-fl-no-bg.png";

function MissionState() {
  const missionRef = useRef(null);
  const contentRef = useRef(null);
  const [missionVisible, setMissionVisible] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === missionRef.current && entry.isIntersecting) {
            setMissionVisible(true);
          }
          if (entry.target === contentRef.current && entry.isIntersecting) {
            setContentVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (missionRef.current) observer.observe(missionRef.current);
    if (contentRef.current) observer.observe(contentRef.current);

    return () => {
      if (missionRef.current) observer.unobserve(missionRef.current);
      if (contentRef.current) observer.unobserve(contentRef.current);
    };
  }, []);

  return (
    <div className="missionContentContainer">
      <div
        className={`missionContainer fade-in ${
          missionVisible ? "visible" : ""
        }`}
        ref={missionRef}
      >
        <div>
          <h2 className="montserratFont blueFont header">Trusted and Local</h2>
          <h3 className="montserratFont subheader">
            40+ years of experience in the area
          </h3>
        </div>

        <div className="floridaImageContainer">
          <img
            src={yellowFlorida}
            alt="outline of the state of Florida with yellow color"
          />
        </div>
      </div>

      <p
        className={`content montserratFontLight fade-in ${
          contentVisible ? "visible" : ""
        }`}
        ref={contentRef}
      >
        At James Jankowski Enterprises, our mission is to deliver the highest
        quality concrete solutions with unparalleled craftsmanship and
        integrity. With over 40 years of experience serving Southwest Florida,
        we are committed to building lasting relationships with our clients,
        providing reliable, innovative, and sustainable construction services
        that stand the test of time. We take pride in our deep roots in the
        community and our unwavering dedication to excellence, ensuring that
        every project reflects our legacy of trust, expertise, and exceptional
        service.
      </p>
    </div>
  );
}

export default MissionState;
