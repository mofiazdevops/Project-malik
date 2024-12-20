// import { value Container, value makeStyles } from "@material-ui/core";
// import clsx from "clsx";
// import { value UpcomingPool } from "components";
// import React from "react";
// import { value IPool } from "store/types";
// import { value calculateTimeLeft } from "utils/datetime";
// import { value formatBigNumber } from "utils/formatNumber";
// import useCommonStyles from "styles/common";

import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { IDO_URL } from "config/constants";
import useCommonStyles from "styles/common";
import { calculateTimeLeft } from "utils/datetime";
import { formatBigNumber } from "utils/formatNumber";
// import { IPool } from "store/types";
import clsx from "clsx";
import { Container, Grid } from "@material-ui/core";
import logo from "../../../../assets/pngs/projectscac/projectlogo.png";
import background from "../../../../assets/pngs/projectscac/projectbackground.png";
import { Link } from "react-router-dom";
import { allDeployedStakings } from "services/api";
import { StakingCard } from "./StakingCard";
import Carousel from "react-elastic-carousel";

const useStyles = makeStyles((theme: any) => ({
    root: {
        backgroundImage: "url(/imgs/landing/ellipse.svg)",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "scroll",
        backgroundPosition: "800px 200px",

        [theme.breakpoints.down("xs")]: {
            backgroundPosition: "100px 200px",
        },
    },
    container: {
        display: "flex",

        marginTop: "160px",
        paddingBottom: "160px",

        position: "relative",
    },
    pinText: {
        fontFamily: "Rubik",
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: "32px",
        lineHeight: "40px",
        color: "#1C2535",
        position: "relative",
        // position: "absolute",
        // left: "100px",
        // top: "20px",

        [theme.breakpoints.down("xs")]: {
            left: `calc((100vw - ${theme.custom.poolCardWidth})/ 2 - 6px)`,
            top: "-60px",
        },

        "&::before": {
            content: "url(/imgs/landing/pin-left-small.svg)",
            position: "absolute",
            left: "-20px",
            top: "-20px",
            zIndex: -1,
        },
    },
    poolWrapper: {
        position: "relative",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "start",
        justifyContent: "flex-start",

        // width: "600px",

        marginLeft: "auto",
        marginRight: "auto",

        [theme.breakpoints.down("xs")]: {
            width: "300px",
        },
    },
    down: {
        position: "relative",
        top: "100px",

        [theme.breakpoints.down("xs")]: {
            top: 0,
        },
    },
    pinCircleImg: {
        display: "block",

        position: "absolute",
        right: "calc((min(100vw, 1280px) - 600px) / 2)",
        top: "50px",
        zIndex: -1,
        [theme.breakpoints.down("xs")]: {
            display: "none",
        },
    },
    pinGridImg: {
        display: "block",

        position: "absolute",
        left: "calc((min(100vw, 1280px) - 600px) / 2)",
        bottom: "100px",
        zIndex: -1,
        [theme.breakpoints.down("xs")]: {
            left: "calc((100vw - 300px) / 2)",
        },
    },
    noPools: {
        width: "300px",
        height: "200px",

        marginLeft: "auto",
        marginRight: "auto",

        textAlign: "center",

        fontSize: "24px",
        lineHeight: "32px",
        color: "#1C2535",

        display: "flex",
        flexDirection: "column-reverse",
    },
    poolLink: {
        color: "#1C2535",
    },
}));

interface IProps {
    className?: string;
}

export interface IPool {
    account?: string;
    category: string;
    chain: string;
    chainId?: number;
    fundType: number;
    address: string;
    access: number;
    tradeValue: number;
    minAlloc: number;
    maxAlloc: number;
    fee: number;
    startDate?: string;
    endDate?: string;
    claimDate?: string;
    applicationId: any;
    _id: string;
    status?: string;
    user?: string;
    meta?: {
        logo?: string;
        cover?: string;
    };
    poolId?: number;
    deployStatus: boolean;
    contractAddress: string;
    tokenPrice: number;
    claimed: boolean;
    claimedAmount: string;
}

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 3 },
];

export const StakingList = (props: IProps) => {
    const classes = useStyles();
    const [loading, setLoading] = useState<boolean>(false);
    const [stakings, setStakings] = useState<any>();

    useEffect(() => {
        setLoading(true);
        allDeployedStakings()
            .then((response) => {
                setStakings(response.data);
                setLoading(false);
            })
            .catch((err) => {
                setLoading(false);
            });
    }, []);
    return (
        <div className={clsx(classes.root, props.className)}>
            <Container className={classes.container} maxWidth="lg">
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <div className={clsx(classes.pinText, "pinText")}>
                            All Stakes
                        </div>
                    </Grid>
                    <Grid container justifyContent="center">
                        {stakings && stakings.length > 0 ? (
                            <Carousel
                                breakPoints={breakPoints}
                                // enableAutoPlay={true}
                                isRTL={false}
                                showArrows={false}
                            >
                                {stakings.map((staking: any, key: number) => {
                                    return (
                                        <Grid
                                            item
                                            key={key}
                                            lg={12}
                                            md={12}
                                            xs={12}
                                        >
                                            <StakingCard staking={staking} />
                                        </Grid>
                                    );
                                })}
                            </Carousel>
                        ) : (
                            <h3>No stakings found</h3>
                        )}
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};
