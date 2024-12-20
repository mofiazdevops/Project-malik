import { makeStyles } from "@material-ui/core";
import clsx from "clsx";
import React from "react";

import "./style.css";

const useStyles = makeStyles(() => ({
  root: {
    textAlign: "center",
    width: "108px",
    height: "64px",

    fontFamily: "Source Sans Pro",
    fontWeight: 700,
  },
  value: {
    fontSize: "24px",
    lineHeight: "32px",
  },
  symbol: {
    fontSize: "11px",
    lineHeight: "16px",
  },
  caption: {
    fontSize: "11px",
    lineHeight: "16px",
    textTransform: "uppercase",
    color: "#7F909F",
  },
}));

interface IProps {
  className?: string;
  caption: string;
  symbol?: string;
  value: string;
  color: string;
}

export const Ticker = (props: IProps) => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, props.className)}>
      <div className={`ticker ${props.color}`}>
        <span className={classes.value}>{props.value}</span>&nbsp;
        <span className={classes.symbol}>{props.symbol}</span>
      </div>
      <div className={classes.caption}>{props.caption}</div>
    </div>
  );
};
