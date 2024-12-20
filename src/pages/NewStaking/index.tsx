import React, { useState } from "react";
import { Grid, Paper, makeStyles } from "@material-ui/core";
import { Rewards, Staking, Wrap } from "components/StakingComponents";
import { faqs } from "utils/stake-questions";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme: any) => {
  return {
    stakingPage: {
      marginTop: theme.spacing.unit * 12,
      maxWidth: "1200px",
      margin: "auto",
      overflow: "hidden",
    },
    topNav: {
      width: "70%",
      margin: "auto",
      borderRadius: "5px",
      backgroundColor: "#F6F6F6",
      overflow: "hidden",
      "& button": {
        float: "left",
        textAlign: "center",
        padding: "14px 16px",
        textDecoration: "none",
        border: "none",
        fontSize: "17px",
        cursor: "pointer",
        "&:last-child": {
          float: "right",
          color: "#fff",
          backgroundColor: "#0C71BC",
          cursor: "auto",
          [theme.breakpoints.down("sm")]: {
            display: "none",
          },
        },
        "&:hover": {
          backgroundColor: "#0C71BC",
          color: "#fff",
        },
      },
      [theme.breakpoints.down("sm")]: {
        width: "auto",
        "& button": {
          float: "left",
          "&:last-child": {
            float: "inline-start",
          },
        },
      },
    },
    content: {
      display: "block",
    },
    activeButton: {
      backgroundColor: "#0C71BC",
      color: "#fff",
    },
    nonActiveButton: {
      backgroundColor: "#F6F6F6",
      color: "#000",
    },
    showContent: {
      display: "block",
    },
    hiddenContent: {
      display: "none",
    },
    gridPadding: {
      marginTop: theme.spacing.unit * 4.5,
      borderRadius: "14px",
      padding: "20px",
      marginRight: "1rem",
      background: "#fff",
      color: "white",
      margin: "auto",
      boxShadow: "0 0 10px gray",
      marginBottom: '1rem',
      [theme.breakpoints.down("sm")]: {
        marginRight: "0px",
        marginTop: "0",
        marginBottom: "1rem",
      },
    },
    faqs: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: "20px",
      fontSize: "15px",
      color: "##1d1d36",
      background: "#0C71BC",
      padding: "8px",
      borderRadius: "10px",
      lineHeight: "1.6",
      cursor: "pointer",
    },
    gridAlignment: {
      paddingLeft: "1rem",
      [theme.breakpoints.down("sm")]: {
        margin: "auto",
        justifyContent: "center",
        paddingLeft: "0px",
      },
    },
    flexOne: {
      marginTop: theme.spacing.unit * 12,
      maxWidth: "1200px",
      margin: "auto",
      overflow: "hidden",
      display: "flex",
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    gridTest: {
      borderRadius: "14px",
      padding: "20px 40px",
      boxShadow: "0 0 10px gray",
      background: "#fff",
      color: "#000",
      marginTop: "5rem",
      marginBottom: "5rem",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",

      [theme.breakpoints.down("sm")]: {
        margin: "auto",
        justifyContent: "center",
        alignItems: "center",
      },
    },
    textCenter: {
      textAlign: "center",
    },
    spanTag: {
      fontWeight: "bolder",
      textDecoration: "underline",
    },
    createVest: {
      backgroundColor: "#0C71BC",
      border: "none",
      color: "#fff",
      fontWeight: "bold",
      padding: "15px 32px",
      textAlign: "center",
      display: "inline-block",
      fontSize: "16px",
      textTransform: "uppercase",
      margin: "4px 2px",
      cursor: "pointer",
      alignItems: "center",
      textDecoration: "none",
    },
  };
});

const NewStaking = () => {
  const [toggleState, setToggleState] = useState(1);
  const [isTrue, isSetTrue] = useState(true);

  const toggleTab = (index: any) => {
    setToggleState(index);
  };

  const classes: any = useStyles();
  return isTrue ? (
    <div className={classes.stakingPage}>
      <div className={classes.topNav}>
        {/* float left */}
        <button
          className={
            toggleState === 1 ? classes.activeButton : classes.nonActiveButton
          }
          onClick={() => toggleTab(1)}
        >
          Stake
        </button>
        {/* <button
          className={
            toggleState === 2 ? classes.activeButton : classes.nonActiveButton
          }
          onClick={() => toggleTab(2)}
        >
          Wrap
        </button>
        <button
          className={
            toggleState === 3 ? classes.activeButton : classes.nonActiveButton
          }
          onClick={() => toggleTab(3)}
        >
          Rewards
        </button> */}
        {/* float right */}
        <button>IDEA</button>
      </div>

      <div className={classes.contents}>
        <div
          className={
            toggleState === 1 ? classes.showContent : classes.hiddenContent
          }
        >
          <Grid container spacing={1} className={classes.gridAlignment}>
            <Grid item xs={10} md={8}>
              <Staking />
            </Grid>
            <Grid xs={10} sm={6} md={4}>
              <Paper className={classes.gridPadding}>
                <div>
                  {faqs.map((faq: any) => (
                    <div key={faq.id} className={classes.faqs}>
                      {/* <a target='_blank' rel="noreferrer" href={`https://www.google.com/search?q=${faq.Question}`}>
                        {faq.Question}
                      </a> */}
                      {faq.Question}
                      <ArrowDropDownIcon />
                    </div>
                  ))}
                </div>
              </Paper>
            </Grid>
          </Grid>
        </div>

        <div
          className={
            toggleState === 2 ? classes.showContent : classes.hiddenContent
          }
        >
          <Grid container spacing={1} className={classes.gridAlignment}>
            <Grid item xs={10} md={8}>
              <Wrap />
            </Grid>
            <Grid xs={10} sm={6} md={4}>
              <Paper className={classes.gridPadding}>
                <div>
                  {faqs.map((faq: any) => (
                    <div key={faq.id} className={classes.faqs}>
                      {faq.Question}
                      <ArrowDropDownIcon />
                    </div>
                  ))}
                </div>
              </Paper>
            </Grid>
          </Grid>
        </div>

        <div
          className={
            toggleState === 3 ? classes.showContent : classes.hiddenContent
          }
        >
          <Rewards />
        </div>
      </div>
    </div>
  ) : (
    <div className={classes.flexOne}>
      <div className={classes.gridTest}>
        <h1 className={classes.textCenter}>Staking</h1>
        <p>
          Staking Will be available in &quot;
          <span className={classes.spanTag}>3</span>&quot; Days
        </p>

        <Link to="/" className={classes.createVest}>
          {" "}
          Go Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NewStaking;
