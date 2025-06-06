import { Button, Container, makeStyles } from "@material-ui/core";
import clsx from "clsx";
import React, { useRef, useState } from "react";
import { BootstrapInput, BootstrapLabel } from "components/Input";
import emailjs from "emailjs-com";
import { useSnackbar } from "notistack";

const useStyles = makeStyles((theme: any) => ({
  root: {
    backgroundImage: "url(/imgs/landing/ellipse.svg)",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "scroll",
    backgroundPosition: "700px 500px",

    paddingBottom: "1px",
  },
  container: {
    position: "relative",
  },
  boxWrapper: {
    padding: "56px 94px 54px 96px",
    backgroundColor: "rgba(0, 0, 0, 0.8)",

    maxWidth: "742px",

    marginLeft: "auto",
    marginRight: "auto",

    marginTop: "48px",
    marginBottom: "54px",

    boxShadow: "0px 6px 8px -4px rgba(127, 144, 159, 0.16)",
    borderRadius: "16px",

    position: "relative",

    [theme.breakpoints.down("xs")]: {
      padding: "40px",
    },
  },
  title: {
    fontFamily: "Rubik",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "32px",
    lineHeight: "40px",
    color: "#ffffff",

    position: "relative",
  },
  pinLeftImg: {
    display: "block",

    position: "absolute",
    left: "calc((100vw - 742px) / 2 - 104px)",
    top: "-30px",
  },
  pinCircleImg: {
    display: "block",

    position: "absolute",
    left: "calc((100vw - 742px) / 2 - 154px)",
    bottom: "-30px",
  },
  subTitle: {
    marginTop: "32px",
  },
  field: {
    width: "100%",
    marginTop: "24px",
  },
  label: {
    color: "#ffffff",
  },
  btnSubmit: {
    height: "40px",
    marginTop: "40px",
    borderRadius: "3px",
  },
  inputField: {
    backgroundColor: "black",
    color: "white",
    borderRadius: "4px",
    padding: "10px",
    "&::placeholder": {
      color: "white",
      opacity: 1, // Ensures placeholder is fully visible
    },
  },
}));

export const ContactUs = (/*props: IProps*/) => {
  const { enqueueSnackbar } = useSnackbar();
  const classes = useStyles();
  const [isActive, setIsActive] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });
  // Initialize emailjs with public key
  emailjs.init("xgY7CZ_J1S154HAiD");

  // Handle form changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent page reload
    setIsActive(true);
    try {
      if (formRef.current) {
        const response = await emailjs.sendForm(
          "service_mq3enkt",
          "template_5bfsvqw",
          formRef.current
        );
        console.log("SUCCESS!", response);
        enqueueSnackbar("Successfully submitted!", { variant: "success" });

        // Log form data for debugging
        console.log("Form Data:", formData);

        // Optionally reset the form and state
        formRef.current.reset();
        setFormData({
          fullName: "",
          email: "",
          subject: "",
          message: "",
        });
      }
      setIsActive(false);
    } catch (err) {
      setIsActive(false);
      console.log("FAILED...", err);
      enqueueSnackbar("Error! Please try again later.", { variant: "error" });
    }
  };

  return (
    <div className={classes.root}>
      <Container className={classes.container} maxWidth="lg">
        <img
          alt="pin-left-small"
          className={classes.pinLeftImg}
          src="/imgs/landing/pin-left-small.svg"
        />
        <img
          alt="pin-circle"
          className={classes.pinCircleImg}
          src="/imgs/landing/pin-circle.svg"
        />
        <div className={classes.boxWrapper}>
          <div className={clsx(classes.title, "pinText")}>Contact us</div>
          <div className={classes.subTitle}></div>
          <form ref={formRef} onSubmit={handleSubmit}>
            <div className={classes.field}>
              <BootstrapLabel htmlFor="fullName" className={classes.label}>
                Full Name
              </BootstrapLabel>
              <BootstrapInput
                fullWidth={true}
                id="fullName"
                placeholder="Full name"
                type="text"
                value={formData.fullName}
                onChange={handleChange}
              />
            </div>

            <div className={classes.field}>
              <BootstrapLabel htmlFor="email" className={classes.label}>
                Email
              </BootstrapLabel>
              <BootstrapInput
                fullWidth={true}
                id="email"
                placeholder="Enter email address..."
                type="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className={classes.field}>
              <BootstrapLabel htmlFor="subject" className={classes.label}>
                Subject
              </BootstrapLabel>
              <BootstrapInput
                fullWidth={true}
                id="subject"
                placeholder="Enter subject here..."
                type="text"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>

            <div className={classes.field}>
              <BootstrapLabel htmlFor="message" className={classes.label}>
                Message
              </BootstrapLabel>
              <BootstrapInput
                fullWidth={true}
                id="message"
                multiline={true}
                placeholder="Your message goes here..."
                rows={5}
                type="text"
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            <div className={classes.btnSubmit}>
              <Button
                color="primary"
                disableElevation
                fullWidth={true}
                type="submit"
                variant="contained"
              >
                {isActive ? "Submiting..." : "Submit"}
              </Button>
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
};
