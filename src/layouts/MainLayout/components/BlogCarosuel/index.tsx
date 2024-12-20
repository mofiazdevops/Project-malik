import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import one from "../../../../assets/pngs/1.jpg";
import two from "../../../../assets/pngs/2.jpg";
import three from "../../../../assets/pngs/3.jpg";
import four from "../../../../assets/pngs/4.jpg";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

// Blog Data
const blogs = [
  {
    id: 1,
    title:
      "1 MicroStrategy Becomes a Symbol of Bitcoin (BTC) Investment Strategy",
    description: "Catch up with all the news and more with IDEA Newsletter!",
    image: one,
  },
  {
    id: 2,
    title: "MicroStrategy Becomes a Symbol of Bitcoin (BTC) ",
    description: "Catch up with all the news and more with IDEA Newsletter!",
    image: two,
  },
  {
    id: 3,
    title:
      "MicroStrategy Becomes a Symbol of Bitcoin (BTC) Investment Strategy",
    description: "Catch up with all the news and more with IDEA Newsletter!",
    image: three, // Replace with your image
  },
  {
    id: 4,
    title:
      "MicroStrategy Becomes a Symbol of Bitcoin (BTC) Investment Strategy",
    description: "Catch up with all the news and more with IDEA Newsletter!",
    image: four, // Replace with your image
  },
  // You can add more blog objects here for testing
];

// Carousel Responsive Configuration
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export const BlogCarosuel = () => {
  return (
    <div
      style={{
        backgroundColor: "#081015",
        paddingTop: "10%",
        paddingBottom: "20px",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#000000",
          color: "#FFFFFF",
          //   width: "100%",
          maxWidth: "1000px",
          height: { xs: "auto", sm: "auto", md: "auto", lg: "432px" },
          ml: { xs: "20px", sm: "20px", md: "20px", lg: "auto" },
          mr: { xs: "20px", sm: "20px", md: "20px", lg: "auto" },
          overflow: "hidden",
          padding: { xs: 2, sm: 3 },
          border: "2px solid  rgba(255, 255, 255, 0.1)", // Border color and thickness
          borderRadius: "16px",
          fontFamily: "SF Pro Display",
          boxShadow: `0px 4px 6px rgba(255, 255, 255, 0.2), 
            0px 30px 15px rgba(0, 0, 0, 0.3), 
            0px 20px 25px rgba(0, 0, 0, 0.2), 
            0px 0px 40px rgba(103, 136, 255, 0.6)`,
        }}
      >
        {/* Header */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "16px", // Equivalent to mb={2}
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "16px", sm: "24px", lg: "32px" },
            }}
          >
            Recent Blogs
          </Typography>
          <Button
            // variant="outlined"
            size="small"
            sx={{
              background: "linear-gradient(90deg, #FFFFFF, #3CADFF)", // Gradient direction and colors
              WebkitBackgroundClip: "text", // For Safari support
              backgroundClip: "text", // For modern browsers
              color: "transparent", // Make text color transparent so the gradient is visible
              fontWeight: "bold",
              border: "2px solid #8ecaf3",
              width: { xs: "80px", sm: "84px", lg: "97px" },
              fontSize: { xs: "12px", sm: "14px" },
              height: 42,
              borderRadius: "16px",
              textTransform: "none",
              "&:hover": {
                background: "linear-gradient(90deg, #3CADFF, #FFFFFF)",
                backgroundClip: "text",
                color: "transparent",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              },
            }}
          >
            View All
          </Button>
        </Box>

        {/* Carousel */}
        <Carousel
          responsive={responsive}
          swipeable
          draggable
          showDots
          infinite
          autoPlay
          autoPlaySpeed={3000}
          keyBoardControl
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          itemClass="carousel-item-padding-40-px"
          dotListClass="custom-dot-list-style"
        >
          {blogs.map((blog) => (
            <Card
              key={blog.id}
              sx={{
                background: "transparent",
                color: "#FFFFFF",
                display: "flex",
                flexDirection: { xs: "column", sm: "column", md: "row" },
                alignItems: "center",
                borderRadius: "12px",
                overflow: "hidden",
              }}
            >
              <CardMedia
                component="img"
                image={blog.image}
                alt="Blog Image"
                sx={{
                  width: "480px",
                  height: "290px",
                  objectFit: "cover",
                  borderRadius: "12px",
                }}
              />
              <CardContent
                sx={{
                  flex: "1 0 auto",
                  p: 3,
                  width: { xs: "100%", sm: "509px" },
                  height: { xs: "auto", sm: "211px" },
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "medium",
                    mb: 1,
                    whiteSpace: "normal",
                    background: "linear-gradient(90deg, #FFFFFF, #3CADFF)", // Gradient direction and colors
                    WebkitBackgroundClip: "text", // For Safari support
                    backgroundClip: "text", // For modern browsers
                    color: "transparent",
                    fontSize: { xs: "16px", md: "24px", lg: "32px" },
                  }}
                >
                  {blog.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    mb: 2,
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: 1,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {blog.description}
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#00ADEF",
                    color: "#FFFFFF",
                    textTransform: "none",
                  }}
                >
                  Read
                </Button>
              </CardContent>
            </Card>
          ))}
        </Carousel>
      </Box>
    </div>
  );
};
