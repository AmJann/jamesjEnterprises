import React from "react";
import charlotteHarbor from "../assets/charlotteHarbor.jpg";
import "../App.css";

function HeaderImg() {
  return (
    <div id="headerImgContainer">
      <img
        id="charlotteHarbor"
        src={charlotteHarbor}
        alt="charlotte harbor sunset pier"
      ></img>
      <h2 className="interFont overlayText">
        Charlotte County's Concrete Professionals since 1983
      </h2>
    </div>
  );
}

export default HeaderImg;
