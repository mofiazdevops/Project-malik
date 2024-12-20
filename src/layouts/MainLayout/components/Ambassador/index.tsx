import React from "react";
import { Button, makeStyles } from "@material-ui/core";
import { Box, Container, Grid, Typography } from "@mui/material";
import star from "../../../../assets/pngs/Star.png";
import starbg from "../../../../assets/pngs/starbg.png";

const useStyles = makeStyles((theme) => ({
  rootContainer: {
    paddingRight: "2.5rem",
    paddingLeft: "2.5rem",
    paddingBottom: "4rem",

    [theme.breakpoints.down("sm")]: {
      paddingRight: "1rem",
      paddingLeft: "1rem",
    },
  },
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: "1100px",
    width: "100%",
    mx: "auto",
    padding: theme.spacing(4),
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: "12px",
    boxShadow: "0px 6px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  },
  title: {
    fontSize: "44px",
    fontFamily: "SF Pro Display",
    fontWeight: 500,
    color: "#FFFFFF",
    marginBottom: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
      fontSize: "24px",
    },
  },
  subtitle: {
    fontSize: "20px",
    color: "#D3D3D6",
    fontFamily: "SF Pro Display",
    fontWeight: "normal",
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down("md")]: {
      fontSize: "18px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "14px",
    },
  },
  socialIcons: {
    display: "flex",
    justifyContent: "space-between",
    maxWidth: 600,
    alignItems: "center",
    marginRight: "auto",
    marginLeft: "auto",
    gap: theme.spacing(2),
    marginTop: 2,
  },
  icon: {
    color: "#fff",
    fontSize: "30px",
    "&:hover": {
      color: "#1e88e5",
    },
  },
  buttoncontainerfull: {
    display: "flex",
    aliginItems: "center",
    justifyContent: "center",
  },
  buttoncontainer: {
    display: "flex",
    justifyContent: "flex-start", // Default alignment for larger screens
    textDecoration: "none",
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

export const Ambassador: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.rootContainer}>
      <Container className={classes.root}>
        <div>
          <h2 className={classes.title}>Become an Ambassador</h2>
          <p className={classes.subtitle}>
            The Ideaology (IDEA) Ambassador Program is your opportunity to be
            part of <br /> our growing community and help shape the future of
            our ecosystem.
          </p>
        </div>

        <div className={classes.buttoncontainerfull}>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSda5q18vhNvPX3dbcUXnXXaDTwbrjJjDCtJxcuGgNSSpAfI3g/viewform"
            target="_blank"
            rel="noreferrer"
            className={classes.buttoncontainer}
          >
            <div className={classes.textcontai}>
              <img
                src={starbg}
                alt="starbg"
                width={70}
                height={70}
                className={classes.dust}
              />
              Join Now
              <img src={star} alt="star" className={classes.star} />
            </div>
          </a>
        </div>
      </Container>
    </div>
  );
};
