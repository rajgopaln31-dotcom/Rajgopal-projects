import { Box, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <Box component="header" className="site-header">
      <Typography sx={{
         fontfamily: "Inter, sans-serif",
         fontStyle:"10px"
      }}className="brand-name">
       MUTTIREDDY.RAJGOPAL
      </Typography>

      <Box component="nav" className="header-nav">
        <NavLink to="/" end className="nav-link">
          Home
        </NavLink>

        <NavLink to="/projects" className="nav-link">
          Projects
        </NavLink>

        <NavLink to="/contact" className="nav-link">
          Contact
        </NavLink>
      </Box>
    </Box>
  );
}