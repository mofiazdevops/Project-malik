import { makeStyles } from "@material-ui/styles";
import clsx from "clsx";
import { Container } from "@material-ui/core";
import { useState } from "react";
import "./comingsoon.css";
import Timer from "./Timer";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme: any) => ({
  root: {},
  container: {
    display: "",

    marginTop: "100px",
    paddingBottom: "20px",

    position: "relative",
  },
  highLightLaunch: {
    height: "22px",
    width: "75px",
    background: "#DA5077",
    borderRadius: "0px 5px",
    margin: "0 auto",
    textAlign: "center",
    position: "absolute",
    bottom: "0",
    left: "151px",
    top: "0px",
    transform: "translate(-50%, 0%)",
    animation: "$blinker 1.2s linear infinite",
  },
  "@keyframes blinker": {
    "50%": {
      opacity: 0,
    },
  },
  highLightText: {
    fontSize: "10px",
    color: "white",
  },
}));

interface IProps {
  className?: string;
}

export const Airdropcomingsoon = (props: IProps) => {
  const classes = useStyles();
  const gotoApp = (e: any) => {
    e.preventDefault();
    window.open(`https://airdrop.ideaology.io/`, "_blank");
    // }
  };
  const expirationDateTime = new Date("2024-02-11T16:02:57.026Z");

  return (
    <div className={clsx(classes.root, props.className)}>
      <Container className={classes.container}>
        <div>
          {/* <div className="d-flex">
            <h5 className="airdrop_coming_soon">Airdrop</h5>{" "}
            <div className={classes.highLightLaunch}>
              <span className={classes.highLightText}>Coming Soon</span>
            </div>
          </div> */}
          <div className="row">
            <div className="col-12">
              <div className="d-flex justify-content-center">
                <div className="card airdrop_home_card">
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <h5 className="airdrops_home_card_text_h pt-lg-2 pt-md-3 pt-3 pe-lg-5 mb-3">
                        Live 1M AirDrop Event Begins
                      </h5>
                    </div>
                    <div className="">
                      <Timer targetDate={expirationDateTime} />
                    </div>
                  </div>
                  <div className="d-flex justify-content-center mt-lg-4 mt-md-3 mt-3">
                    <button
                      onClick={gotoApp}
                      className="claim_now_btn text-decoration-none"
                    >
                      Claim AirDrop
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
