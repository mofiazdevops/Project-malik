import React from "react";
import { makeStyles } from "@material-ui/core";

interface FeatureCardProps {
  title: string;
  description: string;
}

const useStyles = makeStyles((theme: any) => ({
  card: {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    padding: "16px",
    borderRadius: "12px",
    maxWidth: "300px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",

    [theme.breakpoints.down("sm")]: {
      marginBottom: "12px",
      padding: "10px 16px",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "12px",
      padding: "8px 10px",
    },
  },
  title: {
    fontSize: "1.2rem",
    fontWeight: "bold",
    margin: 0,
    color: "#9CD5FF", // Default title color
  },
  description: {
    fontSize: "0.9rem",
    color: "#fff",
    marginTop: "4px",

    [theme.breakpoints.down("sm")]: {
      fontSize: "0.8rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.7rem",
    },
  },
}));

const CardDetails: React.FC<FeatureCardProps> = ({ title, description }) => {
  const classes = useStyles();

  return (
    <div className={classes.card}>
      <h3 className={classes.title}>{title}</h3>
      <p className={classes.description}>{description}</p>
    </div>
  );
};

export default CardDetails;
