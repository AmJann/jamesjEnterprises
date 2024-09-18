import React from "react";
import "../styles/contact.css";
import manCalling from "../assets/manCalling.jpeg";

function Phone() {
  return (
    <div className="phoneContainer">
      <a href="tel:+19412043066" className="phoneDiv">
        <div className="callUs">
          <h2 className="montserratFont"> Call Us</h2>
          <h3 className="montserratFont goldFontContact">941-204-3066</h3>
          <h3 className="montserratFont">Weekdays 9am - 4pm</h3>
        </div>
      </a>
      <div className="manCallingContainer">
        <img
          className="manCallingImg"
          src={manCalling}
          alt="smiling man making a phone call looking out a home window"
        ></img>
      </div>
    </div>
  );
}

export default Phone;
