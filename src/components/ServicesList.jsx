import React from "react";
import "../styles/main.css";
import homeDriveway from "../assets/homeDriveway.jpeg";
import patio from "../assets/patioBrown.jpg";
import sidewalk from "../assets/sidewalk2.jpg";
import concreteSlab from "../assets/concreteSlab.jpg";

function ServicesList() {
  return (
    <div className="allServicesContainer">
      <div className="interFontLight servicesListConatiner">
        <h3 className="servicesCategory">Concrete Flatwork</h3>
        <li className="servicesItem">Driveways</li>
        <li className="servicesItem">Patios</li>
        <li className="servicesItem">Building Slabs</li>
        <li className="servicesItem">Sidewalks</li>
        <br></br>
        <h3 className="servicesCategory">Block Work</h3>

        <li className="servicesItem">Stemwalls</li>
        <li className="servicesItem">Additions</li>
        <li className="servicesItem">Block Buildings</li>
        <br></br>
        <h3 className="servicesCategory">Structural Concrete</h3>

        <li className="servicesItem">Tie Beam</li>
        <li className="servicesItem">Stairs</li>
        <li className="servicesItem">Wet Decks</li>
        <br></br>
        <h3 className="servicesCategory">Miscellaneous</h3>

        <li className="servicesItem">Culvert Pipe</li>
        <li className="servicesItem">Rip-Rap Banks</li>
        <li className="servicesItem">Brick Pavers</li>
      </div>
      <div className="imagesServicesContainer">
        <div className="imagesServicesSection">
          <div className="imageItem">
            <img
              alt="home at sunset driveway"
              src={homeDriveway}
              className="imageService"
            ></img>
            <div className="overlayService">Driveway</div>
          </div>
          <div className="imageItem">
            <img
              src={concreteSlab}
              alt="concrete home slab"
              className="imageService"
            ></img>
            <div className="overlayService">Slab</div>
          </div>
        </div>
        <div className="imagesServicesSection">
          <div className="imageItem">
            <img
              src={sidewalk}
              alt="concrete sidewalk"
              className="imageService"
            ></img>
            <div className="overlayService">Sidewalk</div>
          </div>
          <div className="imageItem">
            <img
              alt="concrete patio"
              src={patio}
              className="imageService"
            ></img>
            <div className="overlayService">Patio</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesList;
