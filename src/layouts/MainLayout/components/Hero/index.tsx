import React from "react";
import { Button, Container, Grid, makeStyles } from "@material-ui/core";
import coin from "../../../../assets/pngs/coinMarket.png";
import star from "../../../../assets/pngs/Star.png";
import starbg from "../../../../assets/pngs/starbg.png";
import idea from "../../../../assets/pngs/Idea.png";
import gline from "../../../../assets/pngs/gline.png";
import kuCoin from "../../../../assets/pngs/KuCoin Green 1.png";
import coinGecko from "../../../../assets/pngs/CoinGecko.png";
import gif from "../../../../assets/svgs/ideagif.gif";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#081015",
    color: "#FFFFFF",
    padding: "5px 20px",
    display: "flex",
    fontFamily: "SF Pro Display",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    marginTop: 80,
    [theme.breakpoints.up("md")]: {
      textAlign: "left",
    },
  },
  title: {
    maxWidth: "762px",
    fontSize: "44px",
    fontWeight: 700,
    fontFamily: "SF Pro Display",
    lineHeight: "1.2",
    marginBottom: "16px",
    background: "linear-gradient(90deg, #FFFFFF, #3CADFF)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    [theme.breakpoints.down("sm")]: {
      fontSize: "34px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "24px",
    },
  },
  description: {
    fontSize: "24px",
    lineHeight: "1.6",
    marginBottom: "24px",
    color: "#B0B3B8",
    fontFamily: "SF Pro Display",
    [theme.breakpoints.down("sm")]: {
      fontSize: "20px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "16px",
    },
  },
  content: {
    maxWidth: "1250px",
    margin: "0 auto",
  },
  card: {
    display: "flex",
    maxWidth: 500,
    height: 205,
    marginTop: "40px",
    backgroundColor: "#010B14",
    border: "2px solid #001727",
    borderRadius: "12px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",

    [theme.breakpoints.down("md")]: {
      margin: "40px auto 0",
      justifyContent: "center", // Keep centered for small screens (mobile)
      // flexWrap: "wrap", // Allow wrapping if there are multiple buttons
    },
  },
  cardimage: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: "20px",
    gap: "10px",
  },
  cardimage2: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: "30px",
  },
  cardimage3: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    maxWidth: 200,
    [theme.breakpoints.down("xs")]: {
      width: 150,
    },
  },
  cardcontainer: {
    display: "flex",
    flexDirection: "column",
    width: 500,
    padding: "20px",
  },
  cardtext: {
    display: "flex",
    flexDirection: "column",
    fontSize: "16px",
    fontWeight: 500,
    maxWidth: 74,
    // height: 56,
    textAlign: "right",
    [theme.breakpoints.down("sm")]: {
      fontSize: "14px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "10px",
      marginLeft: "10px",
    },
  },
  platformIcons: {
    display: "flex",
    gap: "12px",
  },
  platformIcons1: {
    display: "flex",
    gap: "58px",
    marginTop: 15,
  },
  platformIcon: {
    width: "454px",
    height: "41px",
  },
  platformIcon1: {
    width: "145px",
    height: "58px",
  },
  platformIcon2: {
    width: "105px",
    height: "38px",
  },
  tokenInfo: {
    // marginTop: 20,
    textAlign: "right",
  },
  tokenPrice: {
    fontSize: "16px",
    fontWeight: 600,
  },
  tokenChange: {
    color: "#00FF85",
    fontSize: "14px",
  },
  imageWrapper: {
    background: "#081015",
    display: "flex",
    justifyContent: "center",
    position: "relative",
    marginTop: "40px",
    padding: 0,
  },
  mockupImage: {
    maxWidth: "796px",
    height: "610px",
    padding: 0,
    [theme.breakpoints.down("sm")]: {
      height: "310px",
    },
  },
  floatingIcons: {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "16px",
  },
  leftIcon: {
    top: "20%",
    left: "-40px",
  },
  rightIcon: {
    top: "10%",
    right: "-40px",
  },
  buttoncontainer: {
    display: "flex",
    justifyContent: "flex-start", // Default alignment for larger screens

    [theme.breakpoints.down("sm")]: {
      justifyContent: "center", // Keep centered for small screens (mobile)
      flexWrap: "wrap", // Allow wrapping if there are multiple buttons
    },
    [theme.breakpoints.down("xs")]: {
      justifyContent: "center", // Center for extra-small screens
      padding: "0 10px", // Add padding to avoid edge clipping
    },
    "&:hover": {
      cursor: "pointer",
    },
  },
  textcontai: {
    position: "relative",
    width: 100,
    height: 42,
    textAlign: "center",
    alignContent: "center",
    border: "2px solid #8ecaf3",
    borderRadius: "16px",
    // background: "transparent",
    fontSize: "18px",
    fontWeight: 600,
    background: "linear-gradient(90deg, #FFFFFF, #3CADFF)",
    backgroundClip: "text",
    color: "transparent",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    transition: "background-color 0.3s ease",

    "&:hover": {
      background: "linear-gradient(90deg, #3CADFF, #FFFFFF)",
      backgroundClip: "text",
      color: "transparent",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },

    [theme.breakpoints.down("xs")]: {
      width: 320,
      height: 42,
    },
  },
  dust: {
    position: "absolute",
    top: "-35%",
    left: "-50%",
    [theme.breakpoints.down("xs")]: {
      top: "-25%",
      left: "-15%",
    },
  },
  star: {
    animation: "$rotate 8s linear infinite", // Apply rotation animation
    width: 15, // Ensure consistent width
    height: 15, // Ensure consistent height
    position: "absolute",
    top: "0%",
    right: "-18%",
    [theme.breakpoints.down("xs")]: {
      top: "-4%",
      right: "-7%",
    },
  },

  "@keyframes rotate": {
    from: {
      transform: "rotate(0deg)",
    },
    to: {
      transform: "rotate(360deg)",
    },
  },
  text: {
    fontSize: "20px",
    fontWeight: 700,
    textAlign: "left",
  },
  gridContainer: {
    display: "flex",
    flexDirection: "row", // Default flex direction (for larger devices)
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column-reverse", // Change flex direction on small devices
    },
  },
}));

