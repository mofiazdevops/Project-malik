import React from "react";
import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme: any) => ({
  card: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginRight: "auto", // Centers the card
    marginLeft: "auto", // Centers the card
    marginBottom: "60px",
    padding: theme.spacing(3),
    // backgroundColor: "#111",
    color: "#fff",
    borderRadius: theme.shape.borderRadius,
    // boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
    maxWidth: "90%", // Makes it responsive on all screen sizes
    width: "1079px", // Ensures it does not exceed maxWidth

    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      textAlign: "center",
      marginBottom: "10px",
    },
  },
  reverse: {
    flexDirection: "row-reverse",
    marginBottom: "60px",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      textAlign: "center",
      marginBottom: "10px",
    },
  },
  image: {
    width: 300,
    height: 300,
    marginRight: theme.spacing(3),
    [theme.breakpoints.down("sm")]: {
      marginRight: 0,
      marginBottom: theme.spacing(2),
    },
  },
  rightSide: {
    width: "50%", // Default width for larger screens
    maxWidth: "600px", // Ensures it doesn’t grow too much on large screens
    [theme.breakpoints.down("md")]: {
      width: "70%", // Slightly larger on medium devices
      maxWidth: "500px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "90%", // Wider on small devices for better readability
      maxWidth: "none", // Removes max limit for better flexibility
    },
  },
  customButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: theme.spacing(1),
    padding: theme.spacing(1, 2),
    maxWidth: "max-content",
    fontSize: "14px",
    fontWeight: "normal",
    fontFamily: "SF Pro Display",
    textTransform: "none",
    borderRadius: "50px",
    border: "2px solid #A5D9FF",
    background: "linear-gradient(90deg, #FFFFFF, #3CADFF)",
    backgroundClip: "text",
    color: "transparent",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    transition: "background-color 0.3s ease",
    "&:hover": {
      background: "linear-gradient(90deg, #3CADFF, #FFFFFF)",
      backgroundClip: "text",
      color: "transparent",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },
    [theme.breakpoints.down("sm")]: {
      margin: "8px auto",
      fontSize: "12px",
    },
  },
  icon: {
    fontSize: "1.5rem",
    color: "#A5D9FF",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.5 rem",
    },
  },
  highlight: {
    fontSize: "36px",
    background: "linear-gradient(90deg, #FFFFFF, #3CADFF)",
    backgroundClip: "text",
    color: "transparent",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    [theme.breakpoints.down("sm")]: {
      fontSize: "20px",
    },
  },
  keyFeature: {
    color: "#ffffff", // Same as sx={{ color: "#4A90E2" }}
    fontWeight: "bold",
    width: "100px",
    height: "35px",
    background: "linear-gradient(35deg, #002342 0%, #0058A8 100%)",
    borderRadius: "18px",
    textAlign: "center",
    fontSize: "12px",
    lineHeight: "35px",
    [theme.breakpoints.down("sm")]: {
      margin: "8px auto",
    },
  },
  description: {
    fontSize: "18px",
    fontWeight: "normal",
    fontFamily: "SF Pro Display",
    lineHeight: "28px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "14px",
      lineHeight: "24px",
    },
  },
}));

type FeatureCardProps = {
  title: string;
  description: string;
  buttonText: string;
  imageSrc: string;
  address: string;
  reverse?: boolean;
};

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  buttonText,
  imageSrc,
  address,
  reverse = false,
}) => {
  const classes = useStyles();
  const isExternal = /^https?:\/\//.test(address);

  return (
    <div className={`${classes.card} ${reverse ? classes.reverse : ""}`}>
      {/* Left Side: Image */}
      <Box
        component="img"
        src={imageSrc}
        alt="Feature"
        className={classes.image}
      />

      {/* Right Side: Text Content */}
      <div className={classes.rightSide}>
        <p className={classes.keyFeature}>Key Features</p>
        <h2 className={classes.highlight}>{title}</h2>
        <p className={classes.description}>{description}</p>
        {/* Conditional rendering for internal/external links */}
        {isExternal ? (
          <a
            href={address}
            className={classes.customButton}
            target="_blank"
            rel="noopener noreferrer"
          >
            {buttonText}
            <OpenInNewIcon className={classes.icon} />
          </a>
        ) : (
          <Link to={address} className={classes.customButton}>
            {buttonText}
            <OpenInNewIcon className={classes.icon} />
          </Link>
        )}
      </div>
    </div>
  );
};

export default FeatureCard;
