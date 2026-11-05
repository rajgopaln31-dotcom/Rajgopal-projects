import { useState } from "react";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography
} from "@mui/material";

import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

import type { FormEvent } from "react";

import { PageLayout } from "../Components/Layout";
import "../styles/Contact.css";
import map from "../assets/map.jpg";
import Amma from "../images/Amma.jpg";

const contactInfo = [
  {
    icon: <EmailOutlinedIcon />,
    title: "Email",
    value: "info@megaviztech.com",
    link: "mailto:info@megaviztech.com"
  },
  {
    icon: <PhoneOutlinedIcon />,
    title: "Phone",
    value: "9154183243",
    link: "tel:9154183243"
  },
  {
    icon: <LocationOnOutlinedIcon />,
    title: "Location",
    value: "Hyderabad, Madhapur",
    link: "https://maps.app.goo.gl/JFomnr8u5xXP2M786?g_st=aw"
  }
];

export default function Contact() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Name validation
  const isNameValid = name.trim().length >= 3;

  // Email validation
  const isEmailValid =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  // Message validation
  const isMessageValid = message.trim().length >= 5;

  // Check all validations
  const isFormValid =
    isNameValid && isEmailValid && isMessageValid;

  // Submit function
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {

    event.preventDefault();

    console.log("Form Submitted Successfully!");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    alert("Message submitted successfully!");

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <PageLayout>

      <Container className="page contact-page">

        {/* Heading */}

        <Typography className="page-title">
          Contact Us
        </Typography>

        <Typography className="page-subtitle">
          Let's Build Something Great Together.
        </Typography>

        <hr className="teal-line" />

        {/* Team Image */}

        <img
          className="wide-image"
          src={Amma}
          alt="Our team"
          style={{ transform: "translateY(-15px)" }}
        />

        {/* Contact Information */}

        <Box className="contact-info">

          {contactInfo.map((item) => (
            <Box className="contact-row" key={item.title}>

              <Box className="teal-icon">
                {item.icon}
              </Box>

              <Box>

                <Typography className="card-title">
                  {item.title}
                </Typography>

                <Typography
                  component="a"
                  href={item.link}
                  className="contact-link"
                  target={
                    item.title === "Location"
                      ? "_blank"
                      : undefined
                  }
                  rel={
                    item.title === "Location"
                      ? "noopener noreferrer"
                      : undefined
                  }
                >
                  {item.value}
                </Typography>

              </Box>

            </Box>
          ))}

        </Box>

        {/* Contact Form */}

        <Typography className="section-heading">
          Send Us a Message
        </Typography>

        <Box
          component="form"
          onSubmit={handleSubmit}
          className="contact-form"
        >

          {/* Name Field */}

          <TextField
            name="name"
            label="Name"
            placeholder="Your Name"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
            error={name.length > 0 && !isNameValid}
            helperText={
              name.length > 0 && !isNameValid
                ? "Name must contain at least 3 characters"
                : ""
            }
          />

          {/* Email Field */}

          <TextField
            name="email"
            label="Email"
            placeholder="Your Email"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={email.length > 0 && !isEmailValid}
            helperText={
              email.length > 0 && !isEmailValid
                ? "Enter a valid email address"
                : ""
            }
          />

          {/* Message Field */}

          <TextField
            name="message"
            label="Message"
            placeholder="Your Message..."
            multiline
            rows={3}
            fullWidth
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            error={message.length > 0 && !isMessageValid}
            helperText={
              message.length > 0 && !isMessageValid
                ? "Message must contain at least 5 characters"
                : ""
            }
          />

          {/* Submit Button */}

          <Button
            type="submit"
            variant="contained"
            className="send-btn"
            disabled={!isFormValid}
          >
            Send Message
          </Button>

        </Box>

        {/* Our Location */}

        <Typography className="section-heading">
          Our Location
        </Typography>

        <a
          href="https://maps.app.goo.gl/JFomnr8u5xXP2M786?g_st=aw"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={map}
            alt="Map showing our location"
            className="wide-image map-image"
          />
        </a>

      </Container>

    </PageLayout>
  );
}