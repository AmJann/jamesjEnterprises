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

  return (
    // <div className="navContainer interFont">
    //   <div className="navContainer companyName">
    //     <h2 className="interFont">
    //       James Jankowski <span className="interFontLight">Enterprises</span>
    //     </h2>
    //     <p className="montserratFont">Concrete Specialists</p>
    //   </div>
    //   <div className="navContainer">
    //     <ul id="navList">
    //       <li className="navOption interFont">about us</li>
    //       <li className="navOption interFont">articles</li>
    //       <li className="navOption interFont">pricing</li>
    //       <li className="navOption interFont" id="lastNavOption">
    //         contact us
    //       </li>
    //     </ul>
    //   </div>
    // </div>
    <header>
      <div>
        <h2 className="interFont">
          James Jankowski{" "}
          <span className="interFontExtraLight">Enterprises</span>
        </h2>
        <h3 className="montserratFontLight goldFont">Concrete Specialists</h3>
      </div>
      <nav ref={navRef}>
        <Link className="link" to="/">
          {<FaHome />} Home
        </Link>
        <Link className="link" to="/">
          {<FaImage />} Gallery
        </Link>
        <Link className="link" to="/">
          {<FaHammer />} Services
        </Link>
        <Link className="link" to="/">
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
