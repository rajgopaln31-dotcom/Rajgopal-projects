import { useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  TextField,
  Button,
} from "@mui/material";
import Headermenu from "../Components/Headermenu";

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
  const [search, setSearch] = useState("");
  const [selectedProject, setSelectedProject] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const filteredSuggestions = projects.filter((project) =>
    `${project.title} ${project.description} ${project.technology}`
      .toLowerCase()
      .includes(search.trim().toLowerCase())
  );

  const visibleProjects = selectedProject
    ? projects.filter(
        (project) => project.title === selectedProject
      )
    : projects;

  return (
    <>
      <Box className="page-panel projects-page" id="projects">
        
        <Headermenu />

        <Box className="projects-content">
          <Typography className="section-title">
            Projects
          </Typography>

          <Typography className="section-description">
            Things I built while learning.
          </Typography>

          {/* Search field and dropdown */}
          <Box sx={{ position: "relative" }}>
            <TextField
              className="project-search"
              placeholder="Search projects"
              value={search}
              onChange={(event) => {
                setSearch(event.target.value);
                setSelectedProject("");
                setDropdownOpen(
                  event.target.value.trim() !== ""
                );
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
              <Box
                sx={{
                  position: "absolute",
                  top: "100%",
                  left: 0,
                  right: 0,
                  zIndex: 10,
                  mt: 1,
                  backgroundColor: "#ffffff",
                  border: "1px solid #e0e7ff",
                  borderRadius: "10px",
                  boxShadow: "0 6px 18px rgba(0,0,0,0.10)",
                  maxHeight: "240px",
                  overflowY: "auto",
                }}
              >
                {/* Dropdown close button */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    padding: "4px 8px",
                    borderBottom: "1px solid #eeeeee",
                    position: "sticky",
                    top: 0,
                    backgroundColor: "#ffffff",
                    zIndex: 1,
                  }}
                >
                  <Button
                    onClick={() => setDropdownOpen(false)}
                    aria-label="Close dropdown"
                    sx={{
                      minWidth: "28px",
                      width: "28px",
                      height: "28px", 
                      padding: 0,
                      color: "#555555",
                      fontSize: "20px",
                      lineHeight: 1,
                      "&:hover": {
                        backgroundColor: "#fee2e2",
                        color: "#dc2626",
                      },
                    }}
                  >
                    ×
                  </Button>
                </Box>

                {filteredSuggestions.length > 0 ? (
                  filteredSuggestions.map((project) => (
                    <Box
                      key={project.title}
                      onClick={() => {
                        setSelectedProject(project.title);
                        setSearch(project.title);
                        setDropdownOpen(false);
                      }}
                      sx={{
                        padding: "10px 14px",
                        cursor: "pointer",
                        color: "#222222",
                        fontSize: "14px",
                        transition: "background-color 0.2s ease",
                        "&:hover": {
                          backgroundColor: "#eef4ff",
                          color: "#1565c0",
                        },
                      }}
                    >
                      {project.title}
                    </Box>
                  ))
                ) : (
                  <Box
                    sx={{
                      padding: "12px",
                      color: "#777777",
                      fontSize: "14px",
                    }}
                  >
                    No projects found.
                  </Box>
                )}
              </Box>
            )}
          </Box>

          {/* Selected project or all six projects */}
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
        </Box>
      </Box>
    </>
  );
}