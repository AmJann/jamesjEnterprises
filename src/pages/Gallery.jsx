import React from "react";
import concrete from "../assets/concreteStock.jpg";
import "../styles/gallery.css";
import concretePour from "../assets/concretePour.jpeg";
import { Helmet } from "react-helmet-async";

function Gallery() {
  return (
    <div className="galleryContainer">
      <header>
        <Helmet>
          <link
            rel="canonical"
            href="https://jamesjankowskienterprises.com/gallery"
          />
          <title>Gallery | James Jankowski Enterprises</title>
          <meta
            name="description"
            content="Browse our gallery to see the exceptional concrete work by James Jankowski Enterprises. View projects including driveways, patios, and decorative concrete in Port Charlotte and surrounding areas."
          />
        </Helmet>
        <div className="galleryHeader">
          <h1 className="montserratFont gallery">Gallery</h1>
        </div>
        <img src={concrete} alt="concrete texture" className="concrete"></img>
        <div className="concreteHandContainer">
          <img src={concretePour} className="concreteHand"></img>
        </div>
      </header>
      <div className="galleryIntroContainer">
        <h2 className="montserratFontLight galleryIntro">
          At James Jankowski Enterprises, we believe that quality craftsmanship
          speaks for itself. Our gallery showcases a wide range of concrete
          projects, from beautifully designed patios and driveways to durable
          foundations and custom decorative installations. Each project
          highlights our dedication to precision, durability, and aesthetics.
          Browse through our portfolio to see how we bring clients' visions to
          life with expert concrete solutions tailored to their unique needs.
        </h2>
      </div>
    </div>
  );
}

export default Gallery;
