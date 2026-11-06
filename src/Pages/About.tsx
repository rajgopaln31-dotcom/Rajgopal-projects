import { Box, Container, Typography } from "@mui/material";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import DevicesOutlinedIcon from "@mui/icons-material/DevicesOutlined";
import ScheduleOutlinedIcon from "@mui/icons-material/ScheduleOutlined";
import SavingsOutlinedIcon from "@mui/icons-material/SavingsOutlined";
import "./About.css";

const reasons = [
  { icon: <GroupsOutlinedIcon />, title: "Expert Team", text: "Skilled designers and developers dedicated to your success." },
  { icon: <DevicesOutlinedIcon />, title: "Modern Technology", text: "Leveraging the latest tools and frameworks for scalable solutions." },
  { icon: <ScheduleOutlinedIcon />, title: "On-time Delivery", text: "Reliable project delivery without compromising quality." },
  { icon: <SavingsOutlinedIcon />, title: "Affordable Solutions", text: "Cost-effective services tailored to your budget and goals." },
];

export default function About() {
  return (
    <Container maxWidth="lg" className="about-page page-container">
      <Typography className="page-title">About MegaVizTech</Typography>
      <Typography className="page-subtitle">Building digital products that empower businesses to innovate and succeed.</Typography>
      <Box className="story-layout">
        <Box className="story-copy">
          <Typography variant="h3">Our Story</Typography>
          <div className="title-line" />
          <Typography>
            Founded in 2020, MegaVizTech began with a mission to help startups and growing
            businesses transform ideas into impact and innovation. Today we continue to partner
            with companies worldwide to turn vision into technology that drives results.
          </Typography>
        </Box>
        <Box className="about-photo">
          <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=85" alt="MegaVizTech team working together" />
        </Box>
      </Box>
      <Box className="about-bottom">
        <Box className="vision-grid">
          <Box className="vision-card">
            <TrackChangesIcon />
            <Typography variant="h5">Our Vision</Typography>
            <p>To be a trusted technology partner creating innovative digital solutions that shape the future.</p>
            <strong>100% Client Satisfaction ✓</strong>
          </Box>
          <Box className="vision-card">
            <RocketLaunchIcon />
            <Typography variant="h5">Our Mission</Typography>
            <p>To deliver high-quality web, mobile, cloud and AI solutions that help businesses grow.</p>
            <strong>24/7 Support ◷</strong>
          </Box>
        </Box>
        <Box className="reasons-area">
          <Typography variant="h5">Why Choose Us:</Typography>
          <Box className="reasons-grid">
            {reasons.map((item) => (
              <Box className="reason-card" key={item.title}>
                <Box>{item.icon}</Box>
                <strong>{item.title}</strong>
                <p>{item.text}</p>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Container>
  );
}