import React from "react";
import concrete from "../assets/concreteStock.jpg";
import "../styles/contact.css";
import phone from "../assets/phone.jpeg";
import ContactForm from "../components/ContactForm";
import Phone from "../components/Phone";
import { Helmet } from "react-helmet-async";

function Contact() {
  return (
    <div className="contactContainer">
      <Helmet>
        <link
          rel="canonical"
          href="https://jamesjankowskienterprises.com/contact"
        />
        <title>Contact Us | James Jankowski Enterprises</title>
        <meta
          name="description"
          content="Get in touch with James Jankowski Enterprises for expert concrete services in Port Charlotte, FL. Call us today for a free estimate or use our contact form to send a message."
        />
      </Helmet>
      <div className="contactHeader">
        <h1 className="montserratFont contact">Contact</h1>
      </div>
      <img src={concrete} alt="concrete texture" className="concrete"></img>
      <div className="concreteHandContainer">
        <img src={phone} className="concreteHand"></img>
      </div>
      <div className="contactIntroContainer">
        <h4 className="montserratFontLight contactIntro">
          At James Jankowski Enterprises, we’re here to assist with all your
          concrete needs. Whether you have questions about our services, need a
          consultation, or want to request a quote, our team is ready to help.
          Fill out the form below or give us a call, and we’ll get back to you
          as soon as possible!
        </h4>
      </div>
      <div className="contactFormConatiner">
        <div className="contactPageFormContainer">
          <ContactForm />
        </div>
        <Phone />
      </div>
    </div>
  );
}

export default Contact;
