import { makeStyles } from "@material-ui/core";
import { Banner, Register } from "layouts";
import React from "react";

const useStyles = makeStyles(() => ({
  root: {},
}));

// interface IProps {
//   className?: string;
// }

const Apply = (/*props: IProps*/) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* <Banner
        subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        title="Apply for IDO"
      /> */}
      <Register />
    </div>
  );
};

export default Apply;
