import { Box, Container, Typography } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import DrawIcon from "@mui/icons-material/Draw";
import CloudQueueIcon from "@mui/icons-material/CloudQueue";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import "./Services.css";
import "./NotFound.css";

const services = [
  { icon: <CodeIcon />, title: "Web Development", text: "Custom responsive websites and web applications built with modern frameworks, optimized for performance, SEO, and seamless user experience across all devices." },
  { icon: <PhoneAndroidIcon />, title: "Mobile App Development", text: "Native and cross-platform mobile apps for iOS and Android, designed for speed, security, and intuitive user experience to engage customers on the go." },
  { icon: <DrawIcon />, title: "UI/UX Design", text: "User-centered design solutions focused on research, wireframing, and prototyping to create beautiful, intuitive interfaces that delight users and drive conversion." },
  { icon: <CloudQueueIcon />, title: "Cloud & DevOps", text: "Scalable cloud infrastructure, DevOps automation, and CI/CD pipelines tailored to improve deployment speed, reliability, and cost-efficiency for your applications." },
  { icon: <PsychologyOutlinedIcon />, title: "AI & Automation", text: "Intelligent AI solutions and automation workflows that streamline processes, leverage machine learning, and unlock data-driven insights to boost productivity." },
  { icon: <QueryStatsIcon />, title: "Digital Marketing & SEO", text: "Data-driven digital marketing strategies including SEO, PPC, and analytics to increase online visibility, drive traffic, and grow your brand presence." },
];

export default function Services() {
  return (
    <Container maxWidth="lg" className="services-page page-container">
      <Typography className="page-title">Our Services</Typography>
      <Typography className="page-subtitle">What We Do Best</Typography>

      <Box className="services-image">
        <img
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80"
          alt="Web development workspace"
          loading="lazy"
        />
      </Box>

      <Box className="services-grid">
        {services.map((service) => (
          <Box className="service-card" key={service.title}>
            <Box className="service-icon">{service.icon}</Box>
            <Typography variant="h5">{service.title}</Typography>
            <Typography>{service.text}</Typography>
          </Box>
        ))}
      </Box>
    </Container>
  );
}