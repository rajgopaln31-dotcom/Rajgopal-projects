import { Box, Container, Typography } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import DrawIcon from "@mui/icons-material/Draw";
import CloudQueueIcon from "@mui/icons-material/CloudQueue";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import { PageLayout } from "../Components/Layout";
import "../styles/Services.css";
import gopal from "../images/gopal.png";

const services = [
  { icon: <CodeIcon />, title: "Web Development", text: "Responsive websites and web applications built with modern frameworks." },
  { icon: <PhoneAndroidIcon />, title: "Mobile App Development", text: "Mobile apps for iOS and Android, designed for speed and usability." },
  { icon: <DrawIcon />, title: "UI/UX Design", text: "User-centred design, wireframes and beautiful interfaces." },
  { icon: <CloudQueueIcon />, title: "Cloud & DevOps", text: "Scalable cloud infrastructure and reliable deployment pipelines." },
  { icon: <PsychologyOutlinedIcon />, title: "AI & Automation", text: "Smart AI solutions and automation that improve productivity." },
  { icon: <QueryStatsIcon />, title: "Digital Marketing & SEO", text: "SEO and digital strategies to increase online visibility." }
];

export default function Services() {
  return (
    <PageLayout>
      <Container className="page services-page">
        <Typography className="page-title">Our Services</Typography>
        <Typography className="page-subtitle">What We Do Best</Typography>
        <img className="wide-image" src={gopal} alt="Our team" style={{ transform: "translateY(-15px)" }}></img>
        <Box className="services-grid">
          {services.map((service) => (
            <Box className="service-card" key={service.title}>
              <Box className="teal-icon">{service.icon}</Box>
              <Typography className="card-title">{service.title}</Typography>
              <Typography>{service.text}</Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </PageLayout>
  );
}