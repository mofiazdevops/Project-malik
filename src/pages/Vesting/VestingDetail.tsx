import { Grid, makeStyles } from "@material-ui/core";
import React from "react";
const useStyles = makeStyles((theme: any) => {
    return {
        wrapper: {
            position: "relative",
            marginTop: "177px",
            marginLeft: "87px",
            marginBottom: "10rem",
            [theme.breakpoints.down("md")]: {
                marginLeft: "40px",
                marginRight: "40px",
            },
            "& h1": {
                fontSize: "6.25rem",
                fontWeight: 700,
                color: theme.colors.black,
                margin: " 1.9rem 0rem 1.9rem",
                [theme.breakpoints.down("md")]: {
                    fontSize: "4.25rem",
                },
            },
            "& p": {
                fontSize: "1.25rem",
                [theme.breakpoints.down("md")]: {
                    fontSize: "1rem",
                },
            },
        },
        heading: {
            "& h2": {
                fontWeight: 700,
                fontSize: "2.18rem",
                marginBottom: "5px",
                [theme.breakpoints.down("md")]: {
                    fontSize: "1.18rem",
                },
            },
        },
        rulesGuideWrapper: {
            "& h2": {
                fontWeight: 700,
                fontSize: "2.18rem",
                marginBottom: "5px",
                [theme.breakpoints.down("md")]: {
                    fontSize: "1.18rem",
                },
            },
        },
        listing: {
            "& ol": {
                display: "block",
                padding: "0 0 0 26px",
                listStyle: "none",
                overflow: "hidden",
                counterReset: "numList",
            },
            "& ol li": {
                marginRight: "44px",
                position: "relative",
                marginBottom: "30px",
                "&:before": {
                    counterIncrement: "numList",
                    content: "counter(numList)",
                    top: "50%",
                    transform: "translate(0, -50%)",
                    float: "left",
                    position: "absolute",
                    left: "-26px",

                    textAlign: "center",
                    color: "black",
                    lineHeight: "18px",

                    width: "18px; height: 18px",
                    borderRadius: "2px",
                    border: "1px solid black",
                },
            },
        },
        hr: {
            margin: 0,
            padding: 0,
            border: " 1px solid rgba(0, 0, 0, 0.5)",
        },
        imageWrapper: {
            display: "flex",
            alignItems: "center",
            height: "100%",
            width: "100%",
            justifyContent: "center",
            [theme.breakpoints.down("md")]: {
                justifyContent: "center",
                "& img": {
                    height: "10rem",
                },
            },
        },
        flip: {
            left: "calc((min(100vw, 1500px) - 5px) / 2)",
            top: "0",
            zIndex: -1,
            position: "absolute",
            right: "-3px",
        },
    };
});
export default function VestingDetail() {
    const classes: any = useStyles();

    return (
        <div className={classes.wrapper}>
            <img
                alt="vesting-blur"
                className={classes.flip}
                src={"/imgs/landing/vesting-blur.svg"}
            />
            <Grid spacing={1}>
                <Grid item lg={7} md={7} xs={12}>
                    <h1>Vesting</h1>
                    {/* <p className="margin-0">
                        Ideaology is implementing vesting on our website.
                    </p>
                    <p className="margin-0">
                        It is expected for vesting to be available on
                        <span style={{ color: "#E27625" }}>[DD/MM/YYYY]</span>
                    </p>
                    <p className="mt-46">
                        Let’s get into what vesting will offer, the benefits,
                        the rules, and everything you need to know!{" "}
                    </p> */}

                    <div className={classes.heading}>
                        <h2>What exactly is Vesting? </h2>
                        <p className="margin-0">
                            Crypto vesting is the act of restricting the sale of
                            a token for a predefined period of time. In plainer
                            terms, it is the time an investor must wait until
                            they gain full control over their assets.
                        </p>
                    </div>

                    <div className={classes.heading}>
                        <h2>
                            Which are the benefits of a token vesting period?{" "}
                        </h2>
                        <p className="margin-0">
                            The user who buys the pool with BUSD, will in return
                            gain pool owner tokens, on a monthly basis with
                            their respective “trade value” and “vesting
                            percentage” that the pool owner sets.
                        </p>
                        <p>
                            Once the user buys the pool, they can start claiming
                            the vesting amount monthly. The users will be
                            getting a notification through email, for claiming
                            vesting tokens opportunity if they skip claiming.
                            This way everyone will be aware of their current
                            situation regarding claiming.
                        </p>
                    </div>

                    <div className={classes.rulesGuideWrapper}>
                        <h2>Rules/Guideline</h2>
                        <div className={classes.listing}>
                            <ol>
                                <li>
                                    <p className="pl-10">
                                        To apply to the pool the user needs to
                                        have a minimum of 10,000 $IDEA. Any user
                                        with an amount below 10,000 will not be
                                        eligible to participate.
                                    </p>
                                </li>
                                <li>
                                    <p className="pl-10">
                                        Users cannot claim until the pool
                                        claiming time and vesting time of 1
                                        month have passed. Every user will have
                                        to wait for the time period to be
                                        complete, and after it has passed, they
                                        will be able to claim.
                                    </p>
                                </li>
                                <li>
                                    <p className="pl-10 margin-0">
                                        In case a user skips claiming after a
                                        period of 1 month or more, they can
                                        claim everything they have skipped in
                                        the upcoming month.{" "}
                                    </p>
                                    <p className="pl-10 margin-0">
                                        <span style={{ color: "#E27625" }}>
                                            Example:
                                        </span>{" "}
                                        A user has missed 4 claims, in May,
                                        June, July, and August. They can claim
                                        the total sum of those 4 months in the
                                        upcoming month, plus the sum of the
                                        upcoming month, which in the example
                                        would be September.
                                    </p>
                                </li>

                                <li>
                                    <p className="pl-10">
                                        Once the pool claiming time is complete,
                                        users can start claiming their vesting
                                        after 1 month of vesting claiming time.
                                    </p>
                                </li>
                                <li>
                                    <p className="pl-10">
                                        The vesting amount is calculated
                                        according to the vesting percentage,
                                        with respect to the amount the users buy
                                        in the pool, and with respect to trade
                                        value set by the user.
                                    </p>
                                </li>
                                <li>
                                    <p className="pl-10">
                                        The monthly vesting terms depend upon
                                        the purchase amount, trade value, and
                                        vesting percentage.
                                    </p>
                                </li>
                                <li>
                                    <p className="pl-10">
                                        The vesting claim will continue until
                                        the amount is greater than zero.
                                    </p>
                                </li>
                                <li>
                                    <p className="pl-10">
                                        The vesting amount decreases gradually
                                        until it becomes zero, or less than the
                                        vesting claiming amount.
                                    </p>
                                </li>
                                <li>
                                    <p className="pl-10">
                                        Every month, users will get the same
                                        vesting amount until the last, but one
                                        term and the leftover amount will be
                                        given to the users as the last term
                                        amount.
                                    </p>
                                </li>
                            </ol>
                        </div>
                    </div>

                    <hr />
                    <p style={{ paddingTop: "66px", paddingBottom: "66px" }}>
                        This is pretty much it for now. Make sure to stay for
                        updates in case anything changes or is added.{" "}
                    </p>
                    <hr />
                </Grid>
                <Grid item lg={5} md={5} xs={12}></Grid>
            </Grid>

            <Grid container spacing={1}>
                <Grid item lg={7} md={7} xs={12}>
                    <div className={classes.heading}>
                        <h2>About Ideaology </h2>
                        <p className="margin-0">
                            Ideaology is a blockchain project that strives to
                            connect three types of users on one unique business
                            network platform.
                        </p>
                        <p className="margin-0">
                            Innovators, developers and investors connected in
                            one platform create an ecosystem which covers four
                            steps from initial idea to crowdfunding.
                        </p>
                        <p className="margin-0">
                            As the crowdfunding part of Ideaology ecosystem, we
                            present IDO as a multi-chain fixed swap application.
                        </p>

                        <p>
                            Ideaology is a multi-chain IDO platform on Ethereum,
                            BSC (Binance Smart Chain), Polygon which serves as a
                            permissionless DEX geared into actualizing
                            cross-chain token pools and auctions, thus
                            facilitating fund raising of cryptocurrency projects
                            in a decentralized and interoperable environment.‌
                        </p>
                        <p>
                            With Ideaology, cryptocurrency projects can easily
                            raise funds by setting up a swap pool based on a
                            fixed purchase rate for tokens on the Ideaology IDO
                            launchpad. End-users will be able to join the
                            projects as whitelisting participants in our secure
                            and rule-abiding service environment.
                        </p>

                        <p className="margin-0">
                            Though initially being an IDO platform, Ideaology,
                            as a full-fledged DEX, is also to provide with users
                            an easy-to-tap-into yield farming taken up by
                            Ideaology-connected token pairs.
                        </p>
                        <p className="margin-0">
                            Ideaology will contain two launchpads designed for
                            founders (IDO) and for developers. The second
                            launchpad will serve as a decentralized freelance
                            application which can help founders create early
                            teams and developers find projects where they can
                            collaborate.
                        </p>

                        <p className="margin-0">
                            Stay tuned and don’t miss any exciting news!
                        </p>
                    </div>
                </Grid>
                <Grid item lg={5} md={5} xs={12}>
                    <div className={classes.imageWrapper}>
                        <img
                            alt="solo-ideaology"
                            src="imgs/landing/Ideaology-Logo.svg"
                        />
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}
