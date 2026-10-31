import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Box,
  Button,
  TextField,
  Typography,
  Checkbox,
  InputAdornment,
  IconButton,
  Card,
  CardContent,
} from "@mui/material";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import PersonOutlineIcon from "@mui/icons-material/Person";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import CheckIcon from "@mui/icons-material/Check";

import "../Styles/Signup.css";
import "../Styles/Fonts.css";

function Signup() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agree, setAgree] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [success, setSuccess] = useState(false);

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const passwordValid = /^.{8,}$/.test(password);

  const handleSignup = () => {
    if (!name.trim()) {
      alert("Please enter your name");
      return;
    }

    if (emailValid && passwordValid && agree) {
      console.log("Name:", name);
      console.log("Email:", email);
      console.log("Password :",password);
      console.log("Terms accepted:", agree);

      setSuccess(true);
    } else {
      alert("Please check your details");
    }
  };

  // SUCCESS SCREEN
  if (success) {
    return (
      <Box className="success-page">
        <Card className="registration-card">
          <CardContent className="registration-content">
            <Box className="success-icon-circle">
              <CheckIcon className="success-check-icon" />
            </Box>

            <Typography className="registration-title">
              Success
            </Typography>

            <Typography className="registration-message">
              Your account has been successfully registered
            </Typography>

            <Button
              fullWidth
              variant="contained"
              className="registration-login-button"
              onClick={() => navigate("/login")}
            >
              Login
            </Button>
          </CardContent>
        </Card>
      </Box>
    );
  }

  // SIGNUP SCREEN
  return (
    <Box className="signup-page">
      <IconButton onClick={() => navigate("/welcome")}>
        <ArrowBackIosNewIcon />
      </IconButton>

      <Typography variant="h5" className="signup-title">
        Sign Up
      </Typography>

      <Box className="signup-form">
        {/* NAME */}
        <TextField
          fullWidth
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          error={name.length > 0 && name.trim() === ""}
          helperText={
            name.length > 0 && name.trim() === ""
              ? "Name is required"
              : " "
          }
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <PersonOutlineIcon />
                </InputAdornment>
              ),
            },
          }}
        />

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
                    onClick={() => setShowPassword(!showPassword)}
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

        {/* TERMS */}
        <Box className="terms-row">
          <Checkbox
            checked={agree}
            onChange={(e) => setAgree(e.target.checked)}
          />

          <Typography variant="body2">
            I agree to the medicdoc{" "}
            <span>Terms of Service</span> and{" "}
            <span>Privacy Policy</span>
          </Typography>
        </Box>

        {/* SIGNUP BUTTON */}
        <Button
          fullWidth
          variant="contained"
          className="signup-button"
          disabled={
            !emailValid ||
            !passwordValid ||
            !agree ||
            !name.trim()
          }
          onClick={handleSignup}
        >
          Sign Up
        </Button>

        {/* LOGIN LINK */}
        <Typography className="login-text">
          Already have an account?{" "}
          <span onClick={() => navigate("/login")}>
            Log In
          </span>
        </Typography>
      </Box>
    </Box>
  );
}

export default Signup;