import React from "react";
import { Button, Grid, Paper, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme: any) => {
  return {
    wrapTop: {
      marginTop: theme.spacing.unit * 4,
      marginBottom: theme.spacing.unit * 4,
    },
    gridPadding: {
      borderRadius: "14px",
      padding: "20px",
      boxShadow: "0 0 10px gray",
      background: "#fff",
      color: "#000",
    },
    flexContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    gridPaddingSecond: {
      borderRadius: "10px",
      padding: "15px",
      background: "#1d1d36",
      color: "white",
    },
    pStyling: {
      fontSize: "14px",
      color: "#000",
    },
    accountIDClass: {
      background: "#333",
      padding: "8px",
    },
    hrWidth: {
      width: "90%",
    },
    inputWithButton: {
      position: "relative",
    },
    inputField: {
      width: "100%",
      backgroundColor: "#F6F6F6",
      padding: "12px 12px",
      border: "",
      borderColor: "transparent",
      color: "#000",
      fontWeight: "bolder",
      textDecoration: "none",
      outline: "none",
    },
    inputMaxButton: {
      width: "100%",
      backgroundColor: "#F6F6F6",
      padding: "12px 12px",
      border: "",
      borderColor: "transparent",
      color: "#000",
      fontWeight: "bolder",
      textDecoration: "none",
      outline: "none",
    },
    buttonStyling: {
      width: "100%",
      background: "#0C71BC",
      color: "#fff",
      marginTop: "15px",
      padding: "8px 8px",
      fontSize: "15px",
      "&:hover": {
        backgroundColor: "#084F83",
      },
    },
  };
});

export const Wrap = () => {
  const classes: any = useStyles();
  return (
    <div className={classes.wrapTop}>
      <Grid container spacing={4}>
        <Grid item sm={11} xs={12}>
          <Paper className={classes.gridPadding}>
            <div>
              <h2>Wrap</h2>
            </div>
            <div className={classes.inputWithButton}>
              <input
                placeholder="Amount"
                type="number"
                className={classes.inputField}
              />
            </div>
            <Button className={classes.buttonStyling}>Connect Wallet</Button>
            <div className={classes.flexContainer}>
              <div>
                <p className={classes.pStyling}>Unlock Fee</p>
                <p className={classes.pStyling}>Gas Fee</p>
                <p className={classes.pStyling}>Exchange Rate</p>
                <p className={classes.pStyling}>Allowance</p>
                <p className={classes.pStyling}>You Will Receive</p>
              </div>
              <div>
                <p className={classes.pStyling}>$1.31</p>
                <p className={classes.pStyling}>$2.35</p>
                <p className={classes.pStyling}>1 IDEA = 0.9247 IDEA</p>
                <p className={classes.pStyling}>0.0 IDEA</p>
                <p className={classes.pStyling}>0.0 IDEA</p>
              </div>
            </div>
          </Paper>
        </Grid>
        <Grid item sm={11} xs={12}>
          <Paper className={classes.gridPadding}>
            <div>
              <h2>Unwrap</h2>
            </div>
            <div className={classes.inputWithButton}>
              <input
                placeholder="Amount"
                type="number"
                className={classes.inputField}
              />
            </div>
            <Button className={classes.buttonStyling}>Connect Wallet</Button>
            <div className={classes.flexContainer}>
              <div>
                <p className={classes.pStyling}>Gas Fee</p>
                <p className={classes.pStyling}>Exchange Rate</p>
              </div>
              <div>
                <p className={classes.pStyling}>$2.35</p>
                <p className={classes.pStyling}>IDEA = 1.0815 IDEA</p>
              </div>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};