export const Hero = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container className={classes.content}>
        <Grid
          container
          spacing={4}
          alignItems="center"
          className={classes.gridContainer}
        >
          <Grid item xs={12} md={6}>
            <h1 className={classes.title}>
              Empowering Innovation <br />
              Through Blockchain Technology
            </h1>
            <p className={classes.description}>
              Join the decentralized ecosystem bridging talent, ideas &
              technology for a better future.
            </p>
            <div className={classes.buttoncontainer}>
              <span className={classes.textcontai}>
                <img
                  src={starbg}
                  alt="starbg"
                  width={70}
                  height={70}
                  className={classes.dust}
                />
                Explore
                <img src={star} alt="star" className={classes.star} />
              </span>
            </div>
            <div className={classes.card}>
              <div className={classes.cardcontainer}>
                <div>
                  <h2 className={classes.text}>Get Your Idea</h2>
                </div>
                <div className={classes.cardimage}>
                  <div>
                    <img
                      src={coin}
                      alt="coin"
                      style={{
                        width: "100%",
                        maxWidth: "155px", // Set a maximum width to prevent it from becoming too large
                        height: "auto",
                      }}
                      // width={155}
                      // height={24}
                    />
                  </div>
                  <div>
                    <img
                      src={kuCoin}
                      alt="kuCoin"
                      style={{
                        width: "100%",
                        maxWidth: "99px", // Set a maximum width to prevent it from becoming too large
                        height: "auto",
                      }}
                      // width={99}
                      // height={26}
                    />
                  </div>
                  <div>
                    <img
                      src={coinGecko}
                      alt="coinGecko"
                      style={{
                        width: "100%",
                        maxWidth: "131px", // Set a maximum width to prevent it from becoming too large
                        height: "auto",
                      }}
                      // width={131}
                      // height={34}
                    />
                  </div>
                </div>
                <div className={classes.cardimage2}>
                  <div>
                    <img
                      src={idea}
                      alt="idea"
                      style={{
                        width: "100%",
                        maxWidth: "132px", // Set a maximum width to prevent it from becoming too large
                        height: "auto",
                      }}
                      // width={132}
                      // height={52}
                    />
                  </div>
                  <div className={classes.cardimage3}>
                    <div className={classes.cardtext}>
                      <span>$0.001774</span>
                      <span>+27.75%</span>
                    </div>
                    <div>
                      <img
                        src={gline}
                        alt="gline"
                        style={{
                          width: "100%",
                          maxWidth: "66px", // Set a maximum width to prevent it from becoming too large
                          height: "auto",
                        }}
                        // width={66}
                        // height={31}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={6} className={classes.imageWrapper}>
            <img
              loading="lazy"
              src={gif}
              alt="Mockup"
              className={classes.mockupImage}
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
