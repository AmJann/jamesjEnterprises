import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Footer from "./components/Footer";
import { React, Fragment, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import { HelmetProvider } from "react-helmet-async";

function App() {
  useEffect(() => {
    const script1 = document.createElement("script");
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=G-GQ8L7TVMG0`;
    document.head.appendChild(script1);

    const script2 = document.createElement("script");
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-GQ8L7TVMG0');
    `;
    document.head.appendChild(script2);
  }, []);

  return (
    <HelmetProvider>
      <Fragment>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Fragment>
    </HelmetProvider>
  );
}

export default App;
