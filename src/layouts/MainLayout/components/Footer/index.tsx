import { Container, makeStyles } from "@material-ui/core";
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import certikSVG from "assets/svgs/certik.svg";
import useCommonStyles from "styles/common";
import { IDO_URL } from "config/constants";
import emailjs from "emailjs-com";
import { useSnackbar } from "notistack";

const useStyles = makeStyles((theme: any) => ({
  root: {
    background: "#081015",
    textAlign: "center",
    paddingBottom: "48px",
  },
  container: {},
  logo: {
    width: "142px",
  },
  listWrapper: {
    paddingTop: "64px",
    display: "flex",
    justifyContent: "space-between",
    color: "white",
    textAlign: "left",
    maxWidth: "1200px",
    width: "95%",
    marginLeft: "auto",
    marginRight: "auto",

    aliginItems: "center",

    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
    // [theme.breakpoints.down("xs")]: {
    //   flexWrap: "wrap",
    //   width: "312px",
    //   marginLeft: "auto",
    //   marginRight: "auto",
    // },
  },
  listWrapper1: {
    display: "flex",
    justifyContent: "space-between",
    maxWidth: "600px",
    width: "100%",

    [theme.breakpoints.down("sm")]: {
      width: "80%",
      marginLeft: "auto",
      marginRight: "auto",
    },
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      // width: "80%",
    },
  },
  listWrapper2: {
    display: "flex",
    justifyContent: "space-between",
    maxWidth: "580px",
    width: "100%",
    marginLeft: "3%",

    [theme.breakpoints.down("sm")]: {
      width: "80%",
      marginTop: "10%",
      // marginLeft: "10px",
      marginLeft: "auto",
      marginRight: "auto",
    },
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      width: "80%",
    },
  },
  menuTitle: {
    fontSize: 20,
    fontFamily: " SF Pro Display",
    fontWeight: 700,
    [theme.breakpoints.down("md")]: {
      fontSize: "18px",
    },
  },
  menuList: {
    marginTop: 15,
  },
  menuItem: {
    padding: "2px 0px 2px 0px",
  },
  menuItemLink: {
    textDecoration: "none",
    color: "#cdd4df",
    fontSize: 14,
  },
  copyright: {
    color: "#cdd4df",
    fontSize: 12,
    lineHeight: "20px",
  },
  socialLogo: {
    height: 27,
    marginRight: 20,
  },
  full: {
    [theme.breakpoints.down("xs")]: {
      flexBasis: "100%",
    },
  },
  half: {
    paddingLeft: "5px",
    paddingRight: "5px",

    [theme.breakpoints.down("xs")]: {
      flexBasis: "50%",
      marginTop: "32px",
    },
  },
  auditWrapper: {
    [theme.breakpoints.down("xs")]: {
      marginTop: "32px",
    },
  },

  certikWrapper: {
    color: "white",
    fontSize: "14px",
    lineHeight: "24px",
  },
  texthead: {
    width: 213,
    fontSize: "24px",
    fontFamily: " SF Pro Display",
    fontWeight: 700,
    lineHeight: "27px",
    [theme.breakpoints.down("md")]: {
      fontSize: "18px",
    },
  },
  textpar: {
    width: 350,
    fontSize: " 15px",
    fontFamily: " SF Pro Display",
    fontWeight: 400,
    lineHeight: "27px",
    [theme.breakpoints.down("md")]: {
      fontSize: "12px",
      width: 300,
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "12px",
      width: 270,
    },
  },
  containerStyle: {
    position: "relative", // Set the container as the reference for absolute positioning
    width: "100%",
    maxWidth: "374px",
    padding: "8px",
    backgroundColor: "#08131F", // Dark background
    borderRadius: "18px",
    marginRight: 5,
    [theme.breakpoints.down("sm")]: {
      width: "80%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      padding: "4px",
    },
  },

  inputStyle: {
    width: "100%", // Input spans the container width
    paddingTop: "10px",
    paddingBottom: "10px",
    paddingLeft: "8px",
    paddingRight: "94px",
    fontSize: "16px",
    backgroundColor: "transparent",
    border: "none", // Optional input border
    borderRadius: "14px",
    outline: "none",
    color: "#C9D1D9", // Text color
    fontFamily: "SF Pro Display",
    [theme.breakpoints.down("xs")]: {
      paddingRight: "104px",
    },
  },

  buttonStyle: {
    position: "absolute", // Position the button over the input
    right: "10px", // Distance from the right edge of the container
    top: "50%", // Center vertically
    transform: "translateY(-50%)", // Adjust for exact vertical centering
    padding: "8px 18px",
    fontSize: "14px",
    backgroundColor: "transparent",
    color: "#FFFFFF",
    border: "2px solid #58A6FF",
    borderRadius: "14px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    fontFamily: "SF Pro Display",
    [theme.breakpoints.down("xs")]: {
      padding: "6px 20px",
      fontSize: "12px",
    },
  },
}));

const companyItems = [
  {
    name: "IdeaNetwork",
    link: "/IdeaNetwork",
  },
  {
    external: true,
    link: "http://Workaspro.com",
    name: "WorkAsPro Talent",
  },
  {
    link: "https://www.ideascan.io/",
    name: "IDEA Explorer",
  },
  {
    // link: "/blog",
    link: "/CommingSoon2",
    name: "IDEA Wallet",
  },
  {
    link: "/newstaking",
    name: "Staking",
  },
  {
    link: "/swap",
    name: "Swap & Bridge",
  },
];

