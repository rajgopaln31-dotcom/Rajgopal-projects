 import {
  Avatar,
  Box,
  Container,
  Paper,
  Rating,
  Typography
} from "@mui/material";

import "../Styles/Reviews.css";
//import { PageLayout } from "../Components/Layout";

const reviews = [
  {
    name: "Satish Javvadi",
    initial: "S",
    text: "The team delivered our website exactly as we envisioned. Professional, responsive, and the web development was flawless. Highly recommend MegaViz for any software project."
  },
  {
    name: "Siva ganesh",
    initial: "S",
    text: "Excellent service and support throughout. They built our software solution with great attention to detail and delivered on time. Truly dependable partner."
  },
  {
    name: "Siva Naga",
    initial: "S",
    text: "Impressed with their expertise in web development. Clean code, modern design, and seamless functionality. MegaViz exceeded our expectations."
  },
  {
    name: "Muthireddy Ramakrishna",
    initial: "M",
    text: "Outstanding experience working with MegaViz. They understood our requirements and created a robust platform that runs smoothly. Great communication too."
  },
  {
    name: "Ganga Vijay",
    initial: "G",
    text: "Professional and innovative. The software solution they built has streamlined our operations significantly. Highly professional and reliable team."
  },
  {
    name: "Chaitanya",
    initial: "C",
    text: "Fantastic work on our website and backend system. Responsive, modern, and scalable. MegaViz is our go-to for all tech solutions now."
  }
];

export default function Reviews() {
  return (
  //  <PageLayout>
      <Box className="review-page">
        <Container maxWidth="xl" className="review-container">

          <Typography className="review-heading">
            What Our Clients Say
          </Typography>

          <Box className="review-rating">
            <Typography className="rating-number">
              5.0
            </Typography>

            <Box className="rating-details">
              <Rating
                value={5}
                readOnly
                precision={0.5}
                className="main-rating"
              />

              <Box className="google-reviews">
                <Typography className="google-icon">G</Typography>
                <Typography className="google-text">
                  Google Reviews
                </Typography>
                <Typography className="review-count">
                  1,240+ Reviews
                </Typography>
              </Box>
            </Box>
          </Box>

          <Typography className="review-subtitle">
            Trusted by businesses for exceptional web development & software solutions
          </Typography>

          <Box className="review-grid">
            {reviews.map((review) => (
              <Paper
                elevation={0}
                className="review-card"
                key={review.name}
              >
                <Box className="review-user">
                  <Avatar className="review-avatar">
                    {review.initial}
                  </Avatar>

                  <Box className="review-user-details">
                    <Typography className="review-name">
                      {review.name}
                    </Typography>

                    <Rating
                      value={5}
                      readOnly
                      className="card-rating"
                    />
                  </Box>
                </Box>

                <Typography className="review-text">
                  {review.text}
                </Typography>
              </Paper>
            ))}
          </Box>

        </Container>
      </Box>
 //   </PageLayout>
  );
}