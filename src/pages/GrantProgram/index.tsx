import React from "react";
import { makeStyles } from "@material-ui/core";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/UploadFile";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#081015",
  },
  rootContainer: {
    fontFamily: "SF Pro Display",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: "auto",
    marginRight: "auto",
    paddingTop: "10%",
    maxWidth: "1300px",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
      paddingTop: "15%",
    },
  },
  container1: {
    maxWidth: 450,
    margin: "auto",
    // padding: 24,
    paddingTop: "6%",
    color: "white",
    height: "730px",
    [theme.breakpoints.down("sm")]: {
      maxWidth: 350,
      height: "430px",
      paddingTop: "3%",
    },
  },
  formContainer: {
    maxWidth: 400,
    margin: "auto",
    padding: "24px 12px",
    backgroundColor: "#000D17",
    borderRadius: 16,
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
    color: "white",
    border: "1px solid rgba(255, 255, 255, 0.4)",
    [theme.breakpoints.down("sm")]: {
      maxWidth: 350,
    },
  },
  title: {
    textAlign: "center",
    marginBottom: "24px",
    fontSize: 24,
    background: "linear-gradient(90deg, #FFFFFF, #3CADFF)",
    backgroundClip: "text",
    color: "transparent",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  para: {
    fontFamily: "SF Pro Display",
    fontSize: 20,
    textAlign: "left",
    fontWeight: "normal",
    [theme.breakpoints.down("sm")]: {
      fontSize: 16,
    },
  },
  title1: {
    textAlign: "left",
    marginBottom: "24px",
    fontSize: 48,
    fontFamily: "SF Pro Display",
    fontWeight: 500,
    background: "linear-gradient(90deg, #FFFFFF, #3CADFF)",
    backgroundClip: "text",
    color: "transparent",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    [theme.breakpoints.down("sm")]: {
      fontSize: 24,
    },
  },
  input: {
    width: "100%",
    padding: "12px",
    backgroundColor: "transparent",
    borderRadius: 8,
    color: "white",
    fontSize: 16,
    outline: "none",
    border: "1px solid white",
  },
  button: {
    textTransform: "none",
    backgroundColor: "#49A8FF",
    height: "49px",
    fontFamily: "SF Pro Display",
    "&:hover": {
      backgroundColor: "#0056b3",
    },
  },
  inputContainer: {
    display: "flex",
    flexDirection: "column",
    // alignItems: "center",
    // justifyContent: "space-between",
    backgroundColor: "transparent",
    border: "1px solid white",
    borderRadius: 8,
    padding: "8px 8px",
    color: "white",
    marginTop: "8px",
  },
  input1: {
    flexGrow: 1,
    backgroundColor: "transparent",
    border: "none",
    outline: "none",
    color: "white",
    fontSize: 16,
    marginRight: 8,
    width: "326px",
    height: "108px",
    // padding: "8px", // Adds padding for better spacing
    resize: "none", // Prevents resizing of the textarea
    overflow: "hidden", // Hides the scrollbar
    display: "block",
    textAlign: "left", // Ensures text aligns to the left
    verticalAlign: "top", // Aligns text vertically to the top
    lineHeight: "1.5",
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      width: "280px",
      height: "128px",
    },
  },
  uploadButton: {
    position: "absolute",
    width: "94px",
    bottom: "4px",
    left: "72%",
    [theme.breakpoints.down("sm")]: {
      left: "67%",
    },
  },
}));

const GrantProgram = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.rootContainer}>
        <div className={classes.container1}>
          <p className={classes.title1}>Grant Program</p>
          <p className={classes.para}>
            Empowering Innovators to Build on the Future of Blockchain. <br />{" "}
            <br />
            The IDEA 3.0 Network Grant Program is designed to support
            developers, entrepreneurs, researchers, and creators who aim to
            contribute to the growth and innovation of the IDEA 3.0 ecosystem.
            By providing funding, resources, and mentorship, the program ensures
            that impactful projects have the support they need to succeed.
          </p>
        </div>
        {/* <div> */}
        <Box className={classes.formContainer}>
          <h1 className={classes.title}>Apply For Grant Program</h1>

          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography
                sx={{
                  my: 1,
                }}
              >
                Project Name
              </Typography>
              <input
                type="text"
                placeholder="Enter Project Name"
                className={classes.input}
              />
            </Grid>

            <Grid item xs={12}>
              <Typography
                sx={{
                  my: 1,
                }}
              >
                Required Funding Amount
              </Typography>
              <input
                type="number"
                placeholder="Enter Required Funding Amount"
                className={classes.input}
              />
            </Grid>

            <Grid item xs={12}>
              <Typography
                sx={{
                  my: 1,
                }}
              >
                Email
              </Typography>
              <input
                type="email"
                placeholder="Enter Your Email"
                className={classes.input}
              />
            </Grid>

            <Grid item xs={12}>
              <Box className={classes.inputContainer}>
                <textarea
                  placeholder="Enter Your Project Description or Upload Documents"
                  className={classes.input1}
                />
                <Button
                  variant="contained"
                  startIcon={
                    <CloudUploadIcon sx={{ fontSize: 12, color: "white" }} />
                  }
                  className={classes.uploadButton}
                  sx={{
                    display: "flex",
                    aliginItems: "center",
                    backgroundColor: "#19252E",
                    paddingLeft: "3px",
                    paddingRight: "3px",
                    "&:hover": {
                      backgroundColor: "#555", // Apply hover background color directly
                    },
                  }}
                >
                  Upload
                </Button>
              </Box>
            </Grid>

            {/* <Grid
              item
              xs={12}
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <Button variant="contained" className={classes.button}>
                Upload
              </Button>
            </Grid> */}

            <Grid item xs={12}>
              <Button fullWidth variant="contained" className={classes.button}>
                Apply
              </Button>
            </Grid>
          </Grid>
        </Box>
        {/* </div> */}
      </div>
    </div>
  );
};

export default GrantProgram;
