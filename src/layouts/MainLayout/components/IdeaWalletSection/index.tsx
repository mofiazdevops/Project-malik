import React from "react";
import { makeStyles } from "@material-ui/core";
import { Box, Button, Grid, Typography } from "@mui/material";
import star from "../../../../assets/pngs/Star.png";
import starbg from "../../../../assets/pngs/starbg.png";
import mobileImage from "../../../../assets/pngs/mobile1.png";
import { Link } from "react-router-dom";

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
    fontSize: "16px",
    fontWeight: 500,
    fontFamily: "SF Pro Display",
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

export const IdeaWalletSection = () => {
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
          flexDirection: { xs: "column-reverse", md: "row" },
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
              lineHeight: { xs: "35px", md: "60px" },
              background: "linear-gradient(90deg, #FFFFFF, #3CADFF)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              display: "inline-block",
              textAlign: { xs: "center", md: "left" },
              px: { xs: 2, sm: 0 },
              pb: 1,
            }}
          >
            Seamless Trading on IdeaWallet
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
            Experience effortless trading with IdeaWallet, your permissionless
            gateway to the Idea Network. Harness the power of integrated DeFi
            tools, enjoy lightning-fast cross-chain swaps, and unlock perpetual
            trading opportunities—all in one sleek and secure wallet. Elevate
            your crypto journey and trade with confidence!
          </Typography>

          <Link
            to="/CommingSoon2"
            className={classes.buttoncontainer}
            style={{
              textDecoration: "none",
            }}
          >
            <div className={classes.textcontai}>
              <img
                src={starbg}
                alt="starbg"
                width={70}
                height={70}
                className={classes.dust}
              />
              Comming Soon
              <img src={star} alt="star" className={classes.star} />
            </div>
          </Link>
        </Box>

        {/* Right Content - Image */}
        {/* <Box
          sx={{
            pt: { xs: 5, sm: 7, md: 0 },
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            src={mobileImage}
            alt="Transaction Page"
            style={{
              width: "147px",
              height: "211px",
              animation: "float 3s ease-in-out infinite",
              display: "block",
              maxWidth: "100%",
            }}
          />
        </Box> */}
        <Box
          component="img"
          src={mobileImage}
          alt="Floating Image"
          sx={{
            width: { xs: "167px", sm: "292px", md: "312px" },
            height: { xs: "200px", sm: "330px", md: "410px" },
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
