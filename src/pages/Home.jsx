import React from "react";
import MissionState from "../components/MissionState";
import Carousel from "../components/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import ContactForm from "../components/ContactForm";
import FreeEstimates from "../components/FreeEstimates";
import { Helmet } from "react-helmet-async";

function Home() {
  return (
    <>
      <Helmet>
        <link rel="canonical" href="https://jamesjankowskienterprises.com/" />
        <title>
          James Jankowski Enterprises | Concrete Services in Port Charlotte, FL
        </title>
        <meta
          name="description"
          content="James Jankowski Enterprises offers top-quality concrete services including driveways, patios, and decorative concrete in Port Charlotte, FL."
        />
      </Helmet>
      {/* <HeaderImg /> */}
      <Carousel />
      {/* <FreeEstimates /> */}
      <div className="missionContactContainer">
        <MissionState />
        <ContactForm />
      </div>
    </>
  );
}

export default Home;
