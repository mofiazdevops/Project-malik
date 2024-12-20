import React, { useEffect, useState } from "react";
import "./index.css";
import { Box, Dialog, Divider, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import PhoneIcon from "@mui/icons-material/Phone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Button, Container, makeStyles } from "@material-ui/core";
import { IDO_URL } from "config/constants";

const number = "123456";
const whatsapp = "123456";

const useStyles = makeStyles((theme: any) => ({
  communityButton: {
    background: "#FD4975",
    color: "#FFFFFF",
    height: 40,
    fontSize: 16,
    margin: "10px",

    "&:hover": {
      backgroundColor: "#FE87A4",
    },
  },
}));

export default function OfferDialog() {
  const classes = useStyles();
  const [showDialog, setShowDialog] = useState(false);

  const gotoApp = (e: any) => {
    e.preventDefault();
    // if (parseInt(userIDAblance) < 10000) {
    //     dispatch({
    //         type: AppTypes.AlertModal,
    //         payload: {
    //             show: true,
    //             title: "Low Balance",
    //             body: "Your IDA balance is below 10000",
    //         },
    //     });
    // } else {
    window.open(`${IDO_URL}/register`, "_blank");
    // }
  };

  useEffect(() => {
    const showedCount = sessionStorage.getItem("showCount");
    console.log(showedCount);

    if (!showedCount) {
      setTimeout(() => {
        setShowDialog(true);
        sessionStorage.setItem("showCount", "1");
      }, 2000);
    } else if (showedCount === "1") {
      setShowDialog(false);
    }
  }, []);

  return (
    <div>
      {/* <Dialog keepMounted open={showDialog} onClose={() => setShowDialog(false)}>
      <div className="offer__dialog">
        <div className="modalHeader">
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
        📣Attention Crypto Investors
            </Typography>
        </div>
        <Box sx={{ margin: "1rem 0" }}>
          <Divider />
        </Box>
        <div className="modalBody">
          <div className="modalBody__txt">
            <Typography variant="h5" sx={{ fontWeight: "old" }}>
        🔥IDEA GIVEAWAY NOW LIVE🔥
            </Typography>
           
          </div>
          <div className="modalBody__img">
            <img src="./imgs/landing/offer.png" alt="" />
          </div>
          <div className="modalBody__btnContainer">
          <Typography  sx={{ opacity: "0.8", maxWidth: "400px" }} variant="h6">
            Sign Up Now [500 IDEA Tokens for 5 Lucky Winners🏆]
            </Typography>
            <Button
              classes={{ root: classes.communityButton }}
              disableElevation
              variant="contained"
              className="modalBody__btn"
              onClick={gotoApp}
            >
              Use Your Email
            </Button>
          </div>
        </div>
        <Box sx={{ margin: "1rem 0" }}>
          <Divider />
        </Box>
        <Typography sx={{ fontWeight: "bold" }}>🌠Wishing You All the Best in Winning $IDEA</Typography>
       
      </div>
    </Dialog> */}
    </div>
  );
}
