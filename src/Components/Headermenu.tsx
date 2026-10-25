import { Box, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <Box component="header" className="site-header">
      <Typography sx={{
         fontfamily: "Roboto, Arial,sans-serif",
         lineHeight:"1.2",
         fontWeight:"900",
         fontSize:"20px"
      }}className="brand-name">
       M.R.G
      </Typography>

      <Box component="nav" className="header-nav">
        <NavLink to="/home" end className="nav-link">
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