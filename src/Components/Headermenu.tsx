import { Box, Typography,  } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";


function Headermenu() {
  const navigate = useNavigate();
  const location = useLocation();

  const Gopal = [
    { id: 1, name: "Home", path: "/home" },
   
    { id: 5, name: "Projects", path: "/projects" },
    { id: 6, name: "Contacts", path: "/contacts" },
  ];

  return (
    <Box className="header-menu"
    >

     

      <Box className="header-nav">
        {Gopal.map((item) => (
          <Typography
            key={item.id}
            className={`nav-link ${
              location.pathname === item.path ? "active" : ""
            }`}
            onClick={() => navigate(item.path)}
          >
            {item.name}
          </Typography>
        ))}

       
       
      </Box>
    </Box>
  );
}

export default Headermenu;