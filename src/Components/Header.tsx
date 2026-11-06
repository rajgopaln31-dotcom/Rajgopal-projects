import { useState } from "react";
import { NavLink } from "react-router-dom";
import { AppBar, Box, Button, IconButton, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import "./Header.css";
import logo from "../assets/logo.png";

const links = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Reviews", to: "/reviews" },
  { label: "Contact", to: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <AppBar position="sticky" elevation={0} className="site-header">
      <Toolbar className="header-toolbar">

        <NavLink
          to="/"
          className="brand"
          onClick={() => setMenuOpen(false)}
        >
          <img
            src={logo}
            alt="Megaviz Logo"
            className="brand-logo"
          />
        </NavLink>

        <IconButton
          className="mobile-menu-button"
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </IconButton>

        <Box className={`nav-links ${menuOpen ? "nav-links-open" : ""}`}>
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}

          <Button
            variant="contained"
            className="header-cta"
            onClick={() => {
              setMenuOpen(false);
              window.location.href = "/contact";
            }}
          >
            Get Started
          </Button>
        </Box>

      </Toolbar>
    </AppBar>
  );
}