import React from "react";
import "../styles/main.css";

function ServicesList() {
  return (
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
  );
}

export default ServicesList;
