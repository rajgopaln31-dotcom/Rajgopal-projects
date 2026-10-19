import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  TextField,
  Button,
  Stack,
  Link,
} from "@mui/material";

const Contact: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    );

    window.location.href = `mailto:YOUR_EMAIL@example.com?subject=${subject}&body=${body}`;
  };

  return (
    <Box className="portfolio-page">
       <Typography className="brand-name">
                  MUTTIREDDY RAJGOPAL
                </Typography>
      <Container maxWidth={false} className="portfolio-container">
        {/* Your existing header/menu component */}
    

        <Box component="main" className="contact-main">
          <Typography component="h1" className="contact-title">
            Contact
          </Typography>

          <Typography className="contact-description">
            Have a role or a project in mind? Send a message.
          </Typography>

          <Box className="contact-grid">
            {/* Contact form */}
            <Card
              variant="outlined"
              className="contact-form-card"
            >
              <CardContent className="contact-form-content">
                <Box
                  component="form"
                  onSubmit={handleSubmit}
                  className="contact-form"
                >
                  <Stack spacing={1.75}>
                    <Box className="contact-field">
                      <Typography
                        component="label"
                        htmlFor="contact-name"
                        className="contact-label"
                      >
                        Name
                      </Typography>

                      <TextField
                        id="contact-name"
                        fullWidth
                        required
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        variant="outlined"
                        className="contact-input"
                      />
                    </Box>

                    <Box className="contact-field">
                      <Typography
                        component="label"
                        htmlFor="contact-email"
                        className="contact-label"
                      >
                        Email
                      </Typography>

                      <TextField
                        id="contact-email"
                        fullWidth
                        required
                        type="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        variant="outlined"
                        className="contact-input"
                      />
                    </Box>

                    <Box className="contact-field">
                      <Typography
                        component="label"
                        htmlFor="contact-message"
                        className="contact-label"
                      >
                        Message
                      </Typography>

                      <TextField
                        id="contact-message"
                        fullWidth
                        required
                        multiline
                        rows={4}
                        value={message}
                        onChange={(event) => setMessage(event.target.value)}
                        variant="outlined"
                        className="contact-input contact-message-input"
                      />
                    </Box>

                    <Box>
                       <Link
                      href="mailto:rajgopaln31@gmail.com"
                      underline="none"
                      className="contact-info-link"
                    >
                      
                    
                      <Button
                        type="submit"
                        variant="contained"
                        className="contact-submit-button"
                      >
                        
                        Send message
                      </Button>
                      </Link>
                    </Box>
                  </Stack>
                </Box>
              </CardContent>
            </Card>

            {/* Other contact methods */}
            <Card
              variant="outlined"
              className="contact-info-card"
            >
              <CardContent className="contact-info-content">
                <Typography
                  component="h2"
                  className="contact-info-title"
                >
                  Other ways to reach me
                </Typography>

                <Stack spacing={1.1} className="contact-info-list">
                  <Typography className="contact-info-text">
                    Email:{" "}
                    <Link
                      href="mailto:rajgopaln31@gmail.com"
                      underline="none"
                      className="contact-info-link"
                    >
                      [rajgopan31@gmail.com]
                    </Link>
                  </Typography>

                  <Typography className="contact-info-text">
                    GitHub:{" "}
                    <Link
                      href="https://github.com/rajgopaln31-dotcom"
                      target="_blank"
                      rel="noopener noreferrer"
                      underline="none"
                      className="contact-info-link"
                    >
                      [rajgopaln31-dotcom]
                    </Link>
                  </Typography>

                  <Typography className="contact-info-text">
                    Naukri:{" "}
                    <Link
                      href="https://www.naukri.com/mnjuser/profile"
                      target="_blank"
                      rel="noopener noreferrer"
                      underline="none"
                      className="contact-info-link"
                    >
                      [MUTTIREDDY RAJGOPAL]
                    </Link>
                  </Typography>
                </Stack>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Container>
       {/* Footer Element */}
            <Box component="footer" className="footer-wrapper">
              <Typography variant="caption">
                © 2026 MUTTIREDDY RAJGOPAL
              </Typography>
            </Box>
    </Box>
  );
};

export default Contact;