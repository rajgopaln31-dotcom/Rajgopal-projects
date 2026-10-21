import { useState, type FormEvent } from "react";

import {
  Box,
  Typography,
  Card,
  CardContent,
  TextField,
  Button,
  IconButton,
  Tooltip,
} from "@mui/material";

import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import GitHubIcon from "@mui/icons-material/GitHub";
import WorkIcon from "@mui/icons-material/Work";

import Headermenu from "../Components/Headermenu";

export default function Contact() {
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [messageValue, setMessageValue] = useState("");

  const [touched, setTouched] = useState({
    name: false,
    email: false,
    message: false,
  });

  const isNameValid =
    /^[A-Za-z ]+$/.test(nameValue.trim()) &&
    nameValue.trim().length >= 3 &&
    nameValue.trim().length <= 50;

  const isEmailValid =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue.trim());

  const isMessageValid =
    messageValue.trim().length >= 10 &&
    messageValue.trim().length <= 500;

  const isFormValid =
    isNameValid && isEmailValid && isMessageValid;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!isFormValid) return;

    const formData = new FormData(event.currentTarget);

    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    console.log("Contact Form Details:");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    console.log({ name, email, message });
  };

  return (
    <Box className="page-panel contact-page" id="contact">
      <Headermenu />

      <Box className="contact-content">
        <Typography className="section-title">
          Contact
        </Typography>

        <Typography className="section-description">
          Have a role or a project in mind? Send a message.
        </Typography>

        <Box className="contact-grid">
          {/* Contact Form Card */}
          <Card className="contact-card" elevation={0}>
            <CardContent className="contact-card-content">
              <Box
                component="form"
                className="contact-form"
                onSubmit={handleSubmit}
              >
                <Typography className="form-label">
                  Name
                </Typography>

                <TextField
                  name="name"
                  className="contact-input"
                  placeholder="Enter your name"
                  value={nameValue}
                  onChange={(e) => setNameValue(e.target.value)}
                  onBlur={() =>
                    setTouched((prev) => ({
                      ...prev,
                      name: true,
                    }))
                  }
                  error={touched.name && !isNameValid}
                  helperText={
                    touched.name && !isNameValid
                      ? "Enter 3-50 letters and spaces only."
                      : "Name must contain 3-50 letters."
                  }
                  inputProps={{ maxLength: 50 }}
                  fullWidth
                  size="small"
                  required
                />

                <Typography className="form-label">
                  Email
                </Typography>

                <TextField
                  name="email"
                  type="email"
                  className="contact-input"
                  placeholder="Enter your email"
                  value={emailValue}
                  onChange={(e) => setEmailValue(e.target.value)}
                  onBlur={() =>
                    setTouched((prev) => ({
                      ...prev,
                      email: true,
                    }))
                  }
                  error={touched.email && !isEmailValid}
                  helperText={
                    touched.email && !isEmailValid
                      ? "Please enter a valid email address."
                      
                      : ""}
                  fullWidth
                  size="small"
                  required
                />

                <Typography className="form-label">
                  Message
                </Typography>

                <TextField
                  name="message"
                  className="contact-input message-input"
                  placeholder="Enter your message"
                  value={messageValue}
                  onChange={(e) => setMessageValue(e.target.value)}
                  onBlur={() =>
                    setTouched((prev) => ({
                      ...prev,
                      message: true,
                    }))
                  }
                  error={touched.message && !isMessageValid}
                  helperText={
                    touched.message && !isMessageValid
                      ? "Message must contain 10-500 characters."
                      : `${messageValue.trim().length}/500 characters. Minimum 10.`
                  }
                  inputProps={{ maxLength: 500 }}
                  fullWidth
                  multiline
                  rows={4}
                  required
                />

                <Button
                  type="submit"
                  variant="contained"
                  className="primary-button send-button"
                  fullWidth
                  disabled={!isFormValid}
                >
                  Send message
                </Button>
              </Box>
            </CardContent>
          </Card>

          {/* Social Media Icons Card */}
          <Card className="contact-card social-card" elevation={0}>
            <CardContent className="contact-card-content">
              <Typography className="social-title">
                Other ways to reach me
              </Typography>

              <Box className="social-icons-row">
                <Tooltip title="Email">
                  <IconButton
                    component="a"
                    href="mailto:yourmail@gmail.com"
                    className="social-icon email-icon"
                    aria-label="Email"
                  >
                    <EmailIcon />
                  </IconButton>
                </Tooltip>

                <Tooltip title="WhatsApp">
                  <IconButton
                    component="a"
                    href="https://wa.me/918977237103"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon whatsapp-icon"
                    aria-label="WhatsApp"
                  >
                    <WhatsAppIcon />
                  </IconButton>
                </Tooltip>

                <Tooltip title="Naukri">
                  <IconButton
                    component="a"
                    href="https://www.naukri.com/mnjuser/homepage"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon naukri-icon"
                    aria-label="Naukri"
                  >
                    <WorkIcon />
                  </IconButton>
                </Tooltip>

                <Tooltip title="GitHub">
                  <IconButton
                    component="a"
                    href="https://github.com/rajgopaln31-dotcom/rajgopal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon github-icon"
                    aria-label="GitHub"
                  >
                    <GitHubIcon />
                  </IconButton>
                </Tooltip>
              </Box>

              <Typography className="social-detail">
                Click an icon to connect with me.
              </Typography>
            </CardContent>
          </Card>
        </Box>

        {/* Footer */}
        <Typography className="page-footer">
          © 2026 MUTTIREDDY.RAJGOPAL
        </Typography>
      </Box>
    </Box>
  );
}