import React from "react";
import star from "../../assets/pngs/Astars.png";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#040C13",
    minHeight: "408px",
    padding: "20px",
    margin: "0px",
    borderRadius: "20px",
    [theme.breakpoints.down("md")]: {
      margin: "0px 20px",
    },
    [theme.breakpoints.down("sm")]: {
      margin: "0px 30px",
    },
    [theme.breakpoints.down("xs")]: {
      margin: "0px 20px",
    },
  },
  container: {},
  container1: {
    display: "flex",
    alignItems: "center",
    margin: "10px 0px",
  },
  container2: {
    display: "flex",
    flexDirection: "column",
  },
  heading: {
    fontSize: "28px",
    fontWeight: 700,
    fontFamily: "SF Pro Display",
    background: "linear-gradient(90deg, #FFFFFF, #47A3F7)",
    backgroundClip: "text",
    color: "transparent",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    lineHeight: "32px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "24px",
      lineHeight: "24px",
    },
  },
  para: {
    fontSize: "17px",
    fontWeight: 400,
    fontFamily: "SF Pro Display",
    lineHeight: "30px",
    [theme.breakpoints.down("md")]: {
      fontSize: "16px",
      lineHeight: "28px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "16px",
      lineHeight: "24px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "13px",
      lineHeight: "24px",
    },
  },
}));

const data = [
  {
    img: star,
    para: "Promote IDEA on social media platforms.",
  },
  {
    img: star,
    para: "Host webinars, meetups, or online events.",
  },
  {
    img: star,
    para: "Create engaging content such as blogs, videos, or tutorials.",
  },
  {
    img: star,
    para: "Suggest partnerships or outreach strategies.",
  },
  {
    img: star,
    para: "Provide feedback on IDEA's platforms and features.",
  },
];

export const AmbassadorDo = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div>
        <div>
          <div>
            <h2
              className={classes.heading}
              style={{
                paddingBottom: "10px",
              }}
            >
              What Can Ambassadors Do?
            </h2>
            <h4
              style={{
                fontFamily: "SF Pro Display",
                fontWeight: 400,
                fontSize: "20px",
              }}
            >
              We value creativity and diverse contributions! As an ambassador,
              you can:
            </h4>
          </div>
          <div>
            {data.map((item) => (
              <div key={item.para} className={classes.container1}>
                <img
                  src={item.img}
                  alt="stars"
                  style={{
                    width: "15px",
                    height: "15px",
                  }}
                />
                <span
                  className={classes.para}
                  style={{
                    paddingLeft: "10px",
                  }}
                >
                  {item.para}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className={classes.container2}>
          <h2 className={classes.heading}>Got Suggestions?</h2>
          <p className={classes.para}>
            We want to hear your ideas! Below, you will find a form where you
            can share your suggestions for activities, partnerships, or
            initiatives that will help grow IDEA and bring value to the
            community.
          </p>
        </div>
      </div>
    </div>
  );
};
