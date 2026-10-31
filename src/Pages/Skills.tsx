import { Box, Typography } from "@mui/material";
import "../Styles/fonts.css";
import "../Styles/Skills.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaCloud,
} from "react-icons/fa";

const skills = [
  {
    title: "HTML",
   icon: <FaHtml5 />,
    description:
      "HTML  (HyperText Markup Language) provides the structure of a web page using headings, paragraphs, links and images.",
  },
  {
    title: "CSS",
   icon: <FaCss3Alt />,
    description:
      "CSS (Cascading Style Sheets) controls the look and feel of a website, including layout, colors, fonts and responsive design.",
  },
  {
    title: "JavaScript",
    icon: <FaJs />,
    description:
      "JavaScript is a programming language that makes websites dynamic and interactive. It handles events and form validation.",
  },
  {
    title: "Git",
    icon: <FaReact />,
    description:
      "Git helps you track changes in your code, collaborate with others and manage different versions of your project.",
  },
  {
    title: "React",
    icon: <FaGitAlt />,
    description:
      "React is a JavaScript library for building fast, scalable and reusable user interfaces for web and mobile apps.",
  },
  {
    title: "API",
     icon: <FaCloud />,
    description:
      "APIs (Application Programming Interfaces) allow applications to communicate with other services and exchange data.",
  },
];

export default function Skills() {
  return (
    <Box className="skills-container">
      {skills.map((skill) => (
        <Box className="skill-card"
         key={skill.title}>
          <Box className="skill-heading">
   <Typography className="skill-title">
              {skill.icon}
            </Typography>
            <Typography className="skill-title">
              {skill.title}
            </Typography>
         
          </Box>

          <Typography className="skill-description">
            {skill.description}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}