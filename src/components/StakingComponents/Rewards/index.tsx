import React, { useState } from "react";
import {
  Button,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  makeStyles,
  withStyles,
} from "@material-ui/core";
import { rewardsHistory } from "utils/stake-questions";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";

const useStyles = makeStyles((theme: any) => {
  return {
    stakingTop: {
      marginTop: theme.spacing.unit * 3,
      marginBottom: theme.spacing.unit * 4,
    },
    gridPadding: {
      marginLeft: "5rem",
      marginRight: "5rem",
      borderRadius: "14px",
      padding: "20px",
      boxShadow: "0 0 10px gray",
      background: "#fff",
      color: "#000",
      overflowX: "auto",
      [theme.breakpoints.down("sm")]: {
        marginLeft: "0px",
        marginRight: "0px",
      },
    },
    gridPaddingSecond: {
      padding: "15px",
      color: "white",
    },
    pStyling: {
      fontSize: "14px",
      color: "#000",
    },
    pColoring: {
      fontSize: "14px",
      color: "#000",
      cursor: "pointer",
    },
    flexContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      color: "#000",
      // paddingLeft: '12px',
      // paddingRight: '12px'
      [theme.breakpoints.down("xs")]: {
        display: "flex",
        flexDirection: "column",
        margin: "auto",
        alignItems: "center",
        alignSelf: "center",
        textAlign: "center",
      },
    },
    accountIDClass: {
      background: "#333",
      color: "#fff",
      padding: "8px",
    },
    inputField: {
      width: "80%",
      backgroundColor: "#F6F6F6",
      padding: "12px 12px",
      borderRadius: "10px",
      border: "1px solid",
      borderColor: "gray",
      color: "#000",
      textDecoration: "none",
      outline: "none",
      lineHeight: "1.6",
    },
    buttonStyling: {
      width: "15%",
      background: "#0C71BC",
      color: "#fff",
      padding: "8px 8px",
      fontSize: "15px",
      "&:hover": {
        backgroundColor: "#084F83",
        color: "#fff",
      },
      [theme.breakpoints.down("sm")]: {
        width: "80%",
        marginTop: "1rem",
      },
    },
    lineHei: {
      lineHeight: "1.6",
    },
    flexInputButton: {
      paddingLeft: "10px",
      paddingRight: "10px",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      [theme.breakpoints.down("sm")]: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        margin: "auto",
        alignItems: "center",
        alignSelf: "center",
      },
    },
    currentBalancing: {
      color: "#fff ",
      backgroundColor: "#0C71BC",
      padding: "12px",
      borderRadius: "12px",
      textAlign: "center",
    },
    iconHeight: {
      lineHeight: "1.6",
      float: "left",
    },
  };
});

const StyledTableRow = withStyles({
  head: {
    backgroundColor: "#0C71BC",
    borderRadius: "20px",
    lineHeight: "1.6",
    cursor: "pointer",
  },
})(TableRow);

const StyledTableCell = withStyles({
  root: {
    color: "#fff",
    lineHeight: "1.6",
    overflowX: "auto",
    maxWidth: 600,
    background: "",
  },
})(TableCell);

export const Rewards = () => {
  const classes: any = useStyles();
  return (
    <div className={classes.stakingTop}>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Paper className={classes.gridPadding}>
            <div className={classes.flexContainer}>
              <div>
                <h2>Reward History</h2>
                <p className={classes.pStyling}>
                  Track your Reward History with IDEA
                </p>
              </div>
              <div>
                <h6 className={classes.accountIDClass}>0x5524cD0a6 IDEA</h6>
              </div>
            </div>
            <Paper className={classes.gridPaddingSecond}>
              <div className={classes.flexInputButton}>
                <input
                  placeholder="Amount"
                  type="text"
                  className={classes.inputField}
                />
                <Button className={classes.buttonStyling}>Calculate</Button>
              </div>

              <p className={classes.currentBalancing}>
                Current balance may differ from last balance in the table due to
                rounding.
              </p>

              <div className={classes.flexContainer}>
                <div>
                  <p className={classes.pStyling}>IDEA Balance</p>
                  <h3>0.0</h3>
                  <p className={classes.pStyling}>$0</p>
                </div>
                <div>
                  <p className={classes.pStyling}>IDEA earned</p>
                  <h3>0.0</h3>
                  <p className={classes.pStyling}>$0</p>
                </div>
                <div>
                  <p className={classes.pStyling}>Average APR</p>
                  <h3>-</h3>
                  <p className={classes.pStyling}>More Info</p>
                </div>
                <div>
                  <p className={classes.pStyling}>IDEA price</p>
                  <h3>$1,717.92</h3>
                  <p className={classes.pStyling}>0.96577147</p>
                </div>
              </div>
            </Paper>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.gridPadding}>
            <div className={classes.flexContainer}>
              <div>
                <h4>Rewards History</h4>
              </div>
              <div className={classes.lineHei}>
                <p className={classes.pColoring}>See More</p>
              </div>
            </div>
            <div>
              <Table className={classes.root}>
                <TableHead>
                  <StyledTableRow>
                    <StyledTableCell>#</StyledTableCell>
                    <StyledTableCell>
                      Name <UnfoldMoreIcon className={classes.iconHeight} />
                    </StyledTableCell>
                    <StyledTableCell>
                      Card Tier{" "}
                      <UnfoldMoreIcon className={classes.iconHeight} />
                    </StyledTableCell>
                    <StyledTableCell>
                      No Stake <UnfoldMoreIcon className={classes.iconHeight} />
                    </StyledTableCell>
                    <StyledTableCell>
                      Market Cap{" "}
                      <UnfoldMoreIcon className={classes.iconHeight} />
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      Active Stake{" "}
                    </StyledTableCell>
                  </StyledTableRow>
                </TableHead>
                <TableBody>
                  {rewardsHistory.map((row) => (
                    <TableRow key={row.id}>
                      <StyledTableCell component="th" scope="row">
                        {row.id}
                      </StyledTableCell>
                      <StyledTableCell style={{ color: "#000" }}>
                        {row.name}
                      </StyledTableCell>
                      <StyledTableCell style={{ color: "#000" }}>
                        {row.cardTier}
                      </StyledTableCell>
                      <StyledTableCell style={{ color: "#000" }}>
                        {row.noStake}
                      </StyledTableCell>
                      <StyledTableCell style={{ color: "#000" }}>
                        {row.marketCap}
                      </StyledTableCell>
                      <StyledTableCell align="center" style={{ color: "#000" }}>
                        {row.activeStake}
                      </StyledTableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};
