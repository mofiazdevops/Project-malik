import { makeStyles } from "@material-ui/core";
import clsx from "clsx";
import React from "react";

const useStyles = makeStyles((theme: any) => ({
  root: {
    position: "relative",

    borderRadius: "26px",
    fontSize: "16px",
    padding: "2px 8px 3px 14px",

    "&::before": {
      content: "''",
      width: "4px",
      height: "4px",
      borderRadius: "2px",

      position: "absolute",
      left: "5px",
      top: "10px",
    },
  },
  active: {
    color: "#095995",
    background: "#D5EDFF",

    "&::before": {
      background: "#59B5FF",
    },
  },
  filled: {
    color: "#8E0B3A",
    background: "#FFDEE4",

    "&::before": {
      background: "#FD4975",
    },
  },
}));

interface IProps {
  className?: string;
  text?: string;
  value?: number;
}

export const StatusBadge = (props: IProps) => {
  const classes = useStyles();

  return (
    <span
      className={clsx(
        classes.root,
        props.className,
        props.value === 100 ? classes.filled : classes.active
      )}
    >
      {props.text}
    </span>
  );
};
