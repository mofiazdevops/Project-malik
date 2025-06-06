import { Button, Container, makeStyles } from "@material-ui/core";
// import './index.css';
// import { AccountInfo, ConnectWalletButton } from "components";
// import { STORAGE_KEY_CONNECTOR } from "config/constants";
// import { useConnectedWeb3Context, useGlobal } from "contexts";
import { transparentize } from "polished";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import { MobileMenu } from "components";
import clsx from "clsx";
import { IDO_URL } from "config/constants";
import Popover from "@mui/material/Popover";
import { Divider, Menu, Stack } from "@mui/material";
import "./index.css";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useScroll } from "contexts/scrollContext";

const useStyles = makeStyles((theme: any) => ({
  root: {
    height: theme.custom.appHeaderHeight,
    position: "fixed",
    left: 0,
    right: 0,
    top: 0,
    boxShadow: `0px 1px 2px ${transparentize(0.9, theme.colors.black)}`,
    zIndex: 999,

    backgroundColor: "#081015",
  },
  container: {
    height: theme.custom.appHeaderHeight,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: `0 ${theme.spacing(4)}px`,
    [theme.breakpoints.down("sm")]: {
      padding: `0 ${theme.spacing(2)}px`,
      justifyContent: "center",
    },
  },
  buttonWrapperMiddle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  buttonWrapperRight: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
    [theme.breakpoints.down("md")]: {
      maxHeight: "75px",
      height: "auto",
    },
  },
  img: {
    height: `calc(${theme.custom.appHeaderHeight} / 2)`,
  },
  menuButtonText: {
    fontSize: theme.typography.button.fontSize,
    fontWeight: "normal",
    color: "#FFFFFF",
  },
  menuButton: {
    marginLeft: "5px",
    // width: "135px",
    height: "35px",
    fontSize: theme.typography.button.fontSize,
    borderRadius: "3px",
    display: "flex", // Ensures content inside aligns properly
    justifyContent: "flex-start !important", // Aligns text and endIcon to the left
    alignItems: "center", // Centers content vertically
    textAlign: "left",
    // padding: "11px 24px 10px 20px",
    [theme.breakpoints.down("md")]: {
      height: "auto",
      maxHeight: "75px",
    },
  },
  menuStakingButton: {
    marginRight: "5px",
    // width: "156px",
    height: "35px",
    // maxHeight: "75px",
    fontSize: theme.typography.button.fontSize,
    borderRadius: "3px",
    // padding: "11px 24px 10px 20px",
    background: "#FD4975",
    [theme.breakpoints.down("md")]: {
      height: "auto",
      maxHeight: "75px",
    },
  },
  noDecoration: {
    textDecoration: "none !important",
    position: "relative",
  },
  burger: {
    display: "none",

    [theme.breakpoints.down("sm")]: {
      display: "block",
      position: "absolute",

      color: "white",

      left: "27px",
    },
  },

  highLight: {
    height: "22px",
    width: "30px",
    background: "#DA5077",
    borderRadius: "0px 5px",
    margin: "0 auto",
    textAlign: "center",
    position: "absolute",
    bottom: "0",
    left: "50%",
    top: "-15px",
    transform: "translate(-50%, 0%)",
  },
  highLightLaunch: {
    height: "22px",
    width: "75px",
    background: "#DA5077",
    borderRadius: "0px 5px",
    margin: "0 auto",
    textAlign: "center",
    position: "absolute",
    bottom: "0",
    left: "50%",
    top: "-15px",
    transform: "translate(-50%, 0%)",
    animation: "$blinker 1.2s linear infinite",
  },
  "@keyframes blinker": {
    "50%": {
      opacity: 0,
    },
  },
  highLightText: {
    fontSize: "10px",
    color: "white",
  },
  space: {
    // marginLeft: "100%",
    width: "60px",
    // marginLeft: "auto",
    // marginRight: "auto",
  },
  button: {
    width: "120px",
    textAlign: "left",
    display: "block",
    backgroundColor: "#2b2b2b", // Background color on hover
    "&:hover": {
      backgroundColor: "#0c71bc", // Background color on hover
    },
  },
}));

interface IProps {
  className?: string;
}

