import {
  LinearProgress,
  createStyles,
  makeStyles,
  withStyles,
} from "@material-ui/core";
import clsx from "clsx";
import React from "react";

export * from "./LabelLinearProgress";

const useStyles = makeStyles(() => ({
  root: {
    textAlign: "left",
  },
  title: {
    fontSize: "12px",
    lineHeight: "20px",
  },
  info: {
    display: "flex",
    justifyContent: "space-between",
  },
  percent: {
    fontSize: "12px",
    fontWeight: 600,
    lineHeight: "20px",
    color: "#1C2535",
  },
  percentWeak: {
    color: "#7F909F",
  },
  count: {
    fontSize: "12px",
    fontWeight: 400,
    lineHeight: "20px",
    color: "#7F909F",
  },
}));

export const BorderLinearProgress = withStyles(() =>
  createStyles({
    root: {
      height: 4,
      borderRadius: 2,
    },
    barColorPrimary: {
      backgroundColor: "#0C71BC",
    },
    colorPrimary: {
      backgroundColor: "#D5EDFF",
    },
  })
)(LinearProgress);

interface IProps {
  className?: string;
  value?: number;
  current?: string;
  total?: string;
}

export const Progress = (props: IProps) => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, props.className)}>
      <div className={classes.title}>Progress</div>
      <BorderLinearProgress value={props.value} variant="determinate" />
      <div className={classes.info}>
        <div className={classes.percent}>
          {props.value}% <span className={classes.percentWeak}>(Min. 50%)</span>
        </div>
        <div className={classes.count}>
          {props.current}/{props.total}
        </div>
      </div>
    </div>
  );
};
