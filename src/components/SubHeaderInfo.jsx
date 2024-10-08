import React from "react";
import "../styles/main.css";
import { FaPhone } from "react-icons/fa";

function SubHeaderInfo() {
  return (
    <div className="subHeaderInfoContainer interFontLight">
      <h4 className="interFont subInfo">
        <span className="phone">{<FaPhone />}</span> 941-204-3066
      </h4>
      <h4 className="interFont subInfo">license #: CBC 1264369</h4>
    </div>
  );
}

export default SubHeaderInfo;
