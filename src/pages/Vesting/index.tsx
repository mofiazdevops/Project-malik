import { Button, Grid, makeStyles } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";

export default function Vesting() {
    const useStyles = makeStyles((theme: any) => {
        return {
            vestingWrapper: {
                display: "flex",
                position: "relative",
                marginTop: "160px",
                paddingBottom: "160px",
            },
            vestingCard: {
                maxWidth: "38rem",
                width: "auto",
                background: theme.colors.primary,
                borderRadius: " 0px 100px 100px 0px",
                padding: "110px 80px 80px 89px",
                [theme.breakpoints.down("md")]: {
                    maxWidth: "100%",
                    padding: "55px 40px 40px 44px",
                },
                [theme.breakpoints.down("sm")]: {
                    padding: "55px 25px 40px 25px",
                    margin: "auto",
                    width: "80%",
                    borderRadius: "50px",
                },
                "& h1": {
                    fontStyle: "normal",
                    fontWeight: 700,
                    fontSize: "60px",
                    lineHeight: "90px",
                    color: theme.colors.white,
                    [theme.breakpoints.down("sm")]: {
                        fontSize: "30px",
                        lineHeight: "30px",
                    },
                    [theme.breakpoints.down("md")]: {
                        fontSize: "40px",
                        lineHeight: "40px",
                    },
                },
                "& p": {
                    color: theme.colors.white,
                    fontWeight: 400,
                    fontSize: "1.25rem",
                    lineHeight: "23px",
                    [theme.breakpoints.down("sm")]: {
                        fontSize: "0.6rem",
                        lineHeight: "15px",
                    },
                    [theme.breakpoints.down("md")]: {
                        fontSize: "0.9rem",
                        lineHeight: "19px",
                    },
                },
                "& p:nth-child(2)": { marginTop: "4.06rem" },
                "& p:nth-child(3)": { marginTop: "2.81rem" },
            },
            note: {
                marginTop: "4.06rem",
                display: "flex",
            },
            noteItem: {
                background: theme.colors.darkBlue,
                color: theme.colors.white,
                padding: "10px 20px",
                borderRadius: "30px",
                display: "flex",
                alignItems: "center",
                [theme.breakpoints.down("md")]: {
                    padding: "10px 15px",
                    fontSize: "12px",
                },
            },
            vestingImageWrapper: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                "& img": {
                    [theme.breakpoints.between("320", "1200")]: {
                        maxWidth: "90%",
                        height: "auto",
                    },
                },
            },
        };
    });
    const classes: any = useStyles();
    const history = useHistory();
    return (
        <>
            <div className={classes.vestingWrapper}>
                <Grid container spacing={1}>
                    <Grid item lg={5} md={5} xs={12}>
                        <div className={classes.vestingCard}>
                            <h1>Vesting</h1>
                            <p>
                                Crypto vesting is the act of restricting the
                                sale of a token for a predefined period of time.
                                In plainer terms, it is the time an investor
                                must wait until they gain full control over
                                their assets.
                            </p>
                            <p>
                                The user who buys the pool with BUSD, will in
                                return gain pool owner tokens, on a monthly
                                basis with their respective “trade value” and
                                “vesting percentage” that the pool owner sets.
                            </p>
                            <div className={classes.note}>
                                <Button
                                    className={classes.noteItem}
                                    onClick={() =>
                                        history.push({
                                            pathname: "/staking-vesting",
                                            state: { from: "vesting" },
                                        })
                                    }
                                >
                                    Read More on Benefits & Rules{" "}
                                    <img
                                        alt="icon"
                                        src={"imgs/landing/moredetails.svg"}
                                        style={{ marginLeft: "10px" }}
                                    />
                                </Button>
                            </div>
                        </div>
                    </Grid>
                    <Grid item lg={7} md={7} xs={12}>
                        <div className={classes.vestingImageWrapper}>
                            <img
                                alt="vesting-demo"
                                src="imgs/landing/vestingdemo.svg"
                            />
                        </div>
                    </Grid>
                </Grid>
            </div>
        </>
    );
}
