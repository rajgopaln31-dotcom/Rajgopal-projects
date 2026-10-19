import React, { useState } from 'react';
import { 
  
  Typography, 
  Box, 
  TextField, 
  Grid, 
  Card, 
  CardContent, 
  Link 
} from '@mui/material';


interface ProjectItem {
  title: string;
  description: string;
  tags: string;
  stars: number;
  link: string;
}

const initialProjects: ProjectItem[] = [
  {
    title: "Portfolio Website",
    description: "Personal site built with React and CSS.",
    tags: "JavaScript",
    stars: 12,
    link: "#"
  },
  {
    title: "Todo App",
    description: "Add, complete and delete tasks.",
    tags: "JavaScript",
    stars: 8,
    link: "#"
  },
  {
    title: "Weather Dashboard",
    description: "Search a city and see the forecast.",
    tags: "React",
    stars: 21,
    link: "#"
  },
  {
    title: "Quiz Game",
    description: "Multiple choice quiz with a score.",
    tags: "JavaScript",
    stars: 5,
    link: "#"
  },
  {
    title: "Recipe Finder",
    description: "Find recipes by ingredient using an API.",
    tags: "React",
    stars: 14,
    link: "#"
  },
  {
    title: "Expense Tracker",
    description: "Track spending with a simple chart.",
    tags: "JavaScript",
    stars: 9,
    link: "#"
  }
];

export default function ProjectsDashboard(): React.JSX.Element {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredProjects = initialProjects.filter((project) =>
    project.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Box className="page-container">
     
          <Typography className="brand-name">
            MUTTIREDDY RAJGOPAL
          </Typography>
          
      

      {/* Main Container */}
      <Box component="main" className="main-wrapper">
        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" component="h1" className="page-title">
            Projects
          </Typography>
          <Typography variant="body1" className="page-subtitle">
            Things I built while learning.
          </Typography>
        </Box>

        {/* Filter Input */}
        <Box className="search-field-wrapper">
          <TextField
            fullWidth
            size="small"
            variant="outlined"
            placeholder="Search projects"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input-field"
          />
        </Box>

        {/* Display Grid */}
        <Grid container spacing={3}>
          {filteredProjects.map((project, idx) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={idx}>
              <Card className="project-card-mui" variant="outlined">
                <CardContent sx={{ p: 0 }}>
                  <Typography variant="h6" component="h3" className="card-title-text">
                    {project.title}
                  </Typography>
                  <Typography variant="body2" className="card-desc-text">
                    {project.description}
                  </Typography>
                </CardContent>
                
                <Box className="card-bottom-actions">
                  <Box className="meta-info-group">
                    <span className="tag-label">{project.tags}</span>
                    <span className="star-count-group">★ {project.stars}</span>
                  </Box>
                  <Link href={project.link} className="action-code-link">
                    View code
                  </Link>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Footer Element */}
      <Box component="footer" className="footer-wrapper">
        <Typography variant="caption">
          © 2026 MUTTIREDDY RAJGOPAL
        </Typography>
      </Box>
    </Box>
  );
}