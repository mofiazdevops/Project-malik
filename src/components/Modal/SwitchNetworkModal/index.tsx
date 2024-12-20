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
    width: 400,
    padding: theme.spacing(4),
    userSelect: `none`,
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
  network: string;
}

export const SwitchNetworkModal = (props: IProps) => {
  const classes = useStyles();
  // const commonClasses = useCommonStyles();
  const { network, onClose, visible } = props;

  const { dispatch } = useAppContext();

  const toHex = (num: string) => {
    const val = Number(num);
    return "0x" + val.toString(16);
  };

  const handleOK = async () => {
    const __window: any = window;

    try {
      await __window?.ethereum?.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: toHex(network) }],
      });
    } catch (error: any) {
      if (error?.message?.includes("Please wait")) {
        dispatch({
          type: AppTypes.AlertModal,
          payload: {
            show: true,
            title: "MetaMask",
            body: "Request already in progress. Open metamask and switch network",
          },
        });
      }
    }

    dispatch({
      type: AppTypes.SwitchNetworkModal,
      payload: { show: false, network: "" },
    });
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
          {"MetaMask" || props.title}
        </Typography>
        <div>
          <p>{"You're connected to an unsupported network." || props.body}</p>
        </div>
        <div className={classes.buttonDiv}>
          <Button
            className={clsx(classes.button, classes.button)}
            color="primary"
            disableElevation
            onClick={handleOK}
            variant="contained"
          >
            Switch Network To{" "}
            {network === "1"
              ? "Ethereum"
              : (network === "137" || network === "80001")
              ? "Polygon"
              : "BNB"}
          </Button>
        </div>
      </div>
    </Modal>
  );
};
