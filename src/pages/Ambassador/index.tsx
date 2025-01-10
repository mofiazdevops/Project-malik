import React from "react";
import { makeStyles } from "@material-ui/core";
import { AmbassadorProgram } from "./AmbassadorProgram";
import { AmbassadorDo } from "./AmbassadorDo";
import { AmbassadorForm } from "./AmbassadorForm";

const useStyles = makeStyles((theme) => ({
  route: {
    backgroundColor: "#081015",
  },
  container: {
    paddingTop: "7%",
    display: "flex",
    flexDirection: "column",
    color: "white",
    maxWidth: "1100px",
    minHeight: "1875px",
    marginLeft: "auto",
    marginRight: "auto",

    [theme.breakpoints.down("sm")]: {
      paddingTop: "15%",
    },
    [theme.breakpoints.down("xs")]: {
      paddingTop: "25%",
    },
  },
  one: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    margin: "0px 10px",
  },
  heading: {
    fontSize: "32px", // Default font size
    fontWeight: 700,
    fontFamily: "SF Pro Display",
    background: "linear-gradient(90deg, #FFFFFF, #3CADFF)",
    backgroundClip: "text",
    color: "transparent",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    lineHeight: "60px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "18px",
      lineHeight: "30px",
    },
  },
  para: {
    fontSize: "20px",
    fontWeight: 400,
    fontFamily: "SF Pro Display",
    lineHeight: "35px",
    [theme.breakpoints.down("md")]: {
      fontSize: "20px",
      lineHeight: "28px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "16px",
      lineHeight: "24px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "13px",
      lineHeight: "20px",
    },
  },
  two: {
    display: "flex",
    flexDirection: "column",
  },
  three: {
    display: "flex",
    flexDirection: "column",
  },
  four: {
    display: "flex",
    flexDirection: "column",
  },
}));

const Ambassador = () => {
  const classes = useStyles();
  return (
    <div className={classes.route}>
      <div className={classes.container}>
        <div className={classes.one}>
          <h2 className={classes.heading}>Become an Ambassador</h2>
          <p className={classes.para}>
            The Ideaology (IDEA) Ambassador Program is your opportunity to be
            part of our growing community and help shape the future of our
            ecosystem. As an ambassador, you will work closely with the team,
            gain insider knowledge, and play a key role in spreading the vision
            of decentralization and innovation.
          </p>
        </div>
        <div className={classes.two}>
          <AmbassadorProgram />
        </div>
        <div className={classes.three}>
          <AmbassadorDo />
        </div>
        <div className={classes.four}>
          <AmbassadorForm />
        </div>
      </div>
    </div>
  );
};

export default Ambassador;
