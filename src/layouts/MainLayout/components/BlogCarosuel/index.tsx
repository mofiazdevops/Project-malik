import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import one from "../../../../assets/pngs/1.png";
import two from "../../../../assets/pngs/2.png";
import three from "../../../../assets/pngs/3.png";
import four from "../../../../assets/pngs/4.png";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  Typography,
} from "@mui/material";
import { useBlog } from "contexts/blogContext";
import { Link, useHistory } from "react-router-dom";

interface Post {
  id: string;
  _id: string;
  title: string;
  content: string;
  thumbnail: string; // Add this line if the API returns a thumbnail URL
}

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

export const BlogCarosuel: React.FC = () => {
  const history = useHistory();
  const { data, globalLoader } = useBlog();

  if (globalLoader)
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress sx={{ color: "white" }} />
      </Box>
    );

  if (!data || data.length === 0)
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "20vh",
        }}
      >
        <Typography
          sx={{ color: "white", fontSize: "24px", fontWeight: "bold" }}
        >
          No data found.
        </Typography>
      </Box>
    );

  return (
    <div
      style={{
        backgroundColor: "#081015",
        paddingTop: "10%",
        paddingBottom: "20px",
      }}
    >
      {data && (
        <Box
          sx={{
            backgroundColor: "#000000",
            color: "#FFFFFF",
            //   width: "100%",
            maxWidth: "1000px",
            height: { xs: "auto", sm: "auto", md: "auto", lg: "40%" },
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
            <Link to="/blog" style={{ textDecoration: "none" }}>
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
            </Link>
          </Box>

          {/* Carousel */}
          <Carousel
            responsive={responsive}
            swipeable
            draggable
            // showDots
            infinite
            autoPlay
            autoPlaySpeed={3000}
            keyBoardControl
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            itemClass="carousel-item-padding-40-px"
            // dotListClass="custom-dot-list-style"
          >
            {data.map((blog) => {
              const imageUrl = blog?.thumbnail?.startsWith("http")
                ? blog?.thumbnail
                : `http://localhost:4000/${blog.thumbnail}`;
              return (
                <Card
                  key={blog._id}
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
                    image={imageUrl}
                    alt="Blog Image"
                    sx={{
                      width: { xs: "100%", md: "50%" },
                      height: "300px",
                      objectFit: "contain",
                      borderRadius: "12px",
                    }}
                  />
                  <CardContent
                    sx={{
                      flex: "1 0 auto",
                      alignItems: "center",
                      px: 3,
                      width: { xs: "100%", sm: "509px" },
                      height: { xs: "auto", sm: "240px" },
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
                        fontFamily: "SF Pro Display",
                        fontSize: {
                          xs: "20px",
                          sm: "24px",
                          md: "24px",
                          lg: "32px",
                        },
                        display: "-webkit-box", // Enables multi-line truncation
                        WebkitBoxOrient: "vertical", // Makes the box orientation vertical
                        WebkitLineClamp: 2, // Limits the text to 2 lines
                        overflow: "hidden", // Hides the overflow
                      }}
                    >
                      {blog.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        mb: 2,
                        fontSize: {
                          xs: "14px",
                          sm: "16px",
                          md: "20px",
                          lg: "22px",
                        },
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        WebkitLineClamp: 2,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        fontFamily: "SF Pro Display",
                        fontWeight: "regular",
                      }}
                      component="div"
                      dangerouslySetInnerHTML={{ __html: blog.content }}
                    />
                    {/* {blog.content}
                  </Typography> */}
                    <Button
                      onClick={() => history.push(`/${blog.url}`)}
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
              );
            })}
          </Carousel>
        </Box>
      )}
    </div>
  );
};