export const Header = (props: IProps) => {
  const { scrollToSection } = useScroll();

  const classes = useStyles();
  const menuItems = [
    { link: "/", name: "Home" },
    {
      name: "Products",
      type: "dropdown",
      items: [
        {
          external: true,
          link: "http://Workaspro.com",
          name: "WorkAsPro Talent",
        },
      ],
    },
    {
      name: "Ecosystem", // Games section within Products
      type: "dropdown", // Nested dropdown for games
      items: [
        {
          name: "IdeaNetwork",
          link: "/IdeaNetwork",
        },
        {
          name: "Explorer",
          // link: "https://www.ideascan.io/",
        },
        {
          name: "IDEA Wallet",
          // link: "https://play.google.com/store/apps/details?id=com.IdeaologyStudio.RealPoolBallBilliardGames",
        },
        {
          link: "/newstaking",
          name: "Staking",
        },
        {
          link: "/swap",
          name: "Swap & Bridge ",
        },
      ],
    },
    {
      external: true,
      link: "https://ideaology-1.gitbook.io/ideaology-1/",
      name: "Documents",
    },
    {
      link: "/GrantProgram",
      name: "Grant Program",
    },
    {
      link: "/Ambassador",
      name: "Ambassadors",
    },
    // {
    //   link: "/blog",
    //   name: "Blogs",
    // },
  ];
  const menuItems12 = [
    { link: "/", name: "Home" },
    {
      external: true,
      name: "WorkAsPro Talent",
      link: "http://Workaspro.com",
    },
    {
      name: "IdeaNetwork",
      link: "/IdeaNetwork",
    },
    {
      external: true,
      name: "IDEASCAN 3.0",
      link: "https://www.ideascan.io/",
    },
    {
      name: "IDEA Wallet",
      link: "/CommingSoon2",
    },
    {
      link: "/newstaking",
      name: "Staking",
    },
    {
      link: "/swap",
      name: "Swap & Bridge",
    },
    {
      link: "/Ambassador",
      name: "Ambassadors",
    },
    {
      link: "/GrantProgram",
      name: "Grant Program",
    },
    {
      external: true,
      link: "https://ideaology-1.gitbook.io/ideaology-1/",
      name: "Documents",
    },
  ];

  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  // const [userIDAblance, setUserIDAblance] = useState<string>("0");

  // useEffect(() => {
  //     getIDAbalance();
  // }, [account]);

  // const getIDAbalance = async () => {
  //     if (!account || !provider) {
  //         const currentConnector = injected;
  //         setActivatingConnector(currentConnector);
  //         activate(injected);
  //         return;
  //     }

  //     const erc20Service = new ERC20Service(
  //         provider,
  //         account,
  //         process.env.REACT_APP_IDEA_CONTRACT_ADDRESS || ""
  //     );

  //     const balanceof = await erc20Service.getBalanceOf(account);
  //     const balance = BigNumber.from(balanceof).toString();
  //     setUserIDAblance(balance || "0");
  // };

  const handleMenuOpen = () => {
    setMenuOpen(true);
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
  };

  const gotoApp = (e: any) => {
    e.preventDefault();
    // if (parseInt(userIDAblance) < 10000) {
    //     dispatch({
    //         type: AppTypes.AlertModal,
    //         payload: {
    //             show: true,
    //             title: "Low Balance",
    //             body: "Your IDA balance is below 10000",
    //         },
    //     });
    // } else {
    window.open(`https://airdrop.ideaology.io/`, "_blank");
    // }
  };

  const gotoStaking = (e: any) => {
    e.preventDefault();
    // if (parseInt(userIDAblance) < 10000) {
    //     dispatch({
    //         type: AppTypes.AlertModal,
    //         payload: {
    //             show: true,
    //             title: "Low Balance",
    //             body: "Your IDA balance is below 10000",
    //         },
    //     });
    // } else {
    // window.open(`${IDO_URL}staking`, "_blank");
    window.open(`${IDO_URL}staking`, "_blank");
    // }
  };

  return (
    <div className={clsx(classes.root, props.className)}>
      {menuOpen && (
        <MobileMenu items={menuItems12} onMenuClose={handleMenuClose} />
      )}
      <Container className={classes.container} maxWidth="lg">
        <div className={classes.burger} onClick={handleMenuOpen}>
          <MenuIcon />
        </div>

        <a href="/">
          <img
            alt="logo"
            className={classes.img}
            src="/imgs/logo/logo-white.svg"
          />
        </a>

        <div className={classes.buttonWrapperMiddle}>
          {/* <SimpleMenu /> */}
          {menuItems.map((element, key) => {
            if (element.type === "dropdown" && element.name === "Products") {
              return (
                <div key={key} className="dropdown">
                  <Button
                    className={classes.menuButtonText}
                    color="secondary"
                    size="large"
                    endIcon={<ArrowDropDownIcon />} // Arrow icon for dropdown
                  >
                    {element.name}
                  </Button>
                  <div
                    className="dropdownContent"
                    style={{
                      width: "130px",
                      height: "auto",
                    }}
                  >
                    {element.items.map((subItem, subKey) => {
                      if (
                        subItem.type === "dropdown" &&
                        subItem.name === "Games"
                      ) {
                        return (
                          <Link
                            key={subKey}
                            to={subItem.link}
                            className="dropdown11 gamesDropdown"
                          >
                            <Button
                              className={`${classes.menuButtonText} ${classes.space}`}
                              color="secondary"
                              size="large"
                              // endIcon={<ArrowDropDownIcon />}
                            >
                              {subItem.name}
                            </Button>
                          </Link>
                        );
                      } else {
                        return (
                          <a
                            key={subKey}
                            className={classes.noDecoration}
                            href={subItem.link}
                            rel="noreferrer"
                            target={subItem.external ? "_blank" : "_self"}
                          >
                            <Button
                              classes={{
                                text: classes.menuButtonText,
                              }}
                              color="secondary"
                              size="large"
                            >
                              {subItem.name}
                            </Button>
                          </a>
                        );
                      }
                    })}
                  </div>
                </div>
              );
            } else if (
              element.type === "dropdown" &&
              element.name === "Ecosystem"
            ) {
              return (
                <div key={key} className="dropdown13">
                  <Button
                    className={classes.menuButtonText}
                    color="secondary"
                    size="large"
                    endIcon={<ArrowDropDownIcon />} // Arrow icon for dropdown
                  >
                    {element.name}
                  </Button>
                  <div
                    className="dropdownContent13"
                    style={{
                      width: "120px",
                      height: "200%",
                      textAlign: "left",
                    }}
                  >
                    {element.items.map((subItem, subKey) => {
                      if (
                        subItem.type === "dropdown" &&
                        subItem.name === "Games"
                      ) {
                        return (
                          <div
                            key={subKey}
                            className="dropdown11 gamesDropdown"
                          >
                            <Button
                              className={classes.menuButtonText}
                              color="secondary"
                              size="large"
                            >
                              {subItem.name}
                            </Button>
                            <div className="dropdownContent2">
                              {subItem.items.map((game, gameKey) => (
                                <Link
                                  key={gameKey}
                                  className={classes.noDecoration}
                                  to={game.link}
                                  rel="noreferrer"
                                  target="_blank"
                                >
                                  <Button
                                    classes={{
                                      text: classes.menuButtonText,
                                    }}
                                    color="secondary"
                                    size="large"
                                  >
                                    <img
                                      src={game.img}
                                      alt={game.name}
                                      style={{
                                        width: "30px",
                                        marginRight: "10px",
                                      }}
                                    />
                                    {game.name}
                                  </Button>
                                </Link>
                              ))}
                            </div>
                          </div>
                        );
                      } else {
                        return (
                          <div key={subKey}>
                            {subItem.name === "Explorer" ? (
                              <Button
                                onClick={() => scrollToSection("section-1")}
                                classes={{
                                  text: classes.menuButtonText,
                                  root: classes.button,
                                }}
                                color="secondary"
                                size="large"
                                style={{
                                  width: "120px",
                                  textAlign: "left",
                                  display: "block",
                                }}
                              >
                                {subItem.name}
                              </Button>
                            ) : subItem.name === "IDEA Wallet" ? (
                              <Button
                                onClick={() => scrollToSection("section-2")}
                                classes={{
                                  text: classes.menuButtonText,
                                  root: classes.button,
                                }}
                                color="secondary"
                                size="large"
                              >
                                {subItem.name}
                              </Button>
                            ) : (
                              <Link
                                className={classes.noDecoration}
                                to={subItem.link}
                                rel="noreferrer"
                                target={subItem.external ? "_blank" : "_self"}
                              >
                                <Button
                                  classes={{
                                    text: classes.menuButtonText,
                                  }}
                                  color="secondary"
                                  size="large"
                                >
                                  {subItem.name}
                                </Button>
                              </Link>
                            )}
                          </div>
                        );
                      }
                    })}
                  </div>
                </div>
              );
            }

            // Handle other menu items like Staking, Voting, etc.
            else if (element.link) {
              return element.external ? (
                <a
                  className={classes.noDecoration}
                  href={element.link}
                  key={element.name}
                  rel="noreferrer"
                  target={element.external ? "_blank" : "_self"}
                >
                  <Button
                    classes={{
                      text: classes.menuButtonText,
                    }}
                    color="secondary"
                    size="large"
                  >
                    {element.name}
                  </Button>
                </a>
              ) : (
                <Link
                  className={classes.noDecoration}
                  key={element.name}
                  to={element.link}
                  target={element.external ? "_blank" : "_self"}
                >
                  <Button
                    classes={{
                      text: classes.menuButtonText,
                    }}
                    color="secondary"
                    size="large"
                  >
                    {element.name}
                  </Button>
                </Link>
              );
            }
          })}
        </div>
        <div className={classes.buttonWrapperRight}>
          {/* Connect MetaMask */}
        </div>
      </Container>
    </div>
  );
};

