import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter"; // Change this if using older MUI version
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const ShareBanner = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: "linear-gradient(45deg, #5AB0FF, #1E90FF)",
        padding: "12px 20px",
        borderRadius: "15px",
        maxWidth: "900px",
        margin: "20px auto",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
        flexWrap: "wrap", // ✅ Ensures responsiveness
      }}
    >
      {/* Left Side Text */}
      <Typography
        sx={{
          color: "white",
          fontSize: { xs: "14px", sm: "16px" }, // ✅ Adjusts font size for small screens
          flex: 1,
        }}
      >
        Like what you see? Share with a friend.
      </Typography>

      {/* Right Side Social Icons */}
      <Box
        sx={{
          display: "flex",
          gap: "10px",
          alignItems: "center",
        }}
      >
        <IconButton sx={{ color: "white" }} aria-label="Facebook">
          <a
            href="https://www.facebook.com/ideaologytech"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              height: "100%",
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <FacebookIcon />
          </a>
        </IconButton>
        <IconButton sx={{ color: "white" }} aria-label="Twitter">
          <a
            href="https://x.com/ideaologyio"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              height: "100%",
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <TwitterIcon />
          </a>
        </IconButton>
        <IconButton sx={{ color: "white" }} aria-label="LinkedIn">
          <a
            href="https://www.linkedin.com/company/ideaology-io/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              height: "100%",
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <LinkedInIcon />
          </a>
        </IconButton>
      </Box>
    </Box>
  );
};

export default ShareBanner;
