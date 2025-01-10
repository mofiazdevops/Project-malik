import { makeStyles } from "@material-ui/core";
import clsx from "clsx";
import React, { Suspense, lazy } from "react";
import useCommonStyles from "styles/common";

// import { Footer, Header } from "./components";
const Header = lazy(() =>
  import("./components").then((module) => ({ default: module.Header }))
);
const Footer = lazy(() =>
  import("./components").then((module) => ({ default: module.Footer }))
);
export * from "./components";

const useStyles = makeStyles(() => ({
  root: {
    overflowX: "hidden",
  },
  content: {},
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
    <Suspense fallback={<div className={classes.loader}>Loading...</div>}>
      <div className={classes.root}>
        <Header />
        {/* <main className={clsx(classes.content)}> */}
        <main className={clsx(classes.content, commonClasses.scroll)}>
          {props.children}
        </main>
        <Footer />
      </div>
    </Suspense>
  );
};