export const gameItems = [
  {
    name: "Save the Doge",
    img: "games/dog.png",
    link: "https://play.google.com/store/apps/details?id=com.mms.savethepuppies.rescuedog.puppygames",
  },
  {
    name: "Pool Master Billiard",
    img: "games/pool.png",
    link: "https://play.google.com/store/apps/details?id=com.IdeaologyStudio.RealPoolBallBilliardGames",
  },
];

export function SimpleMenu(props: any) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const classes = useStyles();

  const { menuName } = props;

  function handleClick(event: any) {
    if (anchorEl !== event.currentTarget) {
      setAnchorEl(event.currentTarget);
    }
  }

  function handleClose() {
    setAnchorEl(null);
  }

  const [value, setValue] = React.useState(0);

  return (
    <div>
      <div
        onMouseEnter={handleClick}
        className={classes.noDecoration}
        style={{
          width: "6rem",
          position: "relative",
          bottom: "18px",
          // right: "20px",
        }}
      >
        <div className={classes.highLight}>
          <span className={classes.highLightText}>New</span>
          <Typography sx={{ color: "white" }}>Games</Typography>
        </div>
      </div>
      <Menu
        sx={{ marginTop: "2rem" }}
        // getcontentanchorel={null}
        keepMounted
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        MenuListProps={{ onMouseLeave: handleClose }}
      >
        <TabPanel value={value} index={0}>
          <div
            style={{
              // margin: "1rem",
              minWidth: "300px",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            {gameItems.map((item: any, i: any) => (
              // eslint-disable-next-line react/jsx-no-target-blank
              <a
                target="_blank"
                href={item.link}
                key={i}
                style={{ color: "black", textDecoration: "none" }}
              >
                <Stack direction="row" gap="10px" alignItems="center">
                  <img
                    // src="https://picsum.photos/40/40"
                    src={item.img}
                    style={{ borderRadius: "5px" }}
                    alt="game icon"
                  />
                  <Typography>{item.name}</Typography>
                </Stack>
              </a>
            ))}
          </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <div style={{ minWidth: "300px" }}>
            <a
              target="_blank"
              href="https://manialands.com"
              style={{ color: "black", textDecoration: "none" }}
              rel="noreferrer"
            >
              <Stack direction="row" gap="10px" alignItems="center">
                <img
                  src="games/manialands.png"
                  style={{ borderRadius: "5px", width: "3rem" }}
                  alt="app icon"
                />
                <Typography>Manialands</Typography>
              </Stack>
            </a>
          </div>
        </TabPanel>
      </Menu>
    </div>
  );
}

function TabPanel(props: any) {
  const { children, index, value, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
