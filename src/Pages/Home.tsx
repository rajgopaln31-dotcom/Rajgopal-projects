import { Box, Typography, Button,  } from '@mui/material';
import Raj from "../Images/Raj.png"
import { useNavigate } from 'react-router-dom';

function Home(){
  const navigate=useNavigate();
  const skills = ['HTML', 'CSS', 'Java', 'React', 'Git'];

  return (
    <Box className="container">
       <Typography className="brand-name">
                  MUTTIREDDY RAJGOPAL
                </Typography>
      <Box className="hero-section">
       
        <Box className="left-box">
          <Typography variant="h4" className="text">
            Hi, I'm RAJGOPAL.
            <br/> Frontend Developer
          </Typography>
          <Typography variant="h6" className="description">
            I build clean, fast apps with React. Currently Iam learning.
            and shipping every week
          </Typography>
        </Box>

       
        <Box className="right-box">
         <img
          src={Raj}
          alt="mr"
            className="avatar"></img>
           <Typography  variant="h6"className='profile-name'>
            MUTTIREDDY.RAJGOPAL
           </Typography>
        </Box>
      </Box>

      <Box className="button-section">
        <Button variant="contained"
        onClick={()=>navigate("/projects")} 
        className="contained-button">
          See my projects
        </Button>
        <Button variant="outlined" className="outlined-button">
          Get in touch
        </Button>
      </Box>

      <Box className="skills">
        <Typography variant="h6" className="description">
          Skills
        </Typography>
        <Box className="skills-container">
          {skills.map((skill, index) => (
            <Box key={index} className="skill-box">
              {skill}
            </Box>
            
          ))}
          <br/>

        </Box>
      </Box>
 {/* Footer Element */}
      <Box component="footer" className="footer-wrapper">
        <Typography variant="caption">
          © 2026 MUTTIREDDY RAJGOPAL
        </Typography>
      </Box>
    </Box>
  );
};

export default Home;