import { useState } from "react";
import { Box, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <Box component="header" className="site-header">
      <Typography
        sx={{
          fontFamily: "Roboto, Arial, sans-serif",
          lineHeight: "1.2",
          fontWeight: "900",
          fontSize: "30px",
        }}
        className="brand-name"
      >
        M.R.G
      </Typography>

      <Box
        component="nav"
        className={`header-nav ${menuOpen ? "menu-open" : ""}`}
      >
        <NavLink
          to="/home"
          end
          className="nav-link"
          onClick={closeMenu}
        >
          Home
        </NavLink>

        <NavLink
          to="/projects"
          className="nav-link"
          onClick={closeMenu}
        >
          Projects
        </NavLink>

        <NavLink
          to="/contact"
          className="nav-link"
          onClick={closeMenu}
        >
          Contact
        </NavLink>
      </Box>

      <button
        type="button"
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={menuOpen}
      >
        {menuOpen ? "✕" : "☰"}
      </button>
    </Box>
  );
}