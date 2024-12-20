import React, { useState } from 'react';
import { Button, Grid, Paper, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme: any) => {
    return {
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
    };
});
const StakeButton = (props:any) => {
    const classes: any = useStyles();
    const { onSubmit, text, loading = false, disabled, newStaking }= props;
    return (
      <button className={classes.buttonStyling} onSubmit={onSubmit} onClick={newStaking} disabled={disabled}>
        {!loading ? text : 'Loading'}
      </button>
    );
  };
  
  export default StakeButton;