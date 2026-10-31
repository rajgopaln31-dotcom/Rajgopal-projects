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
import CheckIcon from "@mui/icons-material/Check";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";

import "../Styles/Forgot.css";
import "../Styles/Fonts.css";

function Forgot() {
  const navigate = useNavigate();

  const [type, setType] = useState("phone");
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleReset = () => {
    if (!value.trim()) {
      setError(
        type === "phone"
          ? "Please enter your phone number"
          : "Please enter your email"
      );
      return;
    }

    if (
      type === "email" &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
    ) {
      setError("Please enter a valid email address");
      return;
    }

    if (
      type === "phone" &&
      !/^[0-9]{10}$/.test(value)
    ) {
      setError("Enter a valid 10-digit phone number");
      return;
    }

    setError("");
    setSuccess(true);

console.log("User Type:",type);
console.log("User Details:",value);


    navigate("/otp", {
      state: {
        phone: value,
        type: type,
      },
    });
  };

  return (
    <Box className="forgot-page">
      <IconButton
        className="back-button"
        onClick={() => navigate("/login")}
      >
        <ArrowBackIosNewIcon />
      </IconButton>

      <Box className="forgot-content">
        <Typography className="forgot-title">
          Forgot Your Password?
        </Typography>

        <Typography className="forgot-description">
          Enter your email or your phone number, we will send you
          confirmation code
        </Typography>

        <Box className="type-switch">
          <Button
            className={
              type === "email" ? "type-active" : "type-option"
            }
            onClick={() => {
              setType("email");
              setValue("");
              setError("");
              setSuccess(false);
            }}
          >
            Email
          </Button>

          <Button
            className={
              type === "phone" ? "type-active" : "type-option"
            }
            onClick={() => {
              setType("phone");
              setValue("");
              setError("");
              setSuccess(false);
            }}
          >
            Phone
          </Button>
        </Box>

        <TextField
          fullWidth
          className="forgot-input"
          placeholder={
            type === "email"
              ? "Enter your email"
              : "Enter your phone number"
          }
          type={type === "email" ? "email" : "tel"}
          value={value}
          onChange={(e) => {
            setValue(
              type === "phone"
                ? e.target.value.replace(/\D/g, "").slice(0, 10)
                : e.target.value
            );
            setError("");
            setSuccess(false);
          }}
          error={Boolean(error)}
          helperText={error || " "}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  {type === "email" ? (
                    <EmailOutlinedIcon />
                  ) : (
                    <PhoneOutlinedIcon />
                  )}
                </InputAdornment>
              ),
              endAdornment: success ? (
                <InputAdornment position="end">
                  <CheckIcon className="valid-icon" />
                </InputAdornment>
              ) : null,
            },
          }}
        />

        <Button
          fullWidth
          className="reset-button"
          variant="contained"
          onClick={handleReset}
        >
          Reset Password
        </Button>

        {success && (
          <Typography className="success-message">
            Redirecting to verification page...
          </Typography>
        )}
      </Box>
    </Box>
  );
}

export default Forgot;