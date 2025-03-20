import React from "react";
import { Box, LinearProgress, makeStyles } from "@material-ui/core";
import { CircularProgress } from "@mui/material";

const useStyles = makeStyles((theme: any) => ({
  root: {
    alignItems: "center",
    backgroundColor: theme.colors.transparent,
    display: "flex",
    flexDirection: "column",
    height: "100%",
    justifyContent: "center",
    minHeight: "100%",
    padding: theme.spacing(3),
  },
}));

export const LoadingScreen = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh", // Full screen height
        }}
      >
        <CircularProgress sx={{ color: "white" }} />
      </Box>
    </div>
  );
};
