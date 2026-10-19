import { useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  TextField,
  Button,
} from "@mui/material";


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

  const filteredProjects = projects.filter((project) =>
    `${project.title} ${project.description} ${project.technology}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <Box className="page-panel projects-page" id="projects">
     
      <Box className="projects-content">
        <Typography className="section-title">
          Projects
        </Typography>

        <Typography className="section-description">
          Things I built while learning.
        </Typography>

        <TextField
          className="project-search"
          placeholder="Search projects"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          variant="outlined"
          size="small"
          fullWidth
        />

        <Box className="projects-grid">
          {filteredProjects.map((project) => (
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

        {filteredProjects.length === 0 && (
          <Typography className="empty-projects">
            No projects found.
          </Typography>
        )}

        <Typography className="page-footer">
          © 2026 MUTTIREDDY.RAJGOPAL
        </Typography>
      </Box>
    </Box>
  );
}