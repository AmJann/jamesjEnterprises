import { React, useRef } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaImage,
  FaEnvelope,
  FaHammer,
} from "react-icons/fa";
import "../styles/nav.css";

function Navbar() {
  const navRef = useRef();

  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const handleLinkClick = () => {
    // Close the menu when a link is clicked
    navRef.current.classList.remove("responsive_nav");
  };

  return (
    <header className="navHeader">
      <div>
        <h1 className="interFont jje">
          James Jankowski{" "}
          <span className="interFontExtraLight">Enterprises</span>
        </h1>
        <h1 className="montserratFontLight goldFont">Concrete Specialists</h1>
      </div>
      <nav ref={navRef}>
        <Link className="link" to="/" onClick={handleLinkClick}>
          {<FaHome />} Home
        </Link>
        <Link className="link" to="/gallery" onClick={handleLinkClick}>
          {<FaImage />} Gallery
        </Link>
        <Link className="link" to="/services" onClick={handleLinkClick}>
          {<FaHammer />} Services
        </Link>
        <Link className="link" to="/contact" onClick={handleLinkClick}>
          {<FaEnvelope />} Contact
        </Link>
        <button className="nav-btn nav-close-btn" onClick={showNavBar}>
          <FaTimes />
        </button>
      </nav>
      <div>
        <button className="nav-btn" onClick={showNavBar}>
          <FaBars />
        </button>
        <h6 className="interFontExtraLight menu">menu</h6>
      </div>
    </header>
  );
}

export default Navbar;
