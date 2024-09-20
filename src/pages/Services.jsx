import React from "react";
import "../styles/services.css";
import concrete from "../assets/concreteStock.jpg";
import concreteHand from "../assets/stockConcreteHand.jpeg";
import ServicesList from "../components/ServicesList";
import { Helmet } from "react-helmet-async";

function Services() {
  return (
    <div className="servicesContainer">
      <header>
        <Helmet>
          <link
            rel="canonical"
            href="https://jamesjankowskienterprises.com/services"
          />
          <title>
            Concrete Services in Port Charlotte, FL | James Jankowski
            Enterprises
          </title>
          <meta
            name="description"
            content="Explore our concrete services including driveways, patios, and more in Port Charlotte, FL."
          />
        </Helmet>
        <div className="servicesHeader">
          <h1 className="montserratFont services">Services</h1>
        </div>
        <img src={concrete} alt="concrete texture" className="concrete"></img>
        <div className="concreteHandContainer">
          <img
            src={concreteHand}
            alt="hand using tool to smooth out concrete"
            className="concreteHand"
          ></img>
        </div>
      </header>
      <div className="servicesIntroContainer">
        <h2 className="montserratFontLight servicesIntro">
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
        </h2>
      </div>
      <ServicesList />
    </div>
  );
}

export default Services;
