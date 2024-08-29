import React from "react";
import Florida from "../assets/florida-no-bg.png";
import "../styles/main.css";

function MissionState() {
  return (
    <div className="missionContentConatiner">
      <div className="missionContainer">
        <div>
          <h2 className="montserratFont blueFont header">Trusted and Local</h2>
          <h6 className="montserratFontLight subheader">
            40+ years of experience in the area
          </h6>
        </div>

        <div className="floridaImageContainer">
          <img src={Florida} alt="outline of the state of Florida"></img>
        </div>
      </div>
      <p className="content interFontLight">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis
        alias perspiciatis obcaecati nam, quasi quibusdam optio explicabo
        minima, accusantium voluptatem, aliquid qui sequi nemo dolorum
        distinctio atque nostrum! Vero, voluptas. Lorem ipsum, dolor sit amet
        consectetur adipisicing elit. Reiciendis natus itaque quaerat officia
        quisquam voluptatibus voluptas totam incidunt alias consequatur aut
        maiores praesentium soluta exercitationem voluptatem, error ab porro eum
        est ipsa voluptate dignissimos quod? Explicabo, esse repellendus ad
        magnam minima magni labore mollitia dicta nobis voluptatum excepturi
        officia? Repellendus.
      </p>
      {/* <ContactForm /> */}
    </div>
  );
}

export default MissionState;
