import React, { useState, useRef, useEffect } from "react";
import { Form, Button, Container, Row, Col, Alert } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import "../styles/contactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const formRef = useRef(null);

  const [submitted, setSubmitted] = useState(false);
  const [validated, setValidated] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    } else {
      e.preventDefault();
      sendEmail(form);
    }

    setValidated(true);
  };

  const sendEmail = (form) => {
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form, // ← pass the form element, not formData
        import.meta.env.VITE_USER_ID
      )
      .then(
        (response) => {
          console.log(
            "Contact form email sent successfully!",
            response.status,
            response.text
          );
          setSubmitted(true);
          setError(false);
          form.reset(); // ← reset the actual form fields
          setValidated(false);
        },
        (err) => {
          console.log("Failed to send contact form email...", err);
          setError(true);
        }
      );
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (submitted) {
        setSubmitted(false);
      }
      setError(false);
    }, 5000); // Clear the message after 5 seconds

    return () => clearTimeout(timer);
  }, [submitted, error]);

  return (
    <Container className="my-5">
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <h2 className="montserratFont contactUs">Contact Us</h2>
          <p>Reach out for any inquiries about our concrete services!</p>

          {submitted && (
            <Alert variant="success">
              Thank you for your message! We'll get back to you soon.
            </Alert>
          )}

          {error && (
            <Alert variant="danger">
              Oops! Something went wrong. Please try again later.
            </Alert>
          )}

          <Form
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
            ref={formRef}
          >
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please enter your name.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formEmail" className="mt-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid email address.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formPhone" className="mt-3">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Enter your phone number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                pattern="[0-9]{10}"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid phone number.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formMessage" className="mt-3">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter your message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please enter a message.
              </Form.Control.Feedback>
            </Form.Group>
            <Button
              aria-label="Submit"
              className="mt-4 submitButton"
              style={{ display: "flex", justifySelf: "center" }}
              variant="primary"
              type="submit"
            >
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactForm;
