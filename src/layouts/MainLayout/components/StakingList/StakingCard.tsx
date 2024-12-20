import { Button, Grid, LinearProgress, makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import moment from "moment";
import { Skeleton } from "@material-ui/lab";

// Icons

interface StakingDetails {
    id: string;
    endDate: Date;
    amount: number;
    percentage: number;
    chainId: string;
    apply: boolean;
    claim: boolean;
    stakingclaim: boolean;
    stakingId: string;
    createdAt: Date;
}

interface IStaking {
    staking: StakingDetails;
}

export const StakingCard = (props: IStaking) => {
    const classes = useStyles();

    const [loading, setLoading] = useState<boolean>();

    const history = useHistory();

    const dateComparision = (_startDate: Date, _endDate: Date) => {
        const start = new Date(_startDate); // Jan 1, 2015
        const end = new Date(_endDate); // June 24, 2015
        const today = new Date(); // April 23, 2015

        const hourDiff = end.valueOf() - today.valueOf(); //in ms
        const minDiff = hourDiff / 60 / 1000; //in minutes
        const hDiff = hourDiff / 3600 / 1000; //in hours

        const duration1 = moment.duration(moment(end).diff(moment(start)));
        const duration2 = moment.duration(moment(end).diff(moment(today)));
        const timee = `Finishing in ${
            hDiff <= 0 ? 0 : Math.floor(hDiff)
        } hours, ${minDiff <= 0 ? 0 : Math.floor(minDiff)} minutes`;

        const percentage =
            Math.floor(duration2.asMinutes()) <= 0
                ? 100
                : 100 - (duration2.asMinutes() / duration1.asMinutes()) * 100;

        return {
            time: timee,
            percentage: Math.round(percentage),
        };
    };

    const viewStaking = (stakingId: string) => () => {
        window.open(
            `${process.env.REACT_APP_IDO_URL_DEV}/staking/details/${stakingId}`
        );
    };

    const { staking }: any = props;
    return (
        <div className={classes.root}>
            <div className={classes.wrapper}>
                <Grid container justifyContent="space-between">
                    <Grid
                        className={classes.breadcrumb}
                        container
                        item
                        md={12}
                        xs={12}
                    >
                        <Grid className={classes.divCenter} item xs={12}>
                            {/* <div className={classes.coinImageContainer}></div>
                            <div className={classes.textOverflowControl}>
                                <span
                                    className={classes.projectPrefix}
                                    // onClick={() => history.goBack()}
                                >
                                    Stakings
                                </span>
                                <span className={classes.separator}>/</span>
                                <span className={classes.projectName}>
                                    {staking?.stakingId || "N/A"}
                                </span>
                            </div> */}
                        </Grid>
                    </Grid>
                    <Grid
                        className={classes.DetailsContainer}
                        container
                        justifyContent="space-between"
                        spacing={3}
                    >
                        <Grid
                            className={classes.cardGrid}
                            container
                            item
                            md={12}
                            xs={12}
                        >
                            <Grid
                                className={classes.cardContainer}
                                container
                                direction="column"
                                item
                                spacing={2}
                                xs={12}
                            >
                                <Grid item>
                                    <div className={classes.cardHeading}>
                                        {!loading && (
                                            <span style={{ fontWeight: 700 }}>
                                                {staking?.claim
                                                    ? "Claimed"
                                                    : staking?.stakingclaim
                                                    ? "Staking Claimed"
                                                    : "Staking Progress"}
                                            </span>
                                        )}
                                    </div>
                                </Grid>
                                <Grid
                                    className={classes.cardPriceContainer}
                                    container
                                    item
                                >
                                    {loading ? (
                                        <>
                                            <Skeleton
                                                height={40}
                                                variant="rect"
                                                width={"100%"}
                                            />
                                            <Skeleton
                                                height={40}
                                                variant="rect"
                                                width={"100%"}
                                            />
                                            <Skeleton
                                                height={40}
                                                variant="rect"
                                                width={"100%"}
                                            />
                                            <Skeleton
                                                height={40}
                                                variant="rect"
                                                width={"100%"}
                                            />
                                            <Skeleton
                                                height={40}
                                                variant="rect"
                                                width={"100%"}
                                            />
                                        </>
                                    ) : (
                                        <>
                                            <Grid
                                                className={
                                                    classes.cardPriceText
                                                }
                                                item
                                                xs={6}
                                            >
                                                Locking Amount
                                            </Grid>
                                            <Grid
                                                className={`${classes.cardPriceText} ${classes.cardPricevalue}`}
                                                item
                                                xs={6}
                                            >
                                                {"IDEA " + staking?.amount}
                                            </Grid>
                                            <Grid
                                                className={
                                                    classes.cardPriceText
                                                }
                                                item
                                                xs={6}
                                            >
                                                Unlock Date
                                            </Grid>
                                            <Grid
                                                className={`${classes.cardPriceText} ${classes.cardPricevalue}`}
                                                item
                                                xs={6}
                                            >
                                                {moment(
                                                    staking?.endDate
                                                ).format("DD-MM-YYYY hh:mm A")}
                                            </Grid>

                                            <Grid
                                                className={
                                                    classes.cardPriceText
                                                }
                                                item
                                                xs={6}
                                            >
                                                Total Staking Claim
                                                {`(${
                                                    (staking?.percentage || 0) +
                                                    "%"
                                                })`}
                                            </Grid>
                                            <Grid
                                                className={`${classes.cardPriceText} ${classes.cardPricevalue}`}
                                                item
                                                xs={6}
                                            >
                                                {"IDEA " +
                                                    (staking?.percentage /
                                                        100) *
                                                        staking.amount || 0}
                                            </Grid>
                                        </>
                                    )}
                                </Grid>
                                <Grid item>
                                    {loading ? (
                                        <Skeleton
                                            height={40}
                                            variant="rect"
                                            width={"100%"}
                                        />
                                    ) : (
                                        <>
                                            <div
                                                className={
                                                    classes.progressBarTop
                                                }
                                            >
                                                <span
                                                    className={
                                                        classes.daysCount
                                                    }
                                                >
                                                    {staking.claim
                                                        ? `Finished`
                                                        : dateComparision(
                                                              staking.createdAt,
                                                              staking.endDate
                                                          ).time}
                                                </span>
                                                <span
                                                    className={
                                                        classes.percentage
                                                    }
                                                >
                                                    {dateComparision(
                                                        staking.createdAt,
                                                        staking.endDate
                                                    ).percentage + "%"}
                                                </span>
                                            </div>

                                            <LinearProgress
                                                className={classes.progressBar}
                                                value={
                                                    staking.claim
                                                        ? 100
                                                        : dateComparision(
                                                              staking.createdAt,
                                                              staking.endDate
                                                          ).percentage
                                                }
                                                variant="determinate"
                                            />
                                            <div
                                                className={
                                                    classes.progressBarBottom
                                                }
                                            ></div>
                                            <div
                                                style={{
                                                    justifyContent: "center",
                                                    display: "flex",
                                                    marginTop: "30px",
                                                }}
                                            >
                                                <Button
                                                    className={
                                                        classes.viewButton
                                                    }
                                                    color="primary"
                                                    onClick={viewStaking(
                                                        staking._id
                                                    )}
                                                    size="small"
                                                    type="submit"
                                                    variant="contained"
                                                >
                                                    View
                                                </Button>
                                            </div>
                                        </>
                                    )}
                                </Grid>

                                {/* here */}
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

const useStyles = makeStyles((theme: any) => ({
    root: {
        marginTop: "64px",
    },
    wrapper: {
        paddingTop: "32px",
        paddingBottom: "32px",
    },
    breadcrumb: {
        marginBottom: "24px",
    },
    DetailsContainer: {
        position: "relative",
        wordBreak: "break-all",
        display: "flex",
        justifyContent: "center",
    },
    coinImageContainer: {
        // width: "34px",
        // height: "34px",
        border: "1px solid #C4C4C4",
        borderRadius: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginRight: "12px",
    },
    coinImage: {
        width: "34px",
        height: "34px",
        padding: "6px",
    },
    textOverflowControl: {
        overflow: "hidden",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
    },
    inlineElement: {
        display: "flex",
    },
    projectPrefix: {
        color: "rgba(0, 0, 0, 0.5)",
        cursor: "pointer",
    },
    separator: {
        color: "rgba(0, 0, 0, 0.5)",
        marginRight: "4px",
        marginLeft: "4px",
    },
    projectName: {
        overflow: "hidden",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
    },
    coverImage: {
        width: "100%",
        height: "365px",
        borderRadius: "20px",
    },
    linkContainer: {
        display: "flex",
        marginBottom: "6px",
    },
    links: {
        marginLeft: "4px",
        color: "#261E81",
        cursor: "pointer",
        marginBottom: "4px",
    },
    cardGrid: {
        display: "flex",
        justifyContent: "center",
        top: "155px",
        bottom: "auto",
        position: "sticky",
        zIndex: 5,
        alignSelf: "flex-start",
        [theme.breakpoints.down("md")]: {
            marginTop: "44px",
        },
    },
    cardContainer: {
        margin: 10,
        maxWidth: "475px",
        background: "#fff",
        color: "#000",
        boxShadow: "0px 4px 13px rgba(0, 0, 0, 0.25)",
        borderRadius: "20px",
        padding: "24px 20px 20px 20px",
        // minHeight: "490px",
        [theme.breakpoints.down("xs")]: {
            padding: "12px 12px 20px 12px",
        },
    },
    cardLogoContainer: {
        // width: "34px",
        // height: "34px",
        position: "absolute",
        border: "8px solid #fff",
        borderRadius: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        top: "-40px",
    },
    cardLogo: {
        height: "58px",
        width: "58px",
        borderRadius: "50%",
    },
    cardHeading: {
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        lineHeight: 0.75,
    },
    cardPriceContainer: {
        marginTop: "16px",
    },
    cardPriceText: {
        marginBottom: "12px",
        fontSize: "15px",
        fontWeight: 300,
    },
    cardPricevalue: {
        fontWeight: "bold",
        textAlign: "right",
        overflow: "hidden",
        // font-size: "17px";
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
    },
    progressBar: {
        height: "10px",
        backgroundColor: "rgba(12, 113, 188, 0.4)",
        borderRadius: "6px",

        "& .MuiLinearProgress-barColorPrimary": {
            backgroundColor: "#0C71BC",
            borderRadius: "6px",
        },
    },
    progressBarTop: {
        display: "flex",
        justifyContent: "space-between",
        fontSize: "15px",
        fontWeight: 300,
        marginBottom: "4px",
    },
    daysCount: {
        width: "80%",
        fontSize: "12px",
    },
    percentage: {
        width: "20%",
        fontSize: "12px",
        textAlign: "right",
    },
    progressBarBottom: {
        textAlign: "right",
        fontSize: "12px",
        fontWeight: 300,
        marginTop: "4px",
    },
    buttonContainer: {
        display: "flex",
        justifyContent: "space-between",
    },
    secondButton: {
        backgroundColor: "#fff",
        color: "#0C71BC",
        "&:hover": {
            backgroundColor: "#fff",
            color: "#0C71BC",
        },
        "&:disabled": {
            backgroundColor: "#fff",
            color: "#8A8D91",
            opacity: 0.7,
            cursor: "default",
        },
    },
    firstButton: {
        color: "#fff",
    },
    button: {
        // minWidth: "153px",
        height: "40px",
    },

    loader: {
        minHeight: "calc(100vh - 200px - 64px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    poolError: {
        marginTop: "64px",
        minHeight: "200px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textTransform: "uppercase",
        [theme.breakpoints.up("md")]: {
            minHeight: "calc(100vh - 200px - 64px)",
        },
    },
    divCenter: {
        display: "flex",
        alignItems: "center",
        // justifyContent: "center",
    },
    allUnset: {
        all: "unset",
    },
    socialIconContainer: {
        marginTop: "6px",
        marginBottom: "6px",
        display: "flex",
    },
    socialIcon: {
        marginRight: "12px",
        "&:hover": {
            filter: "invert(24%) sepia(97%) saturate(1806%) hue-rotate(188deg) brightness(99%) contrast(91%)",
        },
    },
    iconText: {
        marginTop: "6px",
        marginBottom: "6px",
        display: "flex",
        justifyContent: "flex-end",
        color: "#261E81",
        cursor: "pointer",
        fontWeight: "normal",
    },
    socialIconLink: {
        cursor: "pointer",
        "&:hover": {
            filter: "invert(24%) sepia(97%) saturate(1806%) hue-rotate(188deg) brightness(99%) contrast(91%)",
        },
    },
    description: {
        wordBreak: "break-word",
    },
    viewButton: {
        width: "126px",
        height: "40px",
        background: theme.colors.primary,
        [theme.breakpoints.down("xs")]: {
            marginTop: "12px",
            // width: "100%",
            // maxWidth: "308px",
        },
    },
}));
