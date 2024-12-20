import { Container, makeStyles } from "@material-ui/core";
import clsx from "clsx";
import React from "react";
import crossRightPNG from "assets/pngs/landing/cross-right.png";

const useStyles = makeStyles(() => ({
  root: {
    height: "320px",
    background: "#081015",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    flexDirection: "column",

    position: "relative",
  },
  container: {
    zIndex: 10,
  },
  linesLeft: {
    backgroundImage: "url(/imgs/landing/lines-1.svg)",

    position: "absolute",
    top: 0,
    left: 0,

    width: "min(663px, 100vw)",
    height: "320px",
  },
  linesRight: {
    backgroundImage: "url(/imgs/landing/lines-2.svg)",

    position: "absolute",
    top: 0,
    right: 0,

    width: "796px",
    height: "320px",
  },
  crossLeft: {
    backgroundImage: "url(/imgs/landing/cross-left.svg)",

    position: "absolute",
    bottom: 0,
    left: 0,

    width: "133px",
    height: "76px",
  },
  crossRight: {
    backgroundImage: `url(${crossRightPNG})`,

    position: "absolute",
    bottom: 0,
    right: 0,

    width: "133px",
    height: "50px",
  },
  title: {
    fontFamily: "Source Sans Pro",
    fontWeight: 700,
    fontSize: "48px",
    lineHeight: "56px",
    color: "white",
  },
  subTitle: {
    fontFamily: "Rubik",
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "24px",
    color: "white",
  },
  gap: {
    height: "8px",
  },
}));

interface IProps {
  className?: string;
  title?: string;
  subTitle?: string;
}

export const Banner = (props: IProps) => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, props.className)}>
      <div className={classes.linesLeft}></div>
      <div className={classes.linesRight}></div>
      <div className={classes.crossLeft}></div>
      <div className={classes.crossRight}></div>
      <Container className={classes.container} maxWidth="lg">
        <div className={classes.title}>{props.title}</div>
        <div className={classes.gap}></div>
        <div className={classes.subTitle}>{props.subTitle}</div>
      </Container>
    </div>
  );
};
