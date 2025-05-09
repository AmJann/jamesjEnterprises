import React from "react";
import "../styles/footer.css";
import { FaLocationArrow, FaPhoneAlt, FaHome } from "react-icons/fa";
import FreeEstimates from "./FreeEstimates";

function Footer() {
  return (
    <footer>
      <div className="footerContainer montserratFont">
        <div className="contactContainer">
          <h2 className="montserratFont footerCategory">
            James Jankowski Enterprises
          </h2>
          <h2 className="footerItem">
            <a
              href="tel:+19412043066"
              className="montserratFont footerItem phoneNumber"
            >
              {<FaPhoneAlt alt="phone" />} 941-204-3066
            </a>
          </h2>
          <h2 className="footerItem goldFont">Hours:</h2>
          <h3 className="footerItem">Weekdays 9am - 4pm</h3>
        </div>
        <div>
          <h2 className="footerCategory"> Serving</h2>
          <div className="serviceAreaContainer">
            <div>
              <h3 className="footerItem">
                {<FaLocationArrow alt="arrow" />} Port Charlotte, FL
              </h3>
              <h3 className="footerItem">
                {<FaLocationArrow alt="arrow" />} Punta Gorda, FL
              </h3>
              <h3 className="footerItem">
                {" "}
                {<FaLocationArrow alt="arrow" />} Englewood, FL
              </h3>
            </div>
            <div>
              <h3 className="footerItem">
                {<FaLocationArrow alt="arrow" />} North Port, FL
              </h3>
              <h3 className="footerItem">
                {<FaLocationArrow alt="arrow" />} Venice, FL
              </h3>
              <h3 className="footerItem">
                {<FaLocationArrow alt="arrow" />} Arcadia, FL
              </h3>
            </div>
          </div>
        </div>
      </div>
      <FreeEstimates />
    </footer>
  );
}

export default Footer;
