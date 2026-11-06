import { Box, Button, Container, Typography } from "@mui/material";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { Link } from "react-router-dom";
import "./NotFound.css";

export default function NotFound() {
  return (
    <Container maxWidth="md" className="not-found-page">
      <Box className="not-found-content">

        <ErrorOutlineOutlinedIcon className="not-found-icon" />

        <Typography variant="h1" className="not-found-code">
          404
        </Typography>

        <Typography variant="h4" className="not-found-title">
          Page Not Available
        </Typography>

        <Typography className="not-found-text">
          Sorry, this page is currently not available to view.
          Please check the URL or return to the home page.
        </Typography>

        <Button
          component={Link}
          to="/"
          variant="contained"
          startIcon={<HomeOutlinedIcon />}
          className="back-home-button"
        >
          Back to Home
        </Button>

      </Box>
    </Container>
  );
}