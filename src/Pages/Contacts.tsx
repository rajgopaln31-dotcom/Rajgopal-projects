import {
  useState,
  type FormEvent,
} from "react";

import {
  Box,
  Typography,
  Card,
  CardContent,
  TextField,
  Button,
} from "@mui/material";
import Headermenu from "../Components/Headermenu";


export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Connect your email service or backend here.
    console.log({ name, email, message });
  };

  return (
    <>
     <Typography sx={{
      transform:"translatex(40px)"
    }}>Contact</Typography>
    <Box className="page-panel contact-page" id="contact">
     <Headermenu/>
      <Box className="contact-content">
        <Typography className="section-title">
          Contact
        </Typography>

        <Typography className="section-description">
          Have a role or a project in mind? Send a message.
        </Typography>

        <Box className="contact-grid">
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
                  className="contact-input"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  fullWidth
                  size="small"
                  required
               
                />

                <Typography className="form-label">
                  Email
                </Typography>

                <TextField
                  className="contact-input"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  fullWidth
                  size="small"
                  required
            
                />

                <Typography className="form-label">
                  Message
                </Typography>

                <TextField
                  className="contact-input message-input"
                  value={message}
                  onChange={(event) =>
                    setMessage(event.target.value)
                  }
                  fullWidth
                  multiline
                  rows={4}
                  required
                />

                <Button
                  type="submit"
                  variant="contained"
                  className="primary-button send-button"
                >
                  Send message
                </Button>
                <Typography className="page-footer">
          © 2026 MUTTIREDDY.RAJGOPAL
        </Typography>
              </Box>
              
            </CardContent>
          </Card>

          <Card className="contact-card social-card" elevation={0}>
            <CardContent className="contact-card-content">
              <Typography className="social-title">
                Other ways to reach me
              </Typography>

              <Typography className="social-detail">
                Email:{" "}
                <a href="https://mail.google.com/mail/u/0/#inbox">
                  [MY MAIL]
                </a>
              </Typography>

              <Typography className="social-detail">
                GitHub:{" "}
                <a
                  href="https://github.com/rajgopaln31-dotcom/rajgopal"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  [MY GITHUB]
                </a>
              </Typography>

              <Typography className="social-detail">
                Naukri:{" "}
                <a
                  href="https://www.naukri.com/mnjuser/homepage"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  [MY LINKEDIN]
                </a>
              </Typography>
              <Typography className="social-detail">
              
                  [Contact:8977237103]
             
              </Typography>
              
              
            </CardContent>
          </Card>
        </Box>
        </Box>
        </Box>
        </>
  );
}