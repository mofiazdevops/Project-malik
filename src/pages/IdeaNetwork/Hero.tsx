import React from "react";
import { makeStyles } from "@material-ui/core";
import { Button, Typography } from "@material-ui/core";
import star from "../../assets/pngs/Star.png";
import starbg from "../../assets/pngs/starbg.png";

const useStyles = makeStyles((theme: any) => ({
  heroSection: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    color: "#fff",
    padding: "20px",
    marginTop: "15%",

    [theme.breakpoints.down("sm")]: {
      marginTop: "40%",
    },
  },
  title: {
    fontSize: "3rem",
    fontWeight: "bold",
    maxWidth: "700px",
    lineHeight: "1.2",
    background: "linear-gradient(90deg, #FFFFFF, #3CADFF)",
    backgroundClip: "text",
    color: "transparent",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    "& span": {
      color: "#4da6ff", // Light blue color
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "2.5rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5rem",
    },
  },
  subtitle: {
    fontSize: "1.2rem",
    maxWidth: "600px",
    marginTop: "10px",
    color: "#ccc",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.7rem",
    },
  },
  //   button: {
  //     marginTop: "20px",
  //     padding: "12px 24px",
  //     fontSize: "1rem",
  //     fontWeight: "bold",
  //     border: "2px solid white",
  //     background: "transparent",
  //     color: "white",
  //     borderRadius: "25px",
  //     cursor: "pointer",
  //     transition: "0.3s",
  //     "&:hover": {
  //       background: "#4da6ff",
  //       borderColor: "#4da6ff",
  //     },
  //     [theme.breakpoints.down("sm")]: {
  //       fontSize: "0.9rem",
  //       padding: "10px 20px",
  //     },
  //   },
  buttoncontainer: {
    display: "flex",
    justifyContent: "flex-start", // Default alignment for larger screens
    marginTop: "6px",

    [theme.breakpoints.down("sm")]: {
      justifyContent: "center", // Keep centered for small screens (mobile)
      flexWrap: "wrap", // Allow wrapping if there are multiple buttons
      marginTop: "4px",
    },
    [theme.breakpoints.down("xs")]: {
      justifyContent: "center", // Center for extra-small screens
      padding: "0 10px", // Add padding to avoid edge clipping
      marginTop: "6px",
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

const Hero = () => {
  const classes = useStyles();

  return (
    <div className={classes.heroSection}>
      <Typography variant="h1" className={classes.title}>
        A Growing Ecosystem of <br /> <span>dApps on IDEA Network</span>
      </Typography>
      <Typography variant="body1" className={classes.subtitle}>
        Qualify innovation with decentralized applications designed to help you
        succeed.
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
    </div>
  );
};

export default Hero;
