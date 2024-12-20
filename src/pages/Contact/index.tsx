import { makeStyles } from "@material-ui/core";
import { Banner, ContactUs } from "layouts";
import React from "react";
import clsx from "clsx";

const useStyles = makeStyles(() => ({
  root: {},
}));

interface IProps {
  className?: string;
}

const Contact = (props: IProps) => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, props.className)}>
      <Banner subTitle="" title="Contact us" />
      <ContactUs />
    </div>
  );
};

export default Contact;
