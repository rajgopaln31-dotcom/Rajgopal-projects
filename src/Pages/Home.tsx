import {
  Box,
  Typography,
  Button,
  Chip,
  useMediaQuery,
} from "@mui/material";

import { useNavigate } from "react-router-dom";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaCloud,
} from "react-icons/fa";

import Headermenu from "../Components/Headermenu";
import laptopAvatar from "../Images/laptop-avatar.png";
import myvideo from "../assets/myvideo.mp4";
import mobilevideo from "../assets/mobilevideo.mp4";



const skills = [
  { name: "HTML", icon: <FaHtml5 />, color: "#E34F26" },
  { name: "CSS", icon: <FaCss3Alt />, color: "#1572B6" },
  { name: "JavaScript", icon: <FaJs />, color: "#F7DF1E" },
  { name: "React", icon: <FaReact />, color: "#61DAFB" },
  { name: "Git", icon: <FaGitAlt />, color: "#F05032" },
  { name: "REST APIs", icon: <FaCloud />, color: "#00CFFF" },
];

export default function Home() {
  const navigate = useNavigate();
  const isMobileOrTablet = useMediaQuery("(max-width: 900px)");

  return (
    <Box className="page-panel home-page moving-neon-border">
      {isMobileOrTablet ? (
        <video
          key="mobile-video"
          className="page-background-video mobile-background-video"
          autoPlay
          loop
          
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
              <span className="hero-line">
                Hi
                <span
                  className="hero-wave"
                  role="img"
                  aria-label="Waving hand"
                >
                  👋
                </span>
                <span
                  className="hero-thumbs"
                  role="img"
                  aria-label="Thumbs up"
                ></span>
                , I'm RAJGOPAL.
              </span>

              <br />

              <span className="hero-line">
                Full-stack Developer.
              </span>
            </Typography>

            <Typography className="hero-description">
              I build clean, fast web apps with React.
              Currently <br/>learning and shipping every week.
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

        {/* Skills */}
        <Box className="skills-section">
          <Typography className="skills-title" sx={{ mb: 3 }}>
            Skills
          </Typography>

          <Box className="skills-list skills-grid">
            {skills.map((skill) => (
              <Chip
                key={skill.name}
                icon={
                  <span
                    className="skill-icon"
                    style={{ color: skill.color }}
                  >
                    {skill.icon}
                  </span>
                }
                label={skill.name}
                className="skill-chip"
              />
          ))}
          </Box>
        </Box>

        <Typography className="page-footer" sx={{ mb: 1 }}>
          © 2026 MUTTIREDDY.RAJGOPAL
        </Typography>

        {/* Moving developer text */}
        <Box className="developer-marquee">
          <Box className="developer-marquee-track">
            {[0, 1].map((item) => (
              <Box
                className="developer-marquee-item"
                key={item}
                aria-hidden={item === 1}
              >
                <Typography className="moving-developer">
                  FULL STACK DEVELOPER
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}