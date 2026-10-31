import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "../Styles/Welcome.css"
import "../Styles/Fonts.css";
import Mediicon from "../Images/Mediicon.png"

function Welcome() {
  const navigate = useNavigate();

  return (
    <Box className="welcome-page">

      {/* Logo */}
      <Box className="logo">
       
      <Box
          component="img"
          src={Mediicon}
          alt="Medics Logo"
          className="logo-image"
        />

        <Typography className="logo-name">
          Medics
        </Typography>
      </Box>

      {/* Welcome message */}
      <Box className="welcome-text">
        <Typography className="heading">
          Let’s get started!
        </Typography>

        <Typography className="description">
          Login to enjoy the features we’ve
          <br />
          provided, and stay healthy!
        </Typography>
      </Box>

      {/* Buttons */}
      <Box className="buttons">

        <Button
          variant="contained"
          className="login-btn"
          onClick={() => navigate("/login")}
        >
          Login
        </Button>

        <Button
          variant="outlined"
          className="signup-btn"
          onClick={() => navigate("/signup")}
        >
          Sign Up
        </Button>

      </Box>
    </Box>
  );
}

export default Welcome;