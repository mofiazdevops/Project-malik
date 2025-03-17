import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ClickableCard from "./ClickableCard";
import { Box, CircularProgress, Typography } from "@mui/material";
import { useHistory } from "react-router-dom";

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 1200 }, items: 3 },
  desktop: { breakpoint: { max: 1100, min: 1024 }, items: 3 },
  tablet: { breakpoint: { max: 1024, min: 768 }, items: 2 },
  mobile: { breakpoint: { max: 768, min: 0 }, items: 1 },
};

const CardCarousel = ({ data, loading }) => {
  const history = useHistory();
  if (loading)
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
    <Box sx={{ width: "100%", py: 5, px: { xs: 2, sm: 4, md: 6 } }}>
      <Carousel
        responsive={responsive}
        infinite
        autoPlay
        autoPlaySpeed={3000}
        keyBoardControl
        showDots={false}
        arrows
        transitionDuration={600} // Smooth transition effect
        containerClass="carousel-container"
        ssr={true} // Improves rendering performance
        partialVisible={false}
      >
        {data.map((card) => {
          const imageUrl = card.thumbnail?.startsWith("http")
            ? card.thumbnail
            : `http://localhost:4000/${card.thumbnail}`;
          return (
            <Box key={card._id} sx={{ px: 2 }}>
              <ClickableCard
                thumbnail={imageUrl}
                title={card.title}
                createdAt={card.date_created}
                onClick={() => history.push(`/${card.url}`)}
              />
            </Box>
          );
        })}
      </Carousel>
    </Box>
  );
};

export default CardCarousel;
