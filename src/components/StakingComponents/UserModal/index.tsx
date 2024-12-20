import React from 'react';
import { Button, Grid, Paper, makeStyles } from "@material-ui/core";
import { ethToWei } from "utils";
import { formatBigNumber } from 'utils/formatNumber';

const useStyles = makeStyles((theme: any) => {
    return {
        gridPadding: {
            borderRadius: "14px",
            padding: "20px",
            boxShadow: "0 0 10px gray",
            background: "#fff",
            color: "#000",
            [theme.breakpoints.down("sm")]: {
            margin: "auto",
            justifyContent: "center",
            alignItems: "center",
            },
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
              color: "#fff",
            },
        },
        flexContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        },
        pStyling: {
        fontSize: "14px",
        color: "#000",
        },
    };
});

const UserModal = ({user}:any) => {
    const classes: any = useStyles();
  return (
    <Grid container spacing={4}>
      <Grid item sm={11} xs= {12}>
          <Paper className={classes.gridPadding}>
            <div className={classes.flexContainer}>
              <div>
                <p className={classes.pStyling}>User Address</p>
                <p className={classes.pStyling}>Amount</p>
                <p className={classes.pStyling}>Percentage</p>
              </div>
              <div>
                <p className={classes.pStyling}>{user.userAddress}</p>
                <p className={classes.pStyling}>{formatBigNumber(user.stakedAmount)}</p>
                <p className={classes.pStyling}>{user.staking.toString()} %</p>
              </div>
            </div>
          </Paper>
      </Grid>
    </Grid>
  );
};

export default UserModal;