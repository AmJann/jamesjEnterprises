import React from "react";
import { FaSun } from "react-icons/fa";
import Florida from "../assets/florida-no-bg.png";
import "../styles/main.css";

function MissionState() {
  return (
    <div className="missionContainer interFont">
      <h2>Trusted and Local</h2>
      <div className="floridaImageContainer">
        <img src={Florida} alt="outline of the state of Florida"></img>
      </div>
    </div>
  );
}

export default MissionState;
