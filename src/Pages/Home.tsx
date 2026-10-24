import {
  Box,
  Typography,
  Button,
  Chip,
} from "@mui/material";

import { useNavigate } from "react-router-dom";
import Headermenu from "../Components/Headermenu";
import Raj from "../Images/Raj.png"


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

  return (
    <>
  
    <Box  className="page-panel home-page">
     <Headermenu/>
      <Box className="home-content">
      
        <Box className="hero-section">
          <Box className="hero-text">
            <Typography className="hero-title">
              Hi, I'm RAJGOPAL.
              <br />
              Frontend Developer.
            </Typography>

            <Typography className="hero-description">
              I build clean, fast web apps with React.Currently learning and<br/>
               shipping every week.
            </Typography>

            <Box className="hero-actions">
              <Button 
                variant="contained"
                className="primary-button"
                onClick={() =>navigate("/projects")}
                 
              >
                See my projects
              </Button>

              <Button onClick={()=>navigate("/contact")}
                variant="text"
                className="text-button"
               
              >
                Get in touch
              </Button>
            </Box>
          </Box>

          <Box className="profile-circle">
            <Box className="profile-circle">
  <img
    src={Raj}
    alt="My Profile"
    className="profile-image"
  />
</Box>
            
            
          </Box>
        </Box>

        <Box className="skills-section">
          <Typography className="skills-title">
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

        <Typography className="page-footer">
          © 2026 MUTTIREDDY.RAJGOPAL
        </Typography>
      </Box>
    </Box>
    </>
  );
}