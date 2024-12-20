import React from "react";
import { Button, Container, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme: any) => ({
    container: {
        width: "100%",
        height: "auto",
        marginTop: "4rem",
        background: "#1c2535",
    },
}));

export default function Games() {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            {/* <img alt="games" src="imgs/landing/later.jfif" width="100%" /> */}
            <img alt="games" src="imgs/landing/Games.jpg" width="100%" />
        </div>
    );
}
