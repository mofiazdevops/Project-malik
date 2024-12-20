/* eslint-disable no-console */
import {
  Button,
  Container,
  Hidden,
  Typography,
  makeStyles,
} from "@material-ui/core";
import clsx from "clsx";
import React, { useState } from "react";
import { BootstrapInput } from "components/Input";
import "./index.css";
import axios from "axios";
import symbolsPNG from "assets/pngs/landing/symbols-web.svg";
import symbolsMSVG from "assets/pngs/landing/symbols.svg";
import star from "../../../../assets/pngs/Star.png";
import starbg from "../../../../assets/pngs/starbg.png";
import {
  API_URL,
  SMTP_HOST,
  SMTP_PASSWORD,
  SMTP_PORT,
  SMTP_USERNAME,
} from "config/constants";
import { useSnackbar } from "notistack";
// import { render } from '@react-email/render';
import nodemailer from "nodemailer";
// import { Email } from './email';
import SMTPTransport from "nodemailer/lib/smtp-transport";
import { Link } from "react-router-dom";

import {
  Dialog,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  Stack,
} from "@mui/material";

const useStyles = makeStyles((theme: any) => ({
  root: {
    position: "relative",

    backgroundImage: "url(/imgs/landing/lines-subscribe.svg)",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "scroll",
    backgroundPosition: "right bottom",

    [theme.breakpoints.down("xs")]: {
      backgroundPosition: "60% 200%",
    },
  },
  container: {
    paddingTop: "100px",
    paddingBottom: "100px",

    [theme.breakpoints.down("xs")]: {
      paddingTop: "50px",
      paddingBottom: "96px",
    },
  },
  boxWrapper: {
    backgroundImage: `url(${symbolsPNG})`,
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "scroll",
    backgroundPosition: "right bottom",

    marginLeft: "12px",
    marginRight: "12px",

    padding: "56px 73px 62px 73px",
    position: "relative",

    display: "flex",
    flexDirection: "column",

    boxShadow: "0px 12px 20px -8px rgba(5, 43, 72, 0.12)",
    borderRadius: "16px",
    // border: "1px solid #E8EBED",

    background: "black",

    "&::before": {
      content: "url(/imgs/landing/pin-left-small.svg)",
      position: "absolute",
      left: "-20px",
      top: "-20px",
      transform: "scale(1.5)",
      zIndex: -1,

      [theme.breakpoints.down("xs")]: {
        display: "none",
      },
    },

    "&::after": {
      content: "url(/imgs/landing/idea.svg)",
      position: "absolute",
      right: "-30px",
      top: "-40px",

      [theme.breakpoints.down("xs")]: {
        display: "none",
      },
    },

    [theme.breakpoints.down("xs")]: {
      paddingLeft: 0,
      paddingRight: 0,

      paddingTop: "32px",

      boxShadow: "none",
      border: "none",

      background: "transparent",

      // width: "308px",

      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  title: {
    fontFamily: "SF Pro Display",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "32px",
    lineHeight: "40px",
    color: "#FFFFFF",
  },
  subTitle: {
    fontFamily: "SF Pro Display",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "16px",
    lineHeight: "24px",
    color: "#FFFFFF",

    [theme.breakpoints.down("xs")]: {
      marginTop: "8px",
    },
  },
  form: {
    marginTop: "40px",

    display: "flex",
    flexWrap: "wrap",

    [theme.breakpoints.down("xs")]: {
      marginTop: "24px",
    },
  },
  emailInput: {
    width: "359px",
    marginBottom: "12px",
  },
  btnSubscribe: {
    width: "126px",
    height: "40px",
    [theme.breakpoints.down("xs")]: {
      marginTop: "12px",
      // width: "100%",
      // maxWidth: "308px",
    },
  },
  btnAccept: {
    // width: "126px",
    // height: "40px",
    [theme.breakpoints.down("xs")]: {
      // marginTop: "12px",
      // width: "100%",
      // maxWidth: "308px",
    },
  },
  gap: {
    width: "16px",
    [theme.breakpoints.down("xs")]: {
      flexBasis: "100%",
    },
  },
  mobileSymbolsImg: {
    width: "100%",
  },
  buttoncontainer: {
    display: "flex",
    justifyContent: "flex-start", // Default alignment for larger screens
    width: 185,

    // [theme.breakpoints.down("sm")]: {
    //   justifyContent: "center", // Keep centered for small screens (mobile)
    //   flexWrap: "wrap", // Allow wrapping if there are multiple buttons
    // },
    // [theme.breakpoints.down("xs")]: {
    //   justifyContent: "center", // Center for extra-small screens
    //   padding: "0 10px", // Add padding to avoid edge clipping
    // },
    "&:hover": {
      cursor: "pointer",
    },
  },
  textcontai: {
    position: "relative",
    width: 150,
    height: 42,
    textAlign: "center",
    alignContent: "center",
    border: "2px solid #8ecaf3",
    borderRadius: "16px",
    // background: "transparent",
    fontSize: "16px",
    fontWeight: 500,
    background: "linear-gradient(90deg, #FFFFFF, #3CADFF)",
    backgroundClip: "text",
    color: "transparent",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    transition: "background-color 0.3s ease",

    "&:hover": {
      background: "linear-gradient(90deg, #3CADFF, #FFFFFF)",
      backgroundClip: "text",
      color: "transparent",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },

    [theme.breakpoints.down("xs")]: {
      width: 280,
      height: 42,
    },
  },
  dust: {
    position: "absolute",
    top: "-35%",
    left: "-37%",
    [theme.breakpoints.down("xs")]: {
      top: "-25%",
      left: "-15%",
    },
  },
  star: {
    animation: "$rotate 8s linear infinite", // Apply rotation animation
    width: 15, // Ensure consistent width
    height: 15, // Ensure consistent height
    position: "absolute",
    top: "0%",
    right: "-13%",
    [theme.breakpoints.down("xs")]: {
      top: "-4%",
      right: "-12%",
    },
  },

  "@keyframes rotate": {
    from: {
      transform: "rotate(0deg)",
    },
    to: {
      transform: "rotate(360deg)",
    },
  },
}));

interface IProps {
  className?: string;
}

export const Subscribe = (props: IProps) => {
  const classes = useStyles();

  const { enqueueSnackbar } = useSnackbar();
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState<any>({
    name: "",
    email: "",
    userFrom: "",
  });
  const [inProgress, setInProgress] = useState<boolean>(false);

  const handleChangeEmail = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setEmail({ ...email, email: evt.target.value });
  };

  const handleChangeName = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setEmail({ ...email, name: evt.target.value });
  };

  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: SMTP_PORT,
    secure: false,
    auth: {
      user: SMTP_USERNAME,
      pass: SMTP_PASSWORD,
    },
  } as SMTPTransport.Options);

  const handleSubscribe = () => {
    // evt.preventDefault();

    setInProgress(true);

    // TODO: update subscriber saving flow, now just saving email
    axios
      .post(`${API_URL}/sendMail/subscribe`, {
        email: email.email,
        name: email.name,
        userFrom: email.userFrom,
      })
      .then((response) => {
        // console.log(response);
        enqueueSnackbar("Successfully subscribed!", { variant: "success" });
        setEmail({ name: "", email: "" });
      })
      .catch((err) => {
        // console.log(err.msg);
        enqueueSnackbar("Error! Please Try again later.", {
          variant: "error",
        });
      })
      .finally(() => {
        setInProgress(false);
      });
  };

  const handleSubscribe1 = async (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    setInProgress(true);

    const options = {
      from: "you@example.com",
      to: "mjc8808@gmail.com",
      subject: "hello world",
      html: `<p>${email.name}</p><br /><p>${email.email}</p>`,
    };

    transporter.sendMail(options, (err, info) => {
      if (err) console.log(err);
      else console.log(info);
    });

    setInProgress(false);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setOpen(true);
  };

  console.log(email);

  return (
    <div className={clsx(classes.root, props.className)}>
      <Container className={classes.container} maxWidth="lg">
        <Hidden smUp>
          <img
            alt="symbols"
            className={classes.mobileSymbolsImg}
            src={symbolsMSVG}
          />
        </Hidden>
        <div className={classes.boxWrapper}>
          <div className={classes.title}>Get In Touch With us</div>
          {/* <div className={classes.subTitle}>
            Subscribe to get notified about new pools and other relevant events.
          </div> */}
          {/* <div className={classes.subTitle}>
            From Where You here about us?
          </div> */}
          <form
            className={classes.form}
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column" }}
          >
            <input
              className={classes.emailInput}
              id="name"
              onChange={handleChangeName}
              placeholder="Enter your name..."
              required
              // style={{ marginRight: "1rem" }}
              style={{
                width: "327px",
                height: "52px",
                backgroundColor: "transparent",
                borderRadius: "10px",
                border: "1px solid #C7C7C7", // Add border for better appearance
                color: "white", // Text color
                paddingLeft: "1rem", // Padding for text inside input
                paddingRight: "1rem",
                fontSize: "16px", // Optional: Adjust text size
              }}
              type="name"
              value={email.name}
            />
            <input
              className={classes.emailInput}
              id="email"
              onChange={handleChangeEmail}
              placeholder="Enter your email address..."
              required
              style={{
                width: "327px",
                height: "52px",
                backgroundColor: "transparent",
                borderRadius: "10px",
                border: "1px solid #C7C7C7", // Add border for better appearance
                color: "white", // Text color
                paddingLeft: "1rem", // Padding for text inside input
                paddingRight: "1rem",
                fontSize: "16px", // Optional: Adjust text size
              }}
              type="email"
              value={email.email}
            />
            <div className={classes.gap} />
            <div style={{ margin: "1rem 0" }}>
              <div className={classes.subTitle}>
                <Typography variant="h4">
                  From Where You here about us?
                </Typography>
              </div>
              <div className="subscribe__radio">
                <FormControl>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                  >
                    <Stack
                      direction="row"
                      gap="10px"
                      sx={{
                        color: "#FFFFFF",
                      }}
                    >
                      <Stack direction="column" gap="10px">
                        <FormControlLabel
                          value="twitter"
                          checked={email.userFrom == "twitter"}
                          onChange={(e) =>
                            setEmail({ ...email, userFrom: "twitter" })
                          }
                          control={
                            <Radio
                              sx={{
                                color: "white", // Unchecked color
                                "&.Mui-checked": {
                                  color: "blue", // Checked color
                                },
                              }}
                            />
                          }
                          label="Twitter"
                        />
                        <FormControlLabel
                          value="reddit"
                          checked={email.userFrom == "reddit"}
                          onChange={(e) =>
                            setEmail({ ...email, userFrom: "reddit" })
                          }
                          control={
                            <Radio
                              sx={{
                                color: "white", // Unchecked color
                                "&.Mui-checked": {
                                  color: "blue", // Checked color
                                },
                              }}
                            />
                          }
                          label="Reddit"
                        />

                        <FormControlLabel
                          value="coinmarketcap"
                          checked={email.userFrom == "coinmarketcap"}
                          onChange={(e) =>
                            setEmail({ ...email, userFrom: "coinmarketcap" })
                          }
                          control={
                            <Radio
                              sx={{
                                color: "white", // Unchecked color
                                "&.Mui-checked": {
                                  color: "blue", // Checked color
                                },
                              }}
                            />
                          }
                          label="Coinmarketcap"
                        />
                        <FormControlLabel
                          value="other"
                          checked={email.userFrom == "other"}
                          onChange={(e) =>
                            setEmail({ ...email, userFrom: "other" })
                          }
                          control={
                            <Radio
                              sx={{
                                color: "white", // Unchecked color
                                "&.Mui-checked": {
                                  color: "blue", // Checked color
                                },
                              }}
                            />
                          }
                          label="Other"
                        />
                      </Stack>
                      <Stack direction="column" gap="10px">
                        <FormControlLabel
                          value="telegram"
                          checked={email.userFrom == "telegram"}
                          onChange={(e) =>
                            setEmail({ ...email, userFrom: "telegram" })
                          }
                          control={
                            <Radio
                              sx={{
                                color: "white", // Unchecked color
                                "&.Mui-checked": {
                                  color: "blue", // Checked color
                                },
                              }}
                            />
                          }
                          label="Telegram"
                        />
                        <FormControlLabel
                          value="facebook"
                          checked={email.userFrom == "facebook"}
                          onChange={(e) =>
                            setEmail({ ...email, userFrom: "facebook" })
                          }
                          control={
                            <Radio
                              sx={{
                                color: "white", // Unchecked color
                                "&.Mui-checked": {
                                  color: "blue", // Checked color
                                },
                              }}
                            />
                          }
                          label="Facebook"
                        />

                        <FormControlLabel
                          value="instagram"
                          checked={email.userFrom == "instagram"}
                          onChange={(e) =>
                            setEmail({ ...email, userFrom: "instagram" })
                          }
                          control={
                            <Radio
                              sx={{
                                color: "white", // Unchecked color
                                "&.Mui-checked": {
                                  color: "blue", // Checked color
                                },
                              }}
                            />
                          }
                          label="Instagram"
                        />
                      </Stack>
                    </Stack>
                  </RadioGroup>
                </FormControl>
              </div>
            </div>
            <Button
              // className={classes.btnSubscribe}
              className={classes.buttoncontainer}
              disableElevation
              disabled={inProgress}
              type="submit"
              // variant="contained"
            >
              <div className={classes.textcontai}>
                <img
                  src={starbg}
                  alt="starbg"
                  width={70}
                  height={70}
                  className={classes.dust}
                />
                Subscribe
                <img src={star} alt="star" className={classes.star} />
              </div>
            </Button>
          </form>
          {/* <div style={{ margin: "10px 0" }}>
            <Link to="/terms">
              <Typography variant="body2">Terms</Typography>
            </Link>
          </div> */}
        </div>
      </Container>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <div className="termsModal">
          <Typography variant="h2">Terms and conditions</Typography>
          <div className="termsModal__body">
            <Typography>
              By providing your personal information to Ideaology.io, you
              consent to the collection, use, and disclosure of that information
              as described in our privacy policy. You also consent to receive
              marketing communications from us, including newsletters,
              promotions, and other materials. You can opt-out of receiving
              these communications at any time by clicking the unsubscribe link
              at the bottom of the email or by contacting us at
              support@ideaology.io. Please note that even if you opt-out of
              receiving marketing communications, we may still send you
              transactional or administrative messages related to your account.
              If you are located in the European Union, we will only send you
              marketing communications if you have given us your explicit
              consent to do so. You have the right to withdraw your consent at
              any time. To do so, please contact us at support@ideaology.io. We
              may use third-party service providers to send our marketing
              communications. These providers may use cookies or other
              technologies to track your behavior on our site and other sites in
              order to personalize the messages you receive. By providing your
              consent, you agree to these practices.
            </Typography>
          </div>
          <Stack
            direction="row"
            sx={{ width: "100%", marginTop: "1.5rem" }}
            gap="10px"
          >
            <Button fullWidth onClick={() => setOpen(false)}>
              Reject
            </Button>
            <Button
              className={classes.btnAccept}
              color="primary"
              fullWidth
              onClick={() => handleSubscribe()}
              disableElevation
              disabled={inProgress}
              type="submit"
              variant="contained"
            >
              Accept All
            </Button>
          </Stack>
        </div>
      </Dialog>
    </div>
  );
};
