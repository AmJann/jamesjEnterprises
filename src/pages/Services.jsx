import React from "react";
import "../styles/services.css";
import concrete from "../assets/concreteStock.jpg";
import concreteHand from "../assets/stockConcreteHand.jpeg";

function Services() {
  return (
    <div className="servicesContainer">
      <div className="servicesHeader">
        <h1 className="montserratFont services">Services</h1>
      </div>
      <img src={concrete} className="concrete"></img>
      <div className="concreteHandContainer">
        <img src={concreteHand} className="concreteHand"></img>
      </div>
      <div className="servicesIntroContainer">
        <h4 className="montserratFontLight servicesIntro">
          At James Jankowski Enterprises, we specialize in delivering
          top-quality concrete solutions that meet the unique needs of
          residential, commercial, and industrial projects. With years of
          experience and a skilled team of professionals, we pride ourselves on
          providing durable, long-lasting results that enhance the value and
          functionality of your property. Whether you're looking for concrete
          driveways, foundations, patios, or custom decorative concrete, we
          ensure every project is completed with precision and attention to
          detail. Trust us to bring your vision to life with reliable, on-time,
          and quality services.
        </h4>
      </div>
    </div>
  );
}

export default Services;
