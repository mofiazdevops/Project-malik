import { makeStyles } from "@material-ui/core";
import clsx from "clsx";
import React from "react";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CancelIcon from "@material-ui/icons/Cancel";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";

const useStyles = makeStyles((theme: any) => ({
  root: {
    position: "relative",

    fontSize: "16px",

    display: "flex",
    alignItems: "center",
  },
  normal: {
    color: "#1C2535",
  },
  rejected: {
    color: "#D81159",
  },
  approved: {
    color: "#59D5AF",
  },
}));

interface IProps {
  className?: string;
  text?: string;
}

export const ParticipantStatusBadge = (props: IProps) => {
  const classes = useStyles();

  const loweredText = props.text?.toLowerCase();

  const bodyClass =
    loweredText === "rejected" ? classes.rejected : classes.normal;

  const icon =
    loweredText === "rejected" ? (
      <CancelIcon />
    ) : loweredText === "approved" ? (
      <CheckCircleIcon className={classes.approved} />
    ) : (
      <DonutLargeIcon />
    );

  return (
    <span className={clsx(classes.root, props.className, bodyClass)}>
      {icon} {props.text}
    </span>
  );
};
