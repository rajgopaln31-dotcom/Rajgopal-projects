import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import {
  Box,
  Container,
  Typography,
  Button,
  TextField,
  IconButton,
} from "@mui/material";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

import "../Styles/Otp.css";
import "../Styles/Fonts.css";

function Otp() {
  const navigate = useNavigate();
  const location = useLocation();

  const phone = location.state?.phone || "";

  const [otp, setOtp] = useState("");

  const handleVerify = () => {
    if (otp.length !== 4) {
      alert("Please enter 4-digit OTP");
      return;
    }

    alert("OTP entered successfully");
  };

  return (
    <Box className="page-wrapper">
      <Container className="otp-container">
        <IconButton onClick={() => navigate(-1)}>
          <ArrowBackIosNewIcon className="back-icon" />
        </IconButton>

        <Typography variant="h5" className="title">
          Enter Verification Code
        </Typography>

        <Typography variant="body2" className="subtitle">
          Enter the code sent to your number{" "}
          <b>
            {phone
              ? phone.slice(0, 2) + "******" + phone.slice(-2)
              : "your phone number"}
          </b>
        </Typography>

        <TextField
          fullWidth
          placeholder="Enter 4-digit OTP"
          value={otp}
          onChange={(e) =>
            setOtp(
              e.target.value.replace(/\D/g, "").slice(0, 4)
            )
          }
          slotProps={{
            htmlInput: {
              maxLength: 4,
              inputMode: "numeric",
            },
          }}
          className="otp-input"
        />

        <Button
          fullWidth
          variant="contained"
          className="submit-btn"
          onClick={handleVerify}
        >
          Verify
        </Button>

        <Typography className="footer-text">
          Didn’t receive the code?{" "}
          <Box
            component="span"
            className="link"
            onClick={() => navigate("/forgot-password")}
          >
            Resend
          </Box>
        </Typography>
      </Container>
    </Box>
  );
}

export default Otp;