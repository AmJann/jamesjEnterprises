import React from "react";
import Florida from "../assets/florida-no-bg.png";
import "../styles/main.css";
import yellowFlorida from "../assets/yellow-fl-no-bg.png";

function MissionState() {
  return (
    <div className="missionContentContainer">
      <div className="missionContainer">
        <div>
          <h2 className="montserratFont blueFont header">Trusted and Local</h2>
          <h6 className="montserratFont subheader">
            40+ years of experience in the area
          </h6>
        </div>

        <div className="floridaImageContainer">
          <img src={yellowFlorida} alt="outline of the state of Florida"></img>
        </div>
      </div>
      <p className="content montserratFontLight">
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
      {/* <ContactForm /> */}
    </div>
  );
}

export default MissionState;
