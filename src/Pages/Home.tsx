import { Box, Button, Container, Typography } from "@mui/material";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import HeadsetMicOutlinedIcon from "@mui/icons-material/HeadsetMicOutlined";
import StarIcon from "@mui/icons-material/Star";
import { Link } from "react-router-dom";
import "./Home.css";

const promises = [
  { icon: <GroupsOutlinedIcon />, title: "Expert Team", text: "Skilled professionals dedicated to innovation & quality." },
  { icon: <HeadsetMicOutlinedIcon />, title: "On-time Delivery", text: "Reliable results delivered on schedule, every time." },
];

export default function Home() {
  return (
    <Container maxWidth="lg" className="home-page">
      <Box className="home-hero">
        <Box className="hero-copy">
          <Typography component="h1">We Build Digital Products<br />That Drive Growth</Typography>
          <Typography className="hero-highlight">Web • Mobile • Cloud • AI Solutions</Typography>
          <Button component={Link} to="/contact" className="orange-button hero-button">Get Started</Button>
        </Box>
        <Box className="hero-photo">
          <img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=85" alt="Team collaborating around a laptop" />
        </Box>
      </Box>

      <Box className="home-lower">
        <Box className="promise-grid">
          {promises.map((item) => (
            <Box className="promise-card" key={item.title}>
              <Box className="orange-icon">{item.icon}</Box>
              <Typography variant="h5">{item.title}</Typography>
              <Typography>{item.text}</Typography>
            </Box>
          ))}
        </Box>
        <Box className="trust-column">
          <Typography variant="h4" className="trust-title">Trusted by Clients Worldwide:</Typography>
          <Box className="trust-panel">
            <Box className="trust-items">
              <Box><StarIcon /><strong>100% Client<br />Satisfaction</strong><p>We understand your goals.</p></Box>
              <Box><span className="number-icon">2</span><strong>Design<br />Available</strong><p>Craft tailored solutions.</p></Box>
              <Box><span className="number-icon">3</span><strong>24/7 Support<br />Available</strong><p>Launch &amp; support with care.</p></Box>
            </Box>
            <Box className="trust-cta">
              <Typography variant="h6">How We Work:<br />Let's Build Something Great Together</Typography>
              <p>Ready to bring your idea to life? Let's start today.</p>
              <Button component={Link} to="/contact" className="orange-button">Get Started</Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}