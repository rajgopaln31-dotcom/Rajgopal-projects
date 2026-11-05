import { useState } from "react";
import type { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";

import {
  Box,
  Button,
  Container,
  Typography,
  IconButton
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import megaicon from "../images/megaicon.png";

export function Header() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    ["/home", "Home"],
    ["/about", "About Us"],
    ["/services", "Services"],
    ["/reviews", "Reviews"],
    ["/contact", "Contact"],
  ];

  return (
    <Box component="header" className="site-header">
      <Container className="header-inner">

        <Link
          to="/"
          className="logo-link"
          onClick={() => setMenuOpen(false)}
        >
          <img src={megaicon} alt="MegaViz logo" className="logo" />
        </Link>

        <nav className={`nav-links ${menuOpen ? "mobile-open" : ""}`}>
          {links.map(([path, label]) => (
            <Link
              key={path}
              to={path}
              className={
                location.pathname === path
                  ? "active-link"
                  : "nav-link"
              }
              style={{
                display: "inline-block",
                visibility: "visible",
                opacity: 1
              }}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
        </nav>

        <Button
          component={Link}
          to="/contact"
          variant="contained"
          className="start-btn"
          onClick={() => setMenuOpen(false)}
        >
          Get Started
        </Button>

        <IconButton
          className="hamburger-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </IconButton>

      </Container>
    </Box>
  );
}

export function Footer() {
  return (
    <Box component="footer" className="site-footer">
      <Container className="footer-inner">

        <img src={megaicon} alt="MegaViz logo" className="footer-logo" />

        <Box>
          <Typography className="footer-title">Company</Typography>
          <Link to="/about">About Us</Link>
          <Link to="/services">Services</Link>
          <Link to="/reviews">Reviews</Link>
          <Link to="/contact">Contact</Link>
        </Box>

        <Box>
          <Typography className="footer-title">Contact</Typography>

          <Typography component="a" href="mailto:info@megaviztech.com" className="footer-link">
            info@megaviztech.com
          </Typography>

          <Typography component="a" href="tel:+919154183243" className="footer-link">
            9154183243
          </Typography>

          <Typography
            component="a"
            href="https://www.google.com/maps/search/?api=1&query=Hyderabad+Madhapur"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            Hyderabad, Madhapur
          </Typography>
        </Box>

      </Container>

      <Typography className="copyright">
        © 2024 MegaVizTech. All rights reserved.
      </Typography>
    </Box>
  );
}

export function PageLayout({ children }: { children: ReactNode }) {
  return (
    <Box className="app-shell">
      <Header />
      <Box component="main">{children}</Box>
      <Footer />
    </Box>
  );
}