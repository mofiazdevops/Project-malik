import React from "react";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { styled } from "@material-ui/core";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const StyledCard = styled(Card)({
  backgroundColor: "#AEAEAE",
  color: "white",
  borderRadius: "16px",
  boxShadow: "0px 4px 10px rgba(0,0,0,0.3)",
  transition: "transform 0.3s ease-in-out",
  "&:hover": {
    transform: "scale(1.05)",
    // border: "none",
  },
  cursor: "pointer",
});

const ClickableCard = ({ title, createdAt, onClick, thumbnail }) => {
  // const navigate = useNavigate();
  // const handleClick = () => {
  //   navigate(`/blog/${title}`);
  // };

  return (
    <div style={{ borderRadius: "10px", overflow: "hidden" }}>
      <div
        style={{
          width: "100%", // Takes full width of parent
          height: "200px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden", // Prevents overflow issues
          backgroundColor: "#000", // Optional background if image doesn't fill space
        }}
      >
        <CardMedia
          component="img"
          image={thumbnail}
          alt="Blog Thumbnail"
          sx={{
            width: "100%", // Ensures full width
            height: "100%", // Ensures full height
            objectFit: "contain", // Fits the image inside without cropping or distortion
          }}
        />
      </div>

      <CardContent sx={{ backgroundColor: "#1D1D1D" }}>
        <Typography variant="caption" sx={{ color: "white", fontSize: "10px" }}>
          {new Date(createdAt).toLocaleDateString("en-US", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}
        </Typography>
        <Typography
          variant="h6"
          fontWeight="bold"
          fontFamily="SF Pro Display"
          fontSize="16px"
          sx={{
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 1, // Limits to 2 lines
            overflow: "hidden",
            textOverflow: "ellipsis",
            background: "linear-gradient(45deg, #ffffff, #999999)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {title}
        </Typography>
        <button
          onClick={onClick}
          style={{
            display: "flex",
            alignItems: "center",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            padding: "4px 0",
          }}
        >
          {/* Gradient Text */}
          <Typography
            sx={{
              background: "linear-gradient(45deg, #ffffff, #999999)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontSize: "14px",
              fontWeight: 600,
              transition: "0.3s ease-in-out",
              "&:hover": {
                background: "linear-gradient(45deg,  #999999,#ffffff,)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              },
            }}
          >
            Read Blog
          </Typography>
          {/* External Link Icon */}
          <OpenInNewIcon
            sx={{
              fontSize: "15px",
              color: "#999999", // Light grey color
              paddingLeft: "3px",
            }}
          />
        </button>
      </CardContent>
    </div>
  );
};

export default ClickableCard;
