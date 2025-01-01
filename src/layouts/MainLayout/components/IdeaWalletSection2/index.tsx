import React from "react";
import { makeStyles } from "@material-ui/core";
import { Box, Button, Grid, Typography } from "@mui/material";
import star from "../../../../assets/pngs/Star.png";
import starbg from "../../../../assets/pngs/starbg.png";
import lap from "../../../../assets/pngs/lap.png";

const useStyles = makeStyles((theme) => ({
  buttoncontainer: {
    display: "flex",
    justifyContent: "flex-start", // Default alignment for larger screens

    [theme.breakpoints.down("sm")]: {
      justifyContent: "center", // Keep centered for small screens (mobile)
      flexWrap: "wrap", // Allow wrapping if there are multiple buttons
    },
    [theme.breakpoints.down("xs")]: {
      justifyContent: "center", // Center for extra-small screens
      padding: "0 10px", // Add padding to avoid edge clipping
    },
    "&:hover": {
      cursor: "pointer",
    },
  },
  textcontai: {
    position: "relative",
    width: 150,
    height: 42,
    textAlign: "center",
    alignContent: "center",
    border: "2px solid #8ecaf3",
    borderRadius: "16px",
    // background: "transparent",
    fontFamily: "SF Pro Display",
    fontSize: "16px",
    fontWeight: 500,
    background: "linear-gradient(90deg, #FFFFFF, #3CADFF)",
    backgroundClip: "text",
    color: "transparent",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    transition: "background-color 0.3s ease",
    textTransform: "none",

    "&:hover": {
      background: "linear-gradient(90deg, #3CADFF, #FFFFFF)",
      backgroundClip: "text",
      color: "transparent",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },

    [theme.breakpoints.down("xs")]: {
      width: 280,
      height: 42,
    },
  },
  dust: {
    position: "absolute",
    top: "-35%",
    left: "-37%",
    [theme.breakpoints.down("xs")]: {
      top: "-25%",
      left: "-15%",
    },
  },
  star: {
    animation: "$rotate 8s linear infinite", // Apply rotation animation
    width: 15, // Ensure consistent width
    height: 15, // Ensure consistent height
    position: "absolute",
    top: "0%",
    right: "-13%",
    [theme.breakpoints.down("xs")]: {
      top: "-4%",
      right: "-7%",
    },
  },

  "@keyframes rotate": {
    from: {
      transform: "rotate(0deg)",
    },
    to: {
      transform: "rotate(360deg)",
    },
  },
}));

export const IdeaWalletSection2 = () => {
  const classes = useStyles();
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
          color: "white",
          maxWidth: { sm: "768px", md: "1100px" },
          mx: { xs: 4, lg: "auto" },
          display: "flex",
          flexDirection: { xs: "column-reverse", md: "row-reverse" },
          justifyContent: "space-between",
          alignItems: "center",
          pt: { xs: 5, sm: 0 },
          //   mt: 7,
        }}
      >
        {/* Left Content */}
        <Box
          sx={{
            width: { xs: "335px", sm: "530px" },
            fontFamily: "SF Pro Display",
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "center", md: "flex-start" },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "24px", sm: "25px", md: "35px", lg: "44px" },
              lineHeight: "60px",
              background: "linear-gradient(90deg, #FFFFFF, #3CADFF)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              display: "inline-block",
              textAlign: { xs: "center", md: "left" },
              px: { xs: 2, sm: 0 },
              pb: 1,
            }}
          >
            Discover the Network
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontWeight: "medium",
              fontSize: { xs: "12px", sm: "14px", md: "18px" },
              lineHeight: "35px",
              color: "#D3D3D6",
              display: "inline-block",
              px: { xs: 2, sm: 0 },
            }}
          >
            Effortlessly navigate the Idea Network with our cutting-edge
            blockchain explorer. Experience lightning-fast transaction tracking,
            real-time insights, and powerful analytics—all designed for the
            developers and enthusiasts alike. Dive deep into all transaction
            histories and unlock the full potential of the network with our
            unparalleled clarity and precision!
          </Typography>

          <Button className={classes.buttoncontainer}>
            <a
              href="https://www.ideascan.io/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <div className={classes.textcontai}>
                <img
                  src={starbg}
                  alt="starbg"
                  width={70}
                  height={70}
                  className={classes.dust}
                />
                Explore
                <img src={star} alt="star" className={classes.star} />
              </div>
            </a>
          </Button>
        </Box>

        <Box
          component="img"
          src={lap}
          alt="Floating Image"
          sx={{
            width: { xs: "250px", sm: "352px", md: "392px" },
            height: { xs: "180px", sm: "300px", md: "310px" },
            animation: "float 3s ease-in-out infinite", // Animation property
            "@keyframes float": {
              "0%": {
                transform: "translateY(0)",
              },
              "50%": {
                transform: "translateY(-10px)",
              },
              "100%": {
                transform: "translateY(0)",
              },
            },
          }}
        />
      </Box>
    </div>
  );
};
