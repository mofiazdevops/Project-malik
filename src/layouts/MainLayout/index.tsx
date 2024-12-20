import { makeStyles } from "@material-ui/core";
import clsx from "clsx";
import React from "react";
import useCommonStyles from "styles/common";

import { Footer, Header } from "./components";
export * from "./components";

const useStyles = makeStyles(() => ({
    root: {
        overflowX: "hidden",
    },
    content: {},
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
