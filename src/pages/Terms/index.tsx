import React, { useEffect } from "react";
import useScript from "hooks/useScript";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme: any) => ({
  root: {
    marginTop: theme.custom.appHeaderHeight,
    color: "white",
  },
}));

const Terms = () => {
  useScript({
    url: "https://app.termly.io/embed-policy.min.js",
    id: "termly-jssdk",
  });

  const classes = useStyles();

  return (
    <div
      className={classes.root}
      data-id="a69d6516-c8cc-40bf-a086-e75254307ad0"
      data-type="iframe"
      name="termly-embed"
    ></div>
  );
};

export default Terms;
