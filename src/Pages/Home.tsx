import { Box, Button, Container, Typography } from "@mui/material";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import { Link } from "react-router-dom";

import "../Styles/Layout.css";
import "../Styles/Home.css";
//import { PageLayout } from "../Components/Layout";

import video1 from "../images/video1.mp4";

const steps = ["Discover", "Design", "Deliver"];

const features = [
  {
    icon: <GroupsOutlinedIcon />,
    title: "Expert Team",
    text: "Skilled professionals dedicated to innovation & quality."
  },
  {
    icon: <StarBorderIcon />,
    title: "On-time Delivery",
    text: "Reliable results delivered on schedule, every time."
  }
];

export default function Home() {
  return (
    //<PageLayout>
      <Container className="page home-page">

        <Typography className="hero-title">
          We Build Digital Products<br />
          That Drive Growth
        </Typography>

        <Typography className="hero-subtitle">
          Web • Mobile • Cloud • AI Solutions
        </Typography>

        {/* Background Video */}
        <video  
          className="wide-image"
          src={video1}
          autoPlay
          
          
          playsInline
        />


        <Box className="feature-grid" sx={{
          transform:"translatey(10px)"
        }}>
          {features.map((item) => (
            <Box className="feature-card" key={item.title}>
              <Box className="teal-icon">{item.icon}</Box>
              <Typography className="card-title">
                {item.title}
              </Typography>
              <Typography>{item.text}</Typography>
            </Box>
          ))}
        </Box>

        <Box className="trust-card">
          <Typography className="section-title">
            Trusted by Clients Worldwide
          </Typography>

          <Box className="trust-grid">
            <Box>
              <StarBorderIcon />
              <Typography>
                <b>100% Client Satisfaction</b>
              </Typography>
              <small>Proven track record of happy clients</small>
            </Box>

            <Box>
              <SupportAgentOutlinedIcon />
              <Typography>
                <b>24/7 Support Available</b>
              </Typography>
              <small>We're here whenever you need us</small>
            </Box>
          </Box>
        </Box>

        <Typography className="section-heading">
          How We Work
        </Typography>

        <Box className="steps-grid">
          {steps.map((step, i) => (
            <Box key={step}>
              <span className="step-number">{i + 1}</span>
              <b>{step}</b>
              <Typography>
                {[
                  "We understand your goals",
                  "Craft tailored solutions",
                  "Launch & support with care"
                ][i]}
              </Typography>
            </Box>
          ))}
        </Box>

        <Box className="home-cta">
          <Typography className="card-title">
            Let's Build Something Great Together
          </Typography>

          <Typography>
            Ready to bring your idea to life? Let's start today.
          </Typography>

          <Button
            component={Link}
            to="/contact"
            variant="contained"
            className="start-btn"
          >
            Get Started
          </Button>
        </Box>

      </Container>
    //</PageLayout>
  );
}