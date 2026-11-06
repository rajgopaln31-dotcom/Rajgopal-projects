import { Box, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <Container maxWidth="lg" className="footer-inner">

        {/* Left Side - Logo */}
        <Box className="footer-logo">
          <Link to="/">
            <img src={logo} alt="MegaViz Logo" />
          </Link>
        </Box>

        {/* Center - Company */}
        <Box className="footer-column">
          <Typography className="footer-heading">
            Company
          </Typography>

          <Link to="/about">About Us</Link>
          <Link to="/services">Services</Link>
          <Link to="/reviews">Reviews</Link>
          <Link to="/contact">Contact</Link>
        </Box>

        {/* Right Side - Contact */}
        <Box className="footer-column">
          <Typography className="footer-heading">
            Contact
          </Typography>

          <a href="mailto:hello@megaviztech.com">
            hello@megaviztech.com
          </a>

          <a href="tel:+15552347890">
            9154183243
          </a>

          <a href="https://www.google.com/maps/dir//MegaViz+Technologies,+building,+SBC+working+Space+5th+Floor,+Mahindra+Pride+School,+Rd+Number+1,+KPHB+Phase+2,+Kukatpally,+Hyderabad,+Telangana+500072/@16.006439,80.510502,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bcb914aa2464b6d:0x6fbbd39ac992bd67!2m2!1d78.3996632!2d17.4874522?entry=ttu&g_ep=EgoyMDI2MTEwMi4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">
            Hyderabad, Telangana, India
          </a>
        </Box>

      </Container>

      <Typography className="copyright">
        © Copyright 2026 MegaVizTech. All rights reserved.
      </Typography>
    </footer>
  );
}