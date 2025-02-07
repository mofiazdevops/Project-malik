import React from "react";
import { makeStyles } from "@material-ui/core";
import Built from "./Built";

const useStyles = makeStyles({
  root: {
    // width: "1440px",
    height: "5086px",
  },
  container: {
    position: "relative",
    width: "100vw",
    height: "100vh",
    overflow: "hidden",
  },
  video: {
    position: "absolute",
    top: "63%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
});
const IdeaNetwork = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <video autoPlay loop muted playsInline className={classes.video}>
          <source src="/videos/main.mp4" type="video/mp4" />
          this is video
        </video>
      </div>
      <div>
        <Built />
      </div>
    </div>
  );
};

export default IdeaNetwork;
