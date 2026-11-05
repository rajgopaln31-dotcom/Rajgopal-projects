import { Box, Container, Typography } from "@mui/material";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import MemoryIcon from "@mui/icons-material/Memory";
//import { PageLayout } from "../Components/Layout";
import "../Styles/Layout.css";
import "../Styles/AboutUs.css";
import story from "../images/story.jpg";


const reasons = [
  { icon: <VerifiedUserOutlinedIcon />, title: "Expert Team", text: "Skilled designers and developers dedicated to your success." },
  { icon: <MemoryIcon />, title: "Modern Technology", text: "Using modern tools and frameworks for scalable solutions." },
  { icon: <TrackChangesIcon />, title: "On-time Delivery", text: "Reliable project delivery without compromising quality." },
  { icon: <TrackChangesIcon />, title: "Affordable Solutions", text: "Cost-effective services tailored to your budget and goals." }
];

export default function Aboutus() {
  return (
    //<PageLayout>
      <Container className="page about-page">
        <Typography className="page-title">About MegaVizTech</Typography>
        <Typography className="page-subtitle">Building digital products that empower businesses to innovate and succeed.</Typography>
        <hr className="teal-line" />
        <Typography className="section-heading left-heading"></Typography>
        <img src={story} alt="Team working together" className="wide-image" />
        <Typography className="story-text">Founded in 2020,under ROC Hyderabad, MegaVizTech began with a mission to help startups and growing businesses transform ideas into impactful digital products. Today we partner with companies to turn vision into technology that drives results.</Typography>

        <Box className="vision-grid">
          <Box className="info-card"><TrackChangesIcon /><Typography className="card-title">Our Vision</Typography>
            <Typography>To be a trusted technology partner creating innovative digital solutions that shape the future.</Typography>
            <b className="stat-box">100%<small>Client Satisfaction</small></b>
          </Box>
          <Box className="info-card"><TrackChangesIcon /><Typography className="card-title">Our Mission</Typography>
            <Typography>To deliver high-quality web, mobile, cloud and AI solutions that help businesses grow.</Typography>
            <b className="stat-box">24/7<small>Support</small></b>
          </Box>
        </Box>

        <Typography className="section-heading">Why Choose Us</Typography>
        <Box className="reason-grid">
          {reasons.map((item) => (
            <Box className="reason-card" key={item.title}>
              <Box className="teal-icon">{item.icon}</Box>
              <Typography className="card-title">{item.title}</Typography>
              <Typography>{item.text}</Typography>
            </Box>
          ))}
        </Box>
      </Container>
   // </PageLayout>
  );
}