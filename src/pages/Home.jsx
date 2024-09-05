import React from "react";
import HeaderImg from "../components/HeaderImg";
import MissionState from "../components/MissionState";
import Carousel from "../components/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import ContactForm from "../components/ContactForm";

function Home() {
  return (
    <>
      {/* <HeaderImg /> */}
      <Carousel />
      <div className="missionContactContainer">
        <MissionState />
        <ContactForm />
      </div>
    </>
  );
}

export default Home;
