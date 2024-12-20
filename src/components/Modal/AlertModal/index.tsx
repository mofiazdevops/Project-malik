import { Button, Modal, Typography, makeStyles } from "@material-ui/core";
import React from "react";
import useCommonStyles from "styles/common";
import clsx from "clsx";

import { AppTypes } from "store/types";
import { useAppContext } from "contexts";

const useStyles = makeStyles((theme: any) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    [theme.breakpoints.down("xs")]: {
      alignItems: "flex-end",
    },
  },
  content: {
    outline: "none",
    backgroundColor: "white",
    width: "auto",
    minWidth: "400px",
    padding: theme.spacing(4),
    // userSelect: `none`,
    borderRadius: "6px",

    [theme.breakpoints.down("xs")]: {
      width: "328px",
    },
  },
  modalShadow: {
    boxShadow: "0px 16px 24px -12px rgba(28, 37, 53, 0.24)",
  },
  title: {
    color: "#1C2535",
    fontSize: 24,
    lineHeight: "32px",
  },
  buttonDiv: {
    display: "flex",
    flexDirection: "row-reverse",

    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
  button: {
    width: 120,
    height: "40px",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  gap: {
    width: "16px",
    height: "16px",
  },
}));

interface IProps {
  visible: boolean;
  onClose: () => void;
  body?: string;
  title?: string;
}

export const AlertModal = (props: IProps) => {
  const classes = useStyles();
  // const commonClasses = useCommonStyles();
  const { onClose, visible } = props;

  const { dispatch } = useAppContext();

  const handleOK = () => {
    dispatch({ type: AppTypes.AlertModal, payload: { show: false } });
  };

  return (
    <Modal
      className={clsx(classes.modal, classes.modalShadow)}
      disableBackdropClick
      onClose={onClose}
      open={visible}
    >
      <div className={classes.content}>
        <Typography className={classes.title} component="div">
          {props.title}
        </Typography>
        <div>
          <p>{props.body}</p>
        </div>
        <div className={classes.buttonDiv}>
          <Button
            className={clsx(classes.button, classes.button)}
            color="primary"
            disableElevation
            onClick={handleOK}
            variant="contained"
          >
            OK
          </Button>
        </div>
      </div>
    </Modal>
  );
};
