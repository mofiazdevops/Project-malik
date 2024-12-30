import { Button, Hidden, Typography, makeStyles } from "@material-ui/core";
import React, { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import CloseIcon from "@material-ui/icons/Close";
import clsx from "clsx";
import { IDO_URL } from "config/constants";
import { SimpleMenu, gameItems } from "layouts";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    justifyContent: "center",

    height: "100vh",
    backgroundColor: "#0B1322",
  },
  container: {
    position: "relative",

    width: "312px",

    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  closeIcon: {
    display: "block",
    position: "absolute",

    color: "white",

    top: "25px",
    left: "5px",
  },
  logo: {
    marginTop: "28px",
  },
  logoImg: {
    width: "127px",
  },
  navWrapper: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",

    marginTop: "36px",
  },
}));

const useItemStyles = makeStyles(() => ({
  root: {},

  menuButtonText: {
    fontSize: "16px",
    fontWeight: "normal",
    color: "#9FD2F9",
  },
  menuButton: {
    width: "120px",
    height: "40px",
    fontSize: "16px",
    borderRadius: "3px",
    padding: "11px 24px 10px 20px",
  },
  noDecoration: {
    textDecoration: "none !important",
  },
  menuItem: {
    width: "312px",
    height: "40px",
    marginBottom: "8px",
    order: 2,
  },
  button: {
    order: 1,
    marginBottom: "36px",
  },
  active: {
    position: "relative",

    "& span.MuiButton-label": {
      color: "#FFFFFF",
    },

    "&::after": {
      content: "''",
      width: "32px",
      height: "4px",
      background: "#0C71BC",

      position: "absolute",
      bottom: "4px",
      left: "calc(50% - 16px)",
    },
  },
}));

interface IMenuItem {
  external?: boolean;
  link?: string;
  name: string;
  onClick?: () => void;
}

interface IItemProps {
  className?: string;
  item: IMenuItem;
  active?: boolean;
}

export const MobileMenuItem = (props: IItemProps) => {
  const classes = useItemStyles();

  const { active, item } = props;

  if (item.link) {
    if (item.external) {
      return (
        <a
          className={clsx(classes.noDecoration, classes.menuItem, {
            [classes.active]: active,
          })}
          href={item.link}
        >
          <Button
            classes={{ text: classes.menuButtonText }}
            color="secondary"
            fullWidth={true}
          >
            {item.name}
          </Button>
        </a>
      );
    } else {
      return (
        <Link
          className={clsx(classes.noDecoration, classes.menuItem, {
            [classes.active]: active,
          })}
          to={item.link}
        >
          <Button
            classes={{ text: classes.menuButtonText }}
            color="secondary"
            fullWidth={true}
          >
            {item.name}
          </Button>
        </Link>
      );
    }
  }
  return (
    <Button
      className={clsx(classes.menuItem, classes.button)}
      classes={{ root: classes.menuButton }}
      color="primary"
      disableElevation
      href={"https://airdrop.ideaology.io/"}
      onClick={item.onClick}
      variant="contained"
    >
      {item.name}
    </Button>
  );
};

interface IProps {
  className?: string;
  onMenuClose: (event: React.MouseEvent<HTMLElement> | undefined) => void;
  items: IMenuItem[];
}

export const MobileMenu = (props: IProps) => {
  const { onMenuClose } = props;
  const classes = useStyles();
  const classes1 = useItemStyles();

  const handleMenuClose = (event: React.MouseEvent<HTMLElement>) => {
    onMenuClose(event);
  };

  const location = useLocation();
  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      onMenuClose(undefined);
    }
  }, [location.pathname, onMenuClose]);

  return (
    <Hidden smUp>
      <div className={classes.root}>
        <div className={classes.container}>
          <div className={classes.closeIcon} onClick={handleMenuClose}>
            <CloseIcon />
          </div>
          <div className={classes.logo}>
            <a href="/">
              <img
                alt="logo"
                className={classes.logoImg}
                src="/imgs/logo/logo-white.svg"
              />
            </a>
          </div>
          <div className={classes.navWrapper}>
            {props.items &&
              [...props.items].map((item: IMenuItem) => (
                <MobileMenuItem
                  active={item.link === location.pathname}
                  item={item}
                  key={item.name}
                />
              ))}

            {/* <SimpleMenu /> */}
          </div>
          {/* <div>
            <p style={{ color: "white" }}>Games</p>
          </div> */}
          {/* {gameItems &&
            [...gameItems].map((item: IMenuItem, i: any) => (
              <a href={item.link} key={i}>
                <Button
                  classes={{ text: classes1.menuButtonText }}
                  color="secondary"
                  fullWidth={true}
                >
                  {item.name}
                </Button>
              </a>
            ))} */}
          {/* <div>
            <p style={{ color: "white" }}>MetaVerse</p>
          </div> */}
          <a href="https://www.manialands.com">
            <Button
              classes={{ text: classes1.menuButtonText }}
              color="secondary"
              fullWidth={true}
            >
              Manialands
            </Button>
          </a>
        </div>
      </div>
    </Hidden>
  );
};
