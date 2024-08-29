import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { React, Fragment } from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Fragment>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Home />} />
        <Route path="/about" element={<Home />} />
        <Route path="/gallery" element={<Home />} />
        <Route path="/contact" element={<Home />} />
      </Routes>
    </Fragment>
  );
}

export default App;
