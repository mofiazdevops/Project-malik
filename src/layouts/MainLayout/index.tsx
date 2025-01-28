import { makeStyles } from "@material-ui/core";
import clsx from "clsx";
import React, { Suspense, lazy } from "react";
import useCommonStyles from "styles/common";

import { Footer, Header } from "./components";

export * from "./components";

const useStyles = makeStyles(() => ({
  root: {
    // overflowX: "hidden",
    display: "flex",
    flexDirection: "column", // Ensures header, main, and footer stack vertically
    minHeight: "100vh",
  },
  content: {
    flex: 1,
    backgroundColor: "#081015",
  },
  loader: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh", // Full screen height
    color: "#fff", // White color for the loader text or spinner
    fontSize: "1.5rem",
  },
}));

interface IProps {
  className?: string;
  children: React.ReactNode | React.ReactNode[];
}

export const MainLayout = (props: IProps) => {
  const classes = useStyles();
  const commonClasses = useCommonStyles();
  return (
    <div className={classes.root}>
      <Header />
      {/* <main className={clsx(classes.content)}> */}
      <main className={clsx(classes.content, commonClasses.scroll)}>
        {props.children}
      </main>
      <Footer />
    </div>
  );
};
