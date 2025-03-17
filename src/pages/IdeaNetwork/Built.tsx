import React from "react";
import Centeric from "../../assets/svgs/Centric.svg";
import Ecosystem from "../../assets/svgs/eceosystem.svg";
import Scale from "../../assets/svgs/scale.svg";
import Security from "../../assets/svgs/security.svg";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme: any) => ({
  root: {
    maxWidth: "1200px",
    marginLeft: "auto",
    marginRight: "auto",
  },
  rootContainer1: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    [theme.breakpoints.down("md")]: {},
  },
  rootContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    gap: "25px",

    [theme.breakpoints.down("sm")]: {
      marginLeft: "4px",
      marginRight: "4px",
    },
  },
  container: {
    width: "500px",
    height: "400px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    border: "1px solid #282828",
    padding: "10px 20px",
    borderRadius: "10px",
    [theme.breakpoints.down("md")]: {
      width: "450px",
      height: "380px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "370px",
      height: "340px",
    },
  },
  img: {
    width: "50%",
    height: "auto",
  },
  heading: {
    fontSize: "24px",
    fontFamily: "SF Pro Display",
    fontWeight: 500,
    paddingTop: "10px",
    color: "#FFFFFF",
    [theme.breakpoints.down("md")]: {
      fontSize: "20px",
    },
  },
  heading1: {
    fontSize: "48px",
    fontFamily: "SF Pro Display",
    fontWeight: 500,
    paddingTop: "10px",
    color: "#FFFFFF",
    maxWidth: "100%",
    padding: "10px 7%",
    [theme.breakpoints.down("md")]: {
      fontSize: "40px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "36px",
    },
    [theme.breakpoints.down("md")]: {
      padding: "10px 5%",
    },
  },
  para1: {
    fontSize: "18px",
    fontFamily: "SF Pro Display",
    fontWeight: "normal",
    lineHeight: "24px",
    textAlign: "left",
    color: "#AEAEAE",
    padding: "10px 7%",
    maxWidth: "100%",
    [theme.breakpoints.down("md")]: {
      fontSize: "14px",
      padding: "10px 5%",
    },
  },
  para: {
    fontSize: "16px",
    fontFamily: "SF Pro Display",
    fontWeight: 400,
    lineHeight: "24px",
    textAlign: "center",
    color: "#AEAEAE",
    [theme.breakpoints.down("sm")]: {
      fontSize: "12px",
    },
  },
}));
const Built = () => {
  const classes = useStyles();
  const data = [
    {
      svg: Scale,
      heading: " Scalability & Decentralization",
      para: "Process thousands of TPS with minimal latency while ensuring fairness with fixed maximum stake.",
    },
    {
      svg: Centeric,
      heading: "Developer-Centric Tools",
      para: "Custom CLI and multi-language smart contract support for effortless dApp creation.",
    },
    {
      svg: Security,
      heading: "Advanced Security",
      para: "Cutting-edge cryptography and real-time monitoring to safeguard assets.",
    },
    {
      svg: Ecosystem,
      heading: "Diverse & Future-Ready Ecosystem",
      para: "From DeFi and gaming to NFTs, IDEA Wallet, and metaverse integration.",
    },
  ];
  return (
    <div className={classes.root}>
      <div className={classes.rootContainer1}>
        <h1 className={classes.heading1}>Built For You</h1>
        <p className={classes.para1}>
          Experience blockchain innovation like never before with IDEA 3.0
          Network. It is a platform built for performance, security, & limitless
          possibilities. Here are some reasons that tell you why we are unique
          from others:
        </p>
      </div>
      <div className={classes.rootContainer}>
        {data.map((item) => (
          <div key={item.heading} className={classes.container}>
            <img src={item.svg} alt="" className={classes.img} />
            <h2 className={classes.heading}>{item.heading}</h2>
            <p className={classes.para}>{item.para}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Built;
