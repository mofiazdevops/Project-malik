import { Grid, makeStyles } from "@material-ui/core";
import { url } from "inspector";
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
        imageWrapper_staking: {
            "& img": {
                [theme.breakpoints.between("320", "1200")]: {
                    maxWidth: "90%",
                    height: "auto",
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
export default function StakingDetails() {
    const classes: any = useStyles();

    return (
        <div className={classes.wrapper}>
            <img
                alt="vesting-blur"
                className={classes.flip}
                src={"/imgs/landing/staking-blur.svg"}
            />

            <Grid spacing={1}>
                <Grid item lg={7} md={7} xs={12}>
                    <h1>Staking</h1>
                    {/* <p className="margin-0">Staking is coming on Ideaology!</p>
                    <p className="margin-0">
                        Everyone holding{" "}
                        <span style={{ color: "#E27625" }}>$IDEA</span> can now
                        take advantage of this!
                    </p>
                    <p className="margin-0">
                        It is expected to be live on{" "}
                        <span style={{ color: "#E27625" }}>[DD/MM/YYYY]</span>
                    </p>
                    <p className="mt-46">
                        Let’s get into what Staking will offer, the benefits,
                        the rules, and everything you need to know!
                    </p> */}

                    <div className={classes.heading}>
                        <h2>Why should you stake?</h2>
                        <p className="margin-0">
                            Staking is the process of delegating or locking up
                            crypto holdings to earn rewards. Some of the rewards
                            you can earn from staking are earning additional
                            tokens and getting some voting rights.
                        </p>
                    </div>

                    <div className={classes.heading}>
                        <h2>What are the benefits of staking?</h2>
                        <p className="margin-0">
                            The primary benefit of staking is that you earn more
                            crypto, and interest rates can be very generous.
                            It&rsquo;s potentially a very profitable way to
                            invest your money.
                        </p>
                    </div>

                    <div className={classes.rulesGuideWrapper}>
                        <h2>Rules/Guideline</h2>
                        <div className={classes.listing}>
                            <ol>
                                <li>
                                    <p className="pl-10">
                                        To apply for staking the user needs to
                                        have a minimum of 1000 $IDEA. Any user
                                        with tokens below 1000 will not be
                                        eligible to participate.
                                    </p>
                                </li>
                                <li>
                                    <p className="pl-10">
                                        The user can choose the time period they
                                        want to apply for staking, according to
                                        which the percentage will be locked.
                                    </p>
                                </li>
                                <li>
                                    <p className="pl-10">
                                        The percentage will be added to the
                                        amount that they applied for staking,
                                        according to the time period that the
                                        user chooses during the “registration of
                                        staking.”
                                    </p>
                                </li>

                                <li>
                                    <p className="pl-10">
                                        One user can apply for staking multiple
                                        times. It is not limited to once per
                                        user.
                                    </p>
                                </li>
                                <li>
                                    <p className="pl-10">
                                        After the time period the user has
                                        previously chosen is completed, the user
                                        can claim the tokens that they applied
                                        for staking.
                                    </p>
                                </li>
                                <li>
                                    <p className="pl-10">
                                        The user will be getting reminders via
                                        email for the tokens to claim previously
                                        staked. This way we will avoid users
                                        forgetting to claim their staked tokens.
                                    </p>
                                </li>
                                <li>
                                    <p className="pl-10">
                                        If the client is not interested in
                                        staking, then they can withdraw their
                                        tokens without benefit of percentage. So
                                        if users plan to do something else with
                                        the tokens, they are free to withdraw
                                        them.
                                    </p>
                                </li>
                                <li>
                                    <p className="pl-10">
                                        Users will be rewarded with a
                                        percentage, depending on the time period
                                        they choose to stake for.
                                    </p>
                                </li>
                                <div className={classes.imageWrapper_staking}>
                                    <img
                                        alt="staking-percentage"
                                        src="/imgs/landing/staking-percentage.svg"
                                    />
                                </div>
                            </ol>
                        </div>
                    </div>

                    <p style={{ paddingTop: "66px" }}>
                        This is the information we have to share with everyone
                        for now. Stay tuned for more news and updates!
                    </p>
                    <hr />
                </Grid>
                <Grid item lg={5} md={5} xs={12}></Grid>
            </Grid>

            {/* <Grid container spacing={1}>
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
            </Grid> */}
        </div>
    );
}
