import { useState, type FormEvent } from "react";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
// @ts-ignore CSS imports are handled by the bundler, not TypeScript.
import "./Contact.css";

type FormValues = { name: string; email: string; message: string };
type FormErrors = Partial<FormValues>;

export default function Contact() {
  const [values, setValues] = useState<FormValues>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const next: FormErrors = {};
    if (!values.name.trim()) next.name = "Please enter your name";
    if (!values.email.trim()) next.email = "Please enter your email";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) next.email = "Enter a valid email";
    if (!values.message.trim()) next.message = "Please enter your message";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(false);
    if (!validate()) return;
    console.log("Contact form submitted:", values);
    setSubmitted(true);
    setValues({ name: "", email: "", message: "" });
  };

  const updateField = (field: keyof FormValues, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: "" }));
    setSubmitted(false);
  };

  return (
    <Container maxWidth="lg" className="contact-page page-container">
      <Typography className="page-title">Contact Us</Typography>
      <Typography className="page-subtitle">Let's Build Something Great Together.</Typography>

      <Box className="contact-info-grid">
        <Box className="contact-info-card">
          <span className="contact-info-icon"><EmailOutlinedIcon /></span>
          <Typography variant="h5">Email</Typography>
          <a href="mailto:hello@megaviztech.com">hello@megaviztech.com</a>
        </Box>
        <Box className="contact-info-card">
          <span className="contact-info-icon"><PhoneOutlinedIcon /></span>
          <Typography variant="h5">Phone</Typography>
          <a href="tel:+15552347890"> 9154183243</a>
        </Box>
        <Box className="contact-info-card">
          <span className="contact-info-icon"><LocationOnOutlinedIcon /></span>
          <Typography variant="h5">Location</Typography>
          <a href="https://www.google.com/maps/dir//MegaViz+Technologies,+building,+SBC+working+Space+5th+Floor,+Mahindra+Pride+School,+Rd+Number+1,+KPHB+Phase+2,+Kukatpally,+Hyderabad,+Telangana+500072/@16.006439,80.510502,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bcb914aa2464b6d:0x6fbbd39ac992bd67!2m2!1d78.3996632!2d17.4874522?entry=ttu&g_ep=EgoyMDI2MTEwMi4wIKXMDSoASAFQAw%3D%3D">
            Hyderabad, Telangana, India
          </a>
        </Box>
      </Box>

      <Box className="contact-content">
        <Box className="contact-form-area">
          <Typography variant="h3">Send Us a Message</Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate>
            <label htmlFor="contact-name">Name</label>
            <TextField id="contact-name" fullWidth placeholder="Your Name" value={values.name}
              onChange={(e) => updateField("name", e.target.value)} error={Boolean(errors.name)}
              helperText={errors.name} />
            <label htmlFor="contact-email">Email</label>
            <TextField id="contact-email" fullWidth placeholder="Your Email" value={values.email}
              onChange={(e) => updateField("email", e.target.value)} error={Boolean(errors.email)}
              helperText={errors.email} />
            <label htmlFor="contact-message">Message</label>
            <TextField id="contact-message" fullWidth multiline minRows={2} placeholder="Your Message..."
              value={values.message} onChange={(e) => updateField("message", e.target.value)}
              error={Boolean(errors.message)} helperText={errors.message} />
            <Button type="submit" fullWidth className="orange-button send-button">Send Message</Button>
            {submitted && <Typography className="success-message">Your message was submitted successfully!</Typography>}
          </Box>
        </Box>
       <Box className="location-area">
  <Typography variant="h3">Our Location</Typography>

  <Box
    component="a"
    href="https://www.google.com/maps/dir//MegaViz+Technologies,+building,+SBC+working+Space+5th+Floor,+Mahindra+Pride+School,+Rd+Number+1,+KPHB+Phase+2,+Kukatpally,+Hyderabad,+Telangana+500072"
    target="_blank"
    rel="noopener noreferrer"
    className="map-placeholder"
  >
    <div className="map-roads" />
    <LocationOnOutlinedIcon />
    <span style={{ transform: "translateY(-120%)" }}>MegaViz Technologies, Hyderabad</span>
    <span>Click to View Location</span>
  </Box>
</Box>
        </Box>
    
    </Container>
  );
}