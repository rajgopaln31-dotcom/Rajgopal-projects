import { useState } from "react";

import {
  Box,
  Typography,
  Card,
  CardContent,
  TextField,
  Button,
  useMediaQuery,
} from "@mui/material";

import Headermenu from "../Components/Headermenu";
import myvideo from "../assets/myvideo.mp4";
import mobilevideo from "../assets/mobilevideo.mp4";

import "../styles/Fonts.css";
import "../Styles/Global.css"
import "../styles/Projects.css";

const projects = [
  {
    title: "Portfolio Website",
    description: "Personal site built with React and CSS.",
    technology: "JavaScript",
    stars: 12,
    link: "#",
  },
  {
    title: "Todo App",
    description: "Add, complete and delete tasks.",
    technology: "JavaScript",
    stars: 8,
    link: "#",
  },
  {
    title: "Weather Dashboard",
    description: "Search a city and see the forecast.",
    technology: "React",
    stars: 21,
    link: "#",
  },
  {
    title: "Quiz Game",
    description: "Multiple choice quiz with a score.",
    technology: "JavaScript",
    stars: 5,
    link: "#",
  },
  {
    title: "Recipe Finder",
    description: "Find recipes by ingredient using an API.",
    technology: "React",
    stars: 14,
    link: "#",
  },
  {
    title: "Expense Tracker",
    description: "Track spending with a simple chart.",
    technology: "JavaScript",
    stars: 9,
    link: "#",
  },
];

export default function Project() {
  const isMobileOrTablet = useMediaQuery("(max-width: 900px)");

  const [search, setSearch] = useState("");
  const [selectedProject, setSelectedProject] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const filteredSuggestions = projects.filter((project) =>
    `${project.title} ${project.description} ${project.technology}`
      .toLowerCase()
      .includes(search.trim().toLowerCase())
  );

  const visibleProjects = selectedProject
    ? projects.filter((project) => project.title === selectedProject)
    : projects;

  return (
    <Box className="page-panel projects-page moving-neon-border">
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

      <Box className="projects-content">
        <Typography className="section-title">
          Projects
        </Typography>

        <Typography className="section-description">
          Things I built while learning.
        </Typography>

        <Box className="project-search-wrapper">
          <TextField
            className="project-search"
            placeholder="Search projects"
            value={search}
            onChange={(event) => {
              setSearch(event.target.value);
              setSelectedProject("");
              setDropdownOpen(event.target.value.trim() !== "");
            }}
            onFocus={() => {
              if (search.trim() && !selectedProject) {
                setDropdownOpen(true);
              }
            }}
            variant="outlined"
            size="small"
            fullWidth
          />

          {dropdownOpen && search.trim() !== "" && (
            <Box className="project-dropdown">
              <Box className="project-dropdown-header">
                <Button
                  className="project-dropdown-close"
                  onClick={() => setDropdownOpen(false)}
                  aria-label="Close dropdown"
                >
                  ×
                </Button>
              </Box>

              {filteredSuggestions.length > 0 ? (
                filteredSuggestions.map((project) => (
                  <Box
                    key={project.title}
                    className="project-dropdown-item"
                    onClick={() => {
                      setSelectedProject(project.title);
                      setSearch(project.title);
                      setDropdownOpen(false);
                    }}
                  >
                    {project.title}
                  </Box>
                ))
              ) : (
                <Box className="project-dropdown-empty">
                  No projects found.
                </Box>
              )}
            </Box>
          )}
        </Box>

        <Box className="projects-grid">
          {visibleProjects.map((project) => (
            <Card
              className="project-card"
              elevation={0}
              key={project.title}
            >
              <CardContent className="project-card-content">
                <Typography className="project-title">
                  {project.title}
                </Typography>

                <Typography className="project-description">
                  {project.description}
                </Typography>

                <Box className="project-meta">
                  <Typography className="project-technology">
                    {project.technology}
                  </Typography>

                  <Typography className="project-stars">
                    ★ {project.stars}
                  </Typography>

                  <Button
                    className="project-link"
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View code
                  </Button>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>

        <Typography className="page-footer">
          © 2026 MUTTIREDDY.RAJGOPAL
        </Typography>

        <Box className="developer-marquee">
          <Typography className="moving-developer">
            FULL STACK DEVELOPER
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}