import { makeStyles } from "@material-ui/core";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useMediaQuery } from "react-responsive";
import pinRightBigSVG from "assets/svgs/pin-right-big.svg";
import clsx from "clsx";
import useScript from "hooks/useScriptHook";

const useStyles = makeStyles((theme: any) => ({
  root: {
    position: "relative",
  },
  box: {
    maxWidth: "min(742px, 100vw - 100px)",
    minHeight: "320px",
    padding: "20px 0 40px 0px",

    background: "white",

    boxShadow: "0px 12px 20px -8px rgba(5, 43, 72, 0.12)",
    borderRadius: "16px",

    marginLeft: "auto",
    marginRight: "auto",

    position: "relative",
    top: "-48px",

    zIndex: 20,

    [theme.breakpoints.down("xs")]: {
      width: "312px",
      height: "86px",

      top: "-36px",
    },

    "&::after": {
      content: `url(${pinRightBigSVG})`,
      position: "absolute",
      right: "-30px",
      bottom: "-40px",
      zIndex: -1,

      [theme.breakpoints.down("xs")]: {
        bottom: "-70px",
      },
    },
  },
  title: {
    textAlign: "center",
    paddingTop: "24px",

    fontFamily: "Rubik",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "16px",
    lineHeight: "24px",

    color: "#7F909F",

    [theme.breakpoints.down("xs")]: {
      fontSize: "12px",
      lineHeight: "12px",

      paddingTop: "8px",
    },
  },
  sliderWrapper: {
    padding: "10px 0px 0px 0px",
    marginLeft: "auto",
    marginRight: "auto",
    width: "552px",
    marginBottom: "20px",

    [theme.breakpoints.down("xs")]: {
      width: "237px",
      paddingTop: "8px",
    },
  },
  sliderDiv: {
    width: "168px",
    height: "64px",

    [theme.breakpoints.down("xs")]: {
      width: "106px",
      height: "40px",
    },
  },
  sliderImgWrapper: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  sliderImg: {
    padding: "0px 0px",
    marginLeft: "auto",
    marginRight: "auto",

    [theme.breakpoints.down("xs")]: {
      padding: "12px 0px",
      height: "39px",
      width: "auto",
    },
  },
  slider: {
    "& .slick-dots": {
      // bottom: "-10px",
      [theme.breakpoints.down("xs")]: {
        bottom: "-10px",
      },
      "& li": {
        width: "5px",
        margin: "0 3px",
      },
    },
  },
}));

interface IProps {
  className?: string;
}

export const IDEA = (props: IProps) => {
  useScript("https://crypto.com/price/static/widget/index.js");

  const classes = useStyles();

  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: isMobile ? 2 : 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className={clsx(classes.root, props.className)}>
      <div className={classes.box}>
        <div className={classes.title}>Get your IDEA</div>
        <div className={classes.sliderWrapper}>
          <Slider {...settings} className={classes.slider}>
            <div className={classes.sliderDiv}>
              <div className={classes.sliderImgWrapper}>
                <a
                  href="https://trade.kucoin.com/IDEA-USDT"
                  rel="noreferrer"
                  target="_blank"
                >
                  <img
                    alt="kucoin"
                    className={classes.sliderImg}
                    src="/imgs/symbol/kucoin.svg"
                  />
                </a>
              </div>
            </div>
            <div className={classes.sliderDiv}>
              <div className={classes.sliderImgWrapper}>
                <a
                  href="https://www.gate.io/trade/IDEA_USDT"
                  rel="noreferrer"
                  target="_blank"
                >
                  <img
                    alt="gate.io"
                    className={classes.sliderImg}
                    src="/imgs/symbol/gate_io.png"
                    width="50"
                  />
                </a>
              </div>
            </div>
            <div className={classes.sliderDiv}>
              <div className={classes.sliderImgWrapper}>
                <a
                  href="https://coinmarketcap.com/currencies/ideaology/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <img
                    alt="coinmarketcap"
                    className={classes.sliderImg}
                    src="/imgs/symbol/coinmarketcap.svg"
                  />
                </a>
              </div>
            </div>
            <div className={classes.sliderDiv}>
              <div className={classes.sliderImgWrapper}>
                <a
                  href="https://www.coingecko.com/en/coins/ideaology"
                  rel="noreferrer"
                  target="_blank"
                >
                  <img
                    alt="coingecko"
                    className={classes.sliderImg}
                    src="/imgs/symbol/coingecko.png"
                    width="114"
                  />
                </a>
              </div>
            </div>
          </Slider>
        </div>
        <div
          data-coins="ideaology"
          data-design="classic"
          id="crypto-widget-CoinList"
        ></div>
      </div>
    </div>
  );
};
