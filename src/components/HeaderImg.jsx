import React from "react";
import charlotteHarbor from "../assets/charlotteHarbor.png";
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
        Charlotte county's concrete professionals since 1983
      </h2>
    </div>
  );
}

export default HeaderImg;
