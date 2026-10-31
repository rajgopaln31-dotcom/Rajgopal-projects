import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Box,
  Button,
  TextField,
  Typography,
  IconButton,
  InputAdornment,
} from "@mui/material";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";

import "../Styles/Login.css";
import "../Styles/Fonts.css";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const passwordValid = /^.{8,}$/.test(password);

  const handleLogin = () => {
    if (emailValid && passwordValid) {
      console.log("Email:", email);
      console.log("Password :",password);

      setLoginSuccess(true);
    }
  };

  // SUCCESS SCREEN
  if (loginSuccess) {
    return (
      <Box className="success-page">
        <Box className="success-card">
          <Typography className="success-title">
            Welcome Back!
          </Typography>

          <Typography className="success-message">
            You have successfully logged in to Medics.
          </Typography>

          <Button
            fullWidth
            variant="contained"
            className="home-button"
            onClick={() => navigate("/welcome")}
          >
            Go to welcome
          </Button>
        </Box>
      </Box>
    );
  }

  // LOGIN SCREEN
  return (
    <Box className="login-page">
      <Box className="login-header">
        <IconButton onClick={() => navigate("/welcome")}>
          <ArrowBackIosNewIcon />
        </IconButton>

        <Typography className="login-title">
          Login
        </Typography>

        <Box className="header-space" />
      </Box>

      <Box className="login-form">
        {/* EMAIL */}
        <TextField
          fullWidth
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={email.length > 0 && !emailValid}
          helperText={
            email.length > 0 && !emailValid
              ? "Email is not valid"
              : " "
          }
          className="login-input"
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <EmailOutlinedIcon />
                </InputAdornment>
              ),
            },
          }}
        />

        {/* PASSWORD */}
        <TextField
          fullWidth
          placeholder="Enter your password"
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={password.length > 0 && !passwordValid}
          helperText={
            password.length > 0 && !passwordValid
              ? "Password must be at least 8 characters"
              : " "
          }
          className="login-input"
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <LockOutlinedIcon />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() =>
                      setShowPassword(!showPassword)
                    }
                    edge="end"
                  >
                    {showPassword ? (
                      <VisibilityOffOutlinedIcon />
                    ) : (
                      <VisibilityOutlinedIcon />
                    )}
                  </IconButton>
                </InputAdornment>
                ),
            },
          }}
        />

        {/* FORGOT PASSWORD */}
        <Typography
          className="forgot-password"
          onClick={() => navigate("/forgot")}
        >
          Forgot Password?
        </Typography>

        {/* LOGIN BUTTON */}
        <Button
          fullWidth
          variant="contained"
          className="submit-login"
          disabled={!emailValid || !passwordValid}
          onClick={handleLogin}
        >
          Login
        </Button>

        {/* SIGN UP */}
        <Typography className="signup-text">
          Don’t have an account?{" "}
          <Box
            component="span"
            onClick={() => navigate("/signup")}
          >
            Sign Up
          </Box>
        </Typography>
      </Box>
    </Box>
  );
}

export default Login;