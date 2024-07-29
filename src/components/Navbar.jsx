import React from "react";
import "../App.css";

function Navbar() {
  return (
    <div className="navContainer interFont">
      <div className="navContainer companyName">
        <h2 className="interFont">
          James Jankowski <span className="interFontLight">Enterprises</span>
        </h2>
        <p className="montserratFont">Concrete Specialists</p>
      </div>
      <div className="navContainer">
        <ul id="navList">
          <li className="navOption interFont">about us</li>
          <li className="navOption interFont">articles</li>
          <li className="navOption interFont">pricing</li>
          <li className="navOption interFont" id="lastNavOption">
            contact us
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
