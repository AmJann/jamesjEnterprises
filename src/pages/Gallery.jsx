import React from "react";
import concrete from "../assets/concreteStock.jpg";
import concreteHand from "../assets/stockConcreteHand.jpeg";
import "../styles/gallery.css";

function Gallery() {
  return (
    <div className="galleryContainer">
      <div className="galleryHeader">
        <h1 className="montserratFont gallery">Gallery</h1>
      </div>
      <img src={concrete} className="concrete"></img>
      <div className="concreteHandContainer">
        <img src={concreteHand} className="concreteHand"></img>
      </div>
      <div className="galleryIntroContainer">
        <h4 className="montserratFontLight galleryIntro">
          At James Jankowski Enterprises, we believe that quality craftsmanship
          speaks for itself. Our gallery showcases a wide range of concrete
          projects, from beautifully designed patios and driveways to durable
          foundations and custom decorative installations. Each project
          highlights our dedication to precision, durability, and aesthetics.
          Browse through our portfolio to see how we bring clients' visions to
          life with expert concrete solutions tailored to their unique needs.
        </h4>
      </div>
    </div>
  );
}

export default Gallery;
