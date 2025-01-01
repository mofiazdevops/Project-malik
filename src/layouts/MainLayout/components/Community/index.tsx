import React from "react";
import { makeStyles } from "@material-ui/core";
import { Box, Container, Grid, Typography } from "@mui/material";
import telegram from "../../../../assets/pngs/SocialTelegram.png";
import twitter from "../../../../assets/pngs/SocialTwitter.png";
import instagram from "../../../../assets/pngs/SocialInstagram.png";
import facebook from "../../../../assets/pngs/SocialFacebook.png";
import color from "theme/colors";
import { FaLinkedinIn } from "react-icons/fa";

const useStyles = makeStyles((theme) => ({
  rootContainer: {
    paddingRight: "2.5rem",
    paddingLeft: "2.5rem",
    paddingBottom: "4rem",

    [theme.breakpoints.down("sm")]: {
      paddingRight: "1rem",
      paddingLeft: "1rem",
    },
  },
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: "1100px",
    width: "100%",
    mx: "auto",
    padding: theme.spacing(4),
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: "12px",
    boxShadow: "0px 6px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  },
  title: {
    fontSize: "44px",
    fontFamily: "SF Pro Display",
    fontWeight: 500,
    color: "#FFFFFF",
    marginBottom: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
      fontSize: "24px",
    },
  },
  subtitle: {
    fontSize: "20px",
    color: "#D3D3D6",
    fontFamily: "SF Pro Display",
    fontWeight: "normal",
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down("md")]: {
      fontSize: "18px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "14px",
    },
  },
  socialIcons: {
    display: "flex",
    justifyContent: "space-between",
    maxWidth: 600,
    alignItems: "center",
    marginRight: "auto",
    marginLeft: "auto",
    gap: theme.spacing(2),
    marginTop: 2,
  },
  icon: {
    color: "#fff",
    fontSize: "30px",
  },
  icon1: {
    borderRadius: "120%",
    background: "white",
  },
}));

export const Community: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.rootContainer}>
      <Container className={classes.root}>
        <div>
          <h2 className={classes.title}>Join our Community</h2>
          <p className={classes.subtitle}>
            Empowering visionary ideas with blockchain technology. <br />
            Join a decentralized network built for innovation.
          </p>
        </div>
        <div className={classes.socialIcons}>
          <a
            className={classes.icon1}
            href="https://www.linkedin.com/company/ideaology-io/"
            target="_blank"
            rel="noreferrer"
          >
            {/* <img src={telegram} alt="telegram" width={30} height={30} /> */}
            <FaLinkedinIn
              style={{ width: 33, height: 33, color: "black", padding: 6 }}
            />
          </a>
          <a
            className={classes.icon}
            href="https://twitter.com/ideaologyio"
            target="_blank"
            rel="noreferrer"
          >
            <img src={twitter} alt="twitter" width={25} height={25} />
          </a>
          <a
            className={classes.icon}
            href="https://www.instagram.com/ideaologyio/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={instagram} alt="instagram" width={25} height={25} />
          </a>
          <a
            className={classes.icon}
            href="https://www.facebook.com/ideaologytech/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={facebook} alt="facebook" width={25} height={25} />
          </a>
        </div>
      </Container>
    </div>
  );
};