const helpItems = [
  {
    link: "/contact",
    name: "Contact us",
  },
  // {
  //   link: "/terms",
  //   name: "Terms",
  // },
  // {
  //     link: "/privacy",
  //     name: "Privacy",
  // },
  // {
  //   link: "/staking-vesting",
  //   name: "Staking & Vesting",
  // },
  {
    link: "/privacy-policy",
    name: "Privacy Policy",
  },
];

const developerItems = [
  {
    link: "https://ideaology-2.gitbook.io/what-is-ideaido/",
    name: "Documentation",
  },
  {
    link: "https://docs.google.com/forms/d/e/1FAIpQLSda5q18vhNvPX3dbcUXnXXaDTwbrjJjDCtJxcuGgNSSpAfI3g/viewform",
    name: "Ambassadors",
  },
  {
    link: "/GrantProgram",
    name: "Grant Program",
  },
];

const socialItems = [
  {
    link: "https://ideaologyio.medium.com/",
    name: "medium",
    imgSrc: "/imgs/logo/medium.svg",
  },
  {
    link: "https://t.me/ideaologyio",
    name: "telegram",
    imgSrc: "/imgs/logo/telegram.svg",
  },
  {
    link: "https://twitter.com/ideaologyio",
    name: "twitter",
    imgSrc: "/imgs/logo/twitter.svg",
  },
];

interface IProps {
  className?: string;
}

export const Footer = (props: IProps) => {
  const { enqueueSnackbar } = useSnackbar();
  const [email, setEmail] = useState<any>({
    email: "",
  });
  const [isActive, setIsActive] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const handleChangeEmail = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setEmail({ ...email, email: evt.target.value });
  };

  emailjs.init("xgY7CZ_J1S154HAiD");
  const handleSubscribe = async (e) => {
    e.preventDefault();
    setIsActive(true);

    if (!email.email) {
      console.log("Missing required fields!");
      return;
    }

    try {
      if (formRef.current) {
        const response = await emailjs.sendForm(
          "service_mq3enkt",
          "template_5bfsvqw",
          formRef.current
        );

        console.log("SUCCESS!", response);
        enqueueSnackbar("Successfully subscribed!", { variant: "success" });

        formRef.current.reset();
        setEmail({ email: "" });
      }
    } catch (err) {
      console.log("FAILED...", err);
      enqueueSnackbar("Error! Please try again later.", { variant: "error" });
    } finally {
      setIsActive(false);
    }
  };

  const classes = useStyles();
  const commonClasses = useCommonStyles();
  const currentYear = new Date().getFullYear();
  return (
    <div className={clsx(classes.root, props.className)}>
      <Container className={classes.container} maxWidth="lg">
        <div className={classes.listWrapper}>
          <div className={classes.listWrapper1}>
            <div className={classes.full}>
              <img
                alt="logo"
                className={classes.logo}
                src="/imgs/logo/logo-white.png"
              />
              <div className={classes.menuList}>
                <div className={clsx(classes.menuItem, classes.copyright)}>
                  Copyright @ {currentYear} Ideaology.io <br /> All Rights
                  Reserved
                </div>
              </div>
            </div>
            <div className={classes.half}>
              <span className={classes.menuTitle}>Products</span>
              <div className={classes.menuList}>
                {companyItems.map((element) => (
                  <div className={classes.menuItem} key={element.name}>
                    {element.external || element.link.startsWith("http") ? (
                      <a
                        className={classes.menuItemLink}
                        href={element.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {element.name}
                      </a>
                    ) : (
                      <Link className={classes.menuItemLink} to={element.link}>
                        {element.name}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className={classes.half}>
              <span className={classes.menuTitle}>Help</span>
              <div className={classes.menuList}>
                {helpItems.map((element) => (
                  <div className={classes.menuItem} key={element.name}>
                    <Link className={classes.menuItemLink} to={element.link}>
                      {element.name}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className={classes.listWrapper2}>
            <div className={classes.half}>
              <span className={classes.menuTitle}>Developers</span>
              <div className={classes.menuList}>
                <div className={classes.menuList}>
                  {developerItems.map((element) => (
                    <div className={classes.menuItem} key={element.name}>
                      <a className={classes.menuItemLink} href={element.link}>
                        {element.name}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* <div className={classes.half}>
              <span className={classes.menuTitle}>Social</span>
              <div className={classes.menuList}>
                {socialItems.map((element) => (
                  <a href={element.link} key={element.name}>
                    <img
                      alt={element.name}
                      className={classes.socialLogo}
                      src={element.imgSrc}
                    />
                  </a>
                ))}
              </div>
            </div> */}
            <div className={clsx(classes.full, classes.auditWrapper)}>
              <div className={classes.certikWrapper}>
                <h2 className={classes.texthead}>Join our Newsletter</h2>
                <p className={classes.textpar}>
                  Sign up to the newsletter and learn about new resources, new
                  commits, new proposals, and more.
                </p>
                {/* <br />
                <img alt="certik" src={certikSVG} /> */}
                <form ref={formRef} onSubmit={handleSubscribe}>
                  <div className={classes.containerStyle}>
                    <input
                      type="email"
                      value={email.email}
                      placeholder="Email"
                      onChange={handleChangeEmail}
                      required
                      className={classes.inputStyle}
                    />
                    <button className={classes.buttonStyle}>
                      {isActive ? "Sending..." : "Sign up"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
