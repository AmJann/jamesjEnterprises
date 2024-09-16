import React from "react";
import "../styles/footer.css";
import { FaLocationArrow, FaPhoneAlt, FaHome } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footerContainer montserratFont">
      <div className="contactContainer">
        <h4 className="montserratFont footerCategory">
          James Jankowski Enterprises
        </h4>
        <h5 className="footerItem">
          <a
            href="tel:+19412043066"
            className="montserratFont footerItem phoneNumber"
          >
            {<FaPhoneAlt alt="phone" />} 941-204-3066
          </a>
        </h5>
        <h5 className="footerItem goldFont">Hours:</h5>
        <h5 className="footerItem">Weekdays 9am - 4pm</h5>
      </div>
      <div>
        <h3 className="footerCategory"> Serving</h3>
        <div className="serviceAreaContainer">
          <div>
            <h4 className="footerItem">
              {<FaLocationArrow alt="arrow" />} Port Charlotte, FL
            </h4>
            <h4 className="footerItem">
              {<FaLocationArrow alt="arrow" />} Punta Gorda, FL
            </h4>
            <h4 className="footerItem">
              {" "}
              {<FaLocationArrow alt="arrow" />} Englewood, FL
            </h4>
          </div>
          <div>
            <h4 className="footerItem">
              {<FaLocationArrow alt="arrow" />} North Port, FL
            </h4>
            <h4 className="footerItem">
              {<FaLocationArrow alt="arrow" />} Venice, FL
            </h4>
            <h4 className="footerItem">
              {<FaLocationArrow alt="arrow" />} Arcadia, FL
            </h4>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
