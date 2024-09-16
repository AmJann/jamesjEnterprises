import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Footer from "./components/Footer";
import { React, Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import Gallery from "./pages/Gallery";
// import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Fragment>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Home />} />
      </Routes>
      <Footer />
    </Fragment>
  );
}

export default App;
