import {
  Box,
  Typography,
  Button,
  Chip,
  useMediaQuery,
} from "@mui/material";

import { useNavigate } from "react-router-dom";
import Headermenu from "../Components/Headermenu";
import laptopAvatar from "../Images/laptop-avatar.png";
import myvideo from "../assets/myvideo.mp4";
import mobilevideo from "../assets/mobilevideo.mp4";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Git",
  "REST APIs",
];

export default function Home() {
  const navigate = useNavigate();

  const isMobileOrTablet = useMediaQuery("(max-width: 900px)");

  return (
    <Box className="page-panel home-page">
      {isMobileOrTablet ? (
        <video
          key="mobile-video"
          className="page-background-video mobile-background-video"
          autoPlay
          loop
          //muted
          playsInline
          aria-hidden="true"
        >
          <source src={mobilevideo} type="video/mp4" />
        </video>
      ) : (
        <video
          key="desktop-video"
          className="page-background-video desktop-background-video"
          autoPlay
          loop
          //muted
          playsInline
          aria-hidden="true"
        >
          <source src={myvideo} type="video/mp4" />
        </video>
      )}

      <Headermenu />

      <Box className="home-content">
        <Box className="hero-section">
          <Box className="hero-text">
            <Typography className="hero-title">
              Hi, I'm RAJGOPAL.
              <br />
              Full-stack Developer.
            </Typography>

            <Typography className="hero-description">
              I build clean, fast web apps with React.
              Currently learning and shipping every week.
            </Typography>

            <Box className="hero-actions">
              <Button
                variant="contained"
                className="primary-button"
                onClick={() => navigate("/projects")}
              >
                See my projects
              </Button>

              <Button
                onClick={() => navigate("/contact")}
                variant="text"
                className="text-button"
              >
                Get in touch
              </Button>
            </Box>
          </Box>

          <Box className="profile-circle">
            <img
              src={laptopAvatar}
              alt="My Profile"
              className="profile-image"
            />
          </Box>
        </Box>

        <Box className="skills-section">
          <Typography className="skills-title"
          sx={{
            mb:3
          }}>
            Skills
          </Typography>

          <Box className="skills-list">
            {skills.map((skill) => (
              <Chip
                key={skill}
                label={skill}
                className="skill-chip"
              />
            ))}
          </Box>
        </Box>

       
        <Typography className="page-footer"
        sx={{
          mb:1
        }}>
          © 2026 MUTTIREDDY.RAJGOPAL
        </Typography>


         {/* Moving Full Stack Developer Text */}
        <Box className="developer-marquee">
          <Typography className="moving-developer">
            FULL STACK DEVELOPER
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}