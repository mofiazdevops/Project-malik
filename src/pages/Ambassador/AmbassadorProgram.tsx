import React from "react";
import { Button, Grid, Typography, useMediaQuery } from "@mui/material";
import { makeStyles } from "@material-ui/core";
import voice from "../../assets/pngs/Voice.png";
import reward from "../../assets/pngs/reward.png";
import shape from "../../assets/pngs/shape.png";
import special from "../../assets/pngs/special.png";
import recognize from "../../assets/pngs/recognize.png";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    marginTop: "20px",
  },
  contmain: {
    // display: "flex",
    // flexDirection: "column",
    // margin: "20px 0px",
  },
  contdire: {
    display: "flex",
    justifyContent: "space-between",
    maxWidth: "1200px",
    margin: "30px auto",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  contdire1: {
    display: "flex",
    justifyContent: "space-between",
    maxWidth: "750px",
    marginLeft: "auto",
    marginRight: "auto",
    margin: "30px 0px",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      margin: "10px 0px",
    },
  },
  container: {
    display: "flex",
    flexDirection: "column",
    maxwidth: "343px",
    minheight: "121px",
    background: "rgba(4, 12, 19, 0.5)",
    padding: "12px 20px",
    borderRadius: "12px", // Rounded corners
    margin: "2%",

    [theme.breakpoints.down("lg")]: {
      width: "80%", // Fixed width for medium screens and up (desktops)
    },

    [theme.breakpoints.down("md")]: {
      width: "50%", // 80% of the screen width for small screens and up
    },

    [theme.breakpoints.down("sm")]: {
      width: "90%", // 80% of the screen width for small screens and up
    },
  },
  headerm: {
    textAlign: "center",
    fontSize: "32px", // Default font size
    fontWeight: 700,
    fontFamily: "SF Pro Display",
    background: "linear-gradient(90deg, #FFFFFF, #3CADFF)",
    backgroundClip: "text",
    color: "transparent",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    [theme.breakpoints.down("md")]: {
      fontSize: "18px", // Only for smaller screens
    },
  },
  header: {
    fontSize: "20px",
    fontWeight: 500,
    fontFamily: "SF Pro Display",
    background: "linear-gradient(90deg, #FFFFFF, #3CADFF)",
    backgroundClip: "text",
    color: "transparent",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    paddingLeft: "12px",
  },
  heading: {
    display: "flex",
    alignItems: "center",
    // width: "230px",
    // justifyContent: "space-between",
    margin: "6px 0px",
  },
  para: {
    fontSize: "16px",
    fontWeight: 400,
    fontFamily: "SF Pro Display",
  },
  gridItem: {},
  icon: {},
  title: {},
  description: {},
  button: {},
}));

export const AmbassadorProgram = () => {
  const classes = useStyles();
  //   const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return (
    <div className={classes.root}>
      <h2 className={classes.headerm}>Why Join the IDEA Ambassador Program?</h2>
      <div className={classes.contmain}>
        <div className={classes.contdire}>
          <div
            className={classes.container}
            style={{
              boxShadow: `
       0px 40px 50px rgba(79, 181, 255, 0.1), /* Bottom shadow */
    0px -10px 80px rgba(79, 181, 255, 0.1), /* Top shadow */
    -20px 0px 40px rgba(79, 181, 255, 0.1) /* Left shadow */
    `,
            }}
          >
            <div className={classes.heading}>
              <img
                src={voice}
                alt="Voice"
                style={{ width: "25px", height: "25px" }}
              />
              <h2 className={classes.header}>Be a Voice of Change</h2>
            </div>
            <p className={classes.para}>
              Represent IDEA and share our mission with your community.
            </p>
          </div>
          <div
            className={classes.container}
            style={{
              boxShadow: `
      0px 40px 50px rgba(79, 181, 255, 0.1), /* Bottom shadow */
      0px -10px 80px rgba(79, 181, 255, 0.1), /* Top shadow */
      -10px 0px 20px rgba(79, 181, 255, 0.1) /* Left shadow */
    `,
            }}
          >
            <div className={classes.heading}>
              <img
                src={reward}
                alt="reward"
                style={{ width: "25px", height: "25px" }}
              />
              <h2 className={classes.header}>Exclusive Rewards</h2>
            </div>
            <p className={classes.para}>
              Represent IDEA and share our mission with your community.
            </p>
          </div>
          <div
            className={classes.container}
            style={{
              boxShadow: `
      0px 10px 20px rgba(79, 181, 255, 0.1), /* Bottom shadow */
    //   0px 0px 20px rgba(79, 181, 255, 0.1), /* Top shadow */
      -10px 0px 20px rgba(79, 181, 255, 0.1) /* Left shadow */
    `,
            }}
          >
            <div className={classes.heading}>
              <img
                src={shape}
                alt="shape"
                style={{ width: "25px", height: "25px" }}
              />
              <h2 className={classes.header}>Shape the Ecosystem</h2>
            </div>
            <p className={classes.para}>
              Represent IDEA and share our mission with your community.
            </p>
          </div>
        </div>
        <div className={classes.contdire1}>
          <div
            className={classes.container}
            style={{
              boxShadow: `
       0px 60px 80px rgba(79, 181, 255, 0.1), /* Bottom shadow */
    0px -60px 80px rgba(79, 181, 255, 0.1), /* Top shadow */
    -60px 0px 80px rgba(79, 181, 255, 0.1), /* Left shadow */
    60px 0px 80px rgba(79, 181, 255, 0.1) /* Right shadow */
    `,
            }}
          >
            <div className={classes.heading}>
              <img
                src={special}
                alt="special"
                style={{ width: "25px", height: "25px" }}
              />
              <h2 className={classes.header}>Special Access</h2>
            </div>
            <p className={classes.para}>
              Represent IDEA and share our mission with your community.
            </p>
          </div>
          <div
            className={classes.container}
            style={{
              boxShadow: `
    //   0px 10px 20px rgba(79, 181, 255, 0.1), /* Bottom shadow */
      0px -10px 20px rgba(79, 181, 255, 0.1), /* Top shadow */
      -10px 0px 20px rgba(79, 181, 255, 0.1) /* Left shadow */
    `,
            }}
          >
            <div className={classes.heading}>
              <img
                src={recognize}
                alt="recognize"
                style={{ width: "25px", height: "25px" }}
              />
              <h2 className={classes.header}>Recognition</h2>
            </div>
            <p className={classes.para}>
              Represent IDEA and share our mission with your community.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
