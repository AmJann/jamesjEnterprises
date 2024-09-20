import React from "react";
import "../styles/footer.css";
import { FaLocationArrow, FaPhoneAlt, FaHome } from "react-icons/fa";
import FreeEstimates from "./FreeEstimates";

function Footer() {
  return (
    <footer>
      <div className="footerContainer montserratFont">
        <div className="contactContainer">
          <h1 className="montserratFont footerCategory">
            James Jankowski Enterprises
          </h1>
          <h2 className="footerItem">
            <a
              href="tel:+19412043066"
              className="montserratFont footerItem phoneNumber"
            >
              {<FaPhoneAlt alt="phone" />} 941-204-3066
            </a>
          </h2>
          <h1 className="footerItem goldFont">Hours:</h1>
          <h2 className="footerItem">Weekdays 9am - 4pm</h2>
        </div>
        <div>
          <h1 className="footerCategory"> Serving</h1>
          <div className="serviceAreaContainer">
            <div>
              <h2 className="footerItem">
                {<FaLocationArrow alt="arrow" />} Port Charlotte, FL
              </h2>
              <h2 className="footerItem">
                {<FaLocationArrow alt="arrow" />} Punta Gorda, FL
              </h2>
              <h2 className="footerItem">
                {" "}
                {<FaLocationArrow alt="arrow" />} Englewood, FL
              </h2>
            </div>
            <div>
              <h2 className="footerItem">
                {<FaLocationArrow alt="arrow" />} North Port, FL
              </h2>
              <h2 className="footerItem">
                {<FaLocationArrow alt="arrow" />} Venice, FL
              </h2>
              <h2 className="footerItem">
                {<FaLocationArrow alt="arrow" />} Arcadia, FL
              </h2>
            </div>
          </div>
        </div>
      </div>
      <FreeEstimates />
    </footer>
  );
}

export default Footer;
