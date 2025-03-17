import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core";
import Built from "./Built";
import FeatureCard from "./FeatureCard";
import laptop from "../../assets/svgs/laptop.svg";
import floor from "../../assets/svgs/floor.svg";
import build from "../../assets/svgs/build.svg";
import { Community } from "layouts";
import Hero from "./Hero";
import CardDetails from "./CardDetails";
import homebg from "../../assets/pngs/homebg.png";
import CardCarousel from "./CardCarousel";
import { Box, Container, Typography } from "@mui/material";
import { useBlog } from "contexts/blogContext";

const useStyles = makeStyles((theme: any) => ({
  root: {
    // width: "1440px",
    height: "3740px",
  },
  // container: {
  //   display: "flex",
  //   flexDirection: "column", // Stack elements naturally
  //   justifyContent: "center", // Center elements vertically
  //   alignItems: "center", // Center elements horizontally
  //   width: "100vw",
  //   height: "100vh",
  //   overflow: "hidden",
  //   backgroundImage: `url(${homebg})`,
  //   backgroundSize: "cover",
  //   backgroundPosition: "center",
  //   backgroundRepeat: "no-repeat",
  // },
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100vw",
    height: "100vh",
    overflow: "hidden",
    backgroundImage: `url(${homebg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",

    [theme.breakpoints.down("md")]: {
      height: "120vh", // Increase height on medium screens
    },

    [theme.breakpoints.down("sm")]: {
      height: "100vh", // Further increase height on smaller devices
      backgroundSize: "contain", // Ensure image is not stretched
    },

    [theme.breakpoints.down("xs")]: {
      height: "100vh", // Maximum height for very small screens
      backgroundSize: "cover", // Keeps image undisturbed
      backgroundPosition: "center center",
    },
  },

  homecont: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
    maxWidth: "1166px",
    margin: "25px auto",

    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "center",
      margin: "10px auto",
      paddingBottom: "110px",
    },
  },
  headingContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "2rem",
    position: "relative",
  },
  headingText: {
    width: "75%",
    maxWidth: "1100px",
    margin: "auto",
    fontSize: "48px",
    fontWeight: "bold",
    fontFamily: "SF Pro Display",
    background: "linear-gradient(90deg, #fff, #007bff)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    letterSpacing: "2px",

    [theme.breakpoints.down("sm")]: {
      fontSize: "38px",
      textAlign: "center",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "28px",
      textAlign: "center",
    },
  },
  backgroundGlow: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "200px",
    height: "50px",
    background:
      "radial-gradient(circle, rgba(0, 123, 255, 0.4) 10%, rgba(0, 0, 0, 0) 80%)",
    borderRadius: "50%",
    zIndex: 1,
  },
}));
const IdeaNetwork = () => {
  const classes = useStyles();

  const { popularPosts, globalLoader } = useBlog();

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div>
          <Hero />
        </div>
        <div className={classes.homecont}>
          <CardDetails
            title="Build"
            description="Create powerful dApps on secure, scalable & developer-friendly blockchain."
          />
          <CardDetails
            title="Stake"
            description="Stake confidently with fair rewards and decentralized governance."
          />
          <CardDetails
            title="Use Idea Coin"
            description="Create powerful dApps on secure, scalable &  developer-friendly blockchain."
          />
        </div>
      </div>
      <div>
        <FeatureCard
          title="Fixed Maximum Stake"
          description="Decentralization offers true independence with distributed control and community-driven governance. It ensures high-speed, low-latency performance for a seamless user experience while maintaining stability under heavy loads."
          buttonText="Learn About IDEA 3.0"
          imageSrc={build}
          address="https://www.ideascan.io/"
        />
        <FeatureCard
          title="Command Line Interface Customization"
          description="Interact intuitively with our network using simple, tailored commands for smarter workflows and consistent IDEA-first branding. Designed with both developers and users in mind, it ensures smooth, stable interactions across platforms with an optimized CLI for faster, smarter development."
          buttonText="Open Docs"
          imageSrc={laptop}
          reverse={true}
          address="https://ideaology-1.gitbook.io/ideaology-1/"
        />
        <FeatureCard
          title="Enhanced Security  Architecture"
          description="Built on advanced cryptographic protocols, IDEA Network ensures top-tier security. Its decentralized structure minimizes risks, protecting user assets and data while maintaining transparency. Smart contract audits and continuous updates safeguard against vulnerabilities."
          buttonText="Apply For Grant"
          imageSrc={floor}
          address="/GrantProgram"
        />
      </div>
      <Box>
        <Box className={classes.headingContainer}>
          <h2 className={classes.headingText}>Hot Topics</h2>
        </Box>
        <Container
          maxWidth="lg"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            // backgroundColor: "#000",
          }}
        >
          <CardCarousel data={popularPosts} loading={globalLoader} />
        </Container>
      </Box>
      <div>
        <Built />
      </div>
      <div style={{ marginTop: "80px" }}>
        <Community />
      </div>
    </div>
  );
};

export default IdeaNetwork;
