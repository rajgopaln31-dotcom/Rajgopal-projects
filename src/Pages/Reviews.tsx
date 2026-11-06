import { Box, Button, Container, Typography } from "@mui/material";
//import StarIcon from "@mui/icons-material/Star";
import GoogleIcon from "@mui/icons-material/Google";
import "./Reviews.css";

const reviews = [
  { initials: "SJ", name: "Satish Jawadi", text: "Excellent platform! The AI automation has saved us countless hours. Highly reliable and intuitive." },
  { initials: "SG", name: "Siva Ganesh", text: "Outstanding support and seamless integration. MegaViz truly transformed our workflows." },
  { initials: "SN", name: "Siva Naga", text: "User-friendly and powerful. The visualizing tools are top notch and easy to use." },
  { initials: "MR", name: "Muthireddy Ramakrishna", text: "Great experience with the team. Fast, efficient, and the results are impressive." },
  { initials: "GV", name: "Ganga Vijay", text: "We saw immediate impact on our operations. Clean dashboard and accurate insights." },
  { initials: "ST", name: "Suresh Thiru", text: "Reliable solution with fantastic AI features. Customer support is responsive and helpful." },
  { initials: "C", name: "Chaitanya", text: "Love the automation capabilities. It streamlined our processes perfectly." },
  { initials: "NM", name: "Navya Mamatha", text: "Highly recommend MegaViz! Professional, innovative, and future-ready." },
];

export default function Reviews() {
  return (
    <Container maxWidth="xl" className="reviews-page">
      <Box className="reviews-brand">
        <div className="review-logo">MEGA<span>V</span>IZ</div>
        <Typography className="page-title">What Our Clients Say</Typography>
        <Box className="rating-line">
          <strong>5.0</strong>
          <span className="big-stars">★★★★★★</span>
          <GoogleIcon />
          <b>Google Reviews</b>
        </Box>
      </Box>
      <Box className="reviews-grid">
        {reviews.map((review) => (
          <Box className="review-card" key={review.name}>
            <Box className="review-person">
              <span className="avatar">{review.initials}</span>
              <Box>
                <Typography variant="h6">{review.name}</Typography>
                <div className="stars">★★★★★</div>
              </Box>
            </Box>
            <Typography>{review.text}</Typography>
          </Box>
        ))}
      </Box>
      <Box className="review-actions">
        <Button className="orange-button" onClick={() => window.alert("More reviews can be added to the reviews list in Reviews.tsx.")}>Load More Reviews</Button>
        <Button className="orange-button" onClick={() => window.open("https://www.google.com/search?q=MegaVizTech+reviews", "_blank", "noopener,noreferrer")}>Write a Review</Button>
      </Box>
    </Container>
  );
}