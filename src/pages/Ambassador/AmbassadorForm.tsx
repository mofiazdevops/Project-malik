import React, { useRef, useState } from "react";
import { makeStyles } from "@material-ui/core";
import emailjs from "emailjs-com";
import { useSnackbar } from "notistack";

const useStyles = makeStyles((theme) => ({
  "@global": {
    "input:-webkit-autofill": {
      backgroundColor: "transparent !important",
      "-webkit-box-shadow": "0 0 0px 1000px transparent inset !important", // Ensure the autofill background is transparent
      "-webkit-text-fill-color": "#ffffff !important", // Text color for autofill
      transition: "background-color 5000s ease-in-out 0s", // Prevent autofill styles from flashing
    },
  },
  root: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "rgba(0 ,23,39,0.5)",
    minHeight: "408px",
    padding: "30px 25px",
    margin: "30px 0px",
    borderRadius: "20px",
    border: "1px solid white",
    [theme.breakpoints.down("md")]: {
      margin: "0px 20px",
    },
    [theme.breakpoints.down("sm")]: {
      margin: "0px 30px",
    },
    [theme.breakpoints.down("xs")]: {
      margin: "0px 20px",
    },
  },
  label: {
    fontSize: "18px",
    fontWeight: 400,
    fontFamily: "SF Pro Display",
    textAlign: "left",
    marginBottom: "8px",
    width: "95%",
    [theme.breakpoints.down("md")]: {
      fontSize: "16px",
      width: "80%",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "14px",
      width: "70%",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "12px",
      width: "88%",
    },
  },
  inputcontainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  input: {
    color: "#ffffff",
    width: "100%",
    maxWidth: "500px", // Maximum width for larger screens
    height: "50px",
    background: "transparent",
    outline: "none",
    border: "1px solid #ffffff",
    borderRadius: "10px",
    padding: "10px 15px",
    fontFamily: "SF Pro Display",
    boxSizing: "border-box", // Ensure padding doesn't affect width
    [theme.breakpoints.down("md")]: {
      maxWidth: "80%", // Reduce width on medium screens
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: "70%", // Reduce width further on small screens
    },
    [theme.breakpoints.down("xs")]: {
      maxWidth: "90%", // Reduce width on extra small screens
    },
  },
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: "20px",
    },
  },
  radiocontainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "53px",
    height: "35px",
  },
  containerradiofull: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    margin: "14px 12px",
    [theme.breakpoints.down("md")]: {
      margin: "14px 45px",
    },
    [theme.breakpoints.down("sm")]: {
      alignItems: "center",
    },
    [theme.breakpoints.down("xs")]: {
      margin: "14px 12px",
      alignItems: "left",
    },
  },
  buttonContainer: {
    maxWidth: "1100px",
    [theme.breakpoints.down("md")]: {
      marginTop: "25px",
      marginLeft: "18px",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "25px",
      marginLeft: "31px",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "25px",
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  button: {
    width: "147px",
    height: "50px",
    borderRadius: "10px",
    background: "#49A8FF",
    fontSize: "22px",
    fontWeight: 500,
    fontFamily: "SF Pro Display",
    color: "#ffffff",
    outline: "none",
    border: "none",
    transition: "background 0.3s ease",
    " &:hover": {
      background: "#1E90FF",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "18px",
      width: "127px",
      height: "50px",
    },
  },
}));

export const AmbassadorForm = () => {
  const { enqueueSnackbar } = useSnackbar();
  const classes = useStyles();
  const formRef = useRef<HTMLFormElement>(null); // Create a ref for the form, typed as HTMLFormElement
  const [isActive, setIsActive] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    telegram_email: "",
    suggestion: "",
    suggestion_benefit: "",
    compensation: "",
    yes: "",
    no: "",
    subject: "",
  });
  // Initialize emailjs with public key
  emailjs.init("xgY7CZ_J1S154HAiD");

  // Handle form changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    console.log(`Field ID: ${id}, Value: ${value}`);
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      yes: value === "yes" ? "yes" : "",
      no: value === "no" ? "no" : "",
    }));
  };

  // Handle form submissionk
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

        // Optionally reset the form and state
        formRef.current.reset();
        setFormData({
          fullName: "",
          email: "",
          telegram_email: "",
          suggestion: "",
          suggestion_benefit: "",
          compensation: "",
          yes: "",
          no: "",
          subject: "",
        });
      }
      setIsActive(false);
    } catch (err) {
      console.log("FAILED...", err);
      enqueueSnackbar("Error! Please try again later.", { variant: "error" });
      setIsActive(false);
    }
  };
  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <div className={classes.root}>
        <div
          className={classes.container}
          style={{
            marginBottom: "30px",
          }}
        >
          <div className={classes.inputcontainer}>
            <label htmlFor="Name" className={classes.label}>
              Name :
            </label>
            <input
              type="text"
              placeholder="Enter full name"
              className={classes.input}
              id="fullName"
              value={formData.fullName}
              onChange={handleChange}
            />
          </div>
          <div className={classes.inputcontainer}>
            <label htmlFor="Name" className={classes.label}>
              Email :
            </label>
            <input
              type="text"
              placeholder="Enter Email"
              className={classes.input}
              id="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        </div>
        <div
          className={classes.container}
          style={{
            marginBottom: "30px",
          }}
        >
          <div className={classes.inputcontainer}>
            <label htmlFor="email" className={classes.label}>
              Telegram Username :
            </label>
            <input
              type="text"
              placeholder="@"
              className={classes.input}
              id="telegram_email"
              value={formData.telegram_email}
              onChange={handleChange}
            />
          </div>
          <div className={classes.inputcontainer}>
            <label htmlFor="Name" className={classes.label}>
              Your Suggestion :
            </label>
            <input
              type="text"
              placeholder="Your Answer"
              className={classes.input}
              id="suggestion"
              value={formData.suggestion}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className={classes.container} style={{ marginBottom: "5px" }}>
          <div className={classes.inputcontainer}>
            <label htmlFor="Name" className={classes.label}>
              How Does This Suggestion Benefit the IDEA Ecosystem?
            </label>
            <input
              type="text"
              placeholder="Your answer"
              className={classes.input}
              id="suggestion_benefit"
              value={formData.suggestion_benefit}
              onChange={handleChange}
            />
          </div>
          <div className={classes.inputcontainer}>
            <label htmlFor="Name" className={classes.label}>
              I am looking for USDT or IDEA Compensation ?
            </label>
            <input
              type="text"
              placeholder="Your answer"
              className={classes.input}
              id="compensation"
              value={formData.compensation}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className={classes.containerradiofull}>
          <h6>Do you hold IDEA coin?</h6>

          <div
            style={{
              display: "flex",
            }}
          >
            <div className={classes.radiocontainer}>
              <input
                type="radio"
                id="yes"
                value="yes"
                checked={formData.yes === "yes"}
                onChange={handleRadioChange}
              />
              <p
                style={{
                  margin: 0,
                  paddingLeft: "4px",
                }}
              >
                Yes
              </p>
            </div>
            <div className={classes.radiocontainer}>
              <input
                type="radio"
                id="no"
                value="no"
                checked={formData.no === "no"}
                onChange={handleRadioChange}
              />
              <p
                style={{
                  margin: 0,
                  paddingLeft: "4px",
                }}
              >
                No
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.buttonContainer}>
        <button className={classes.button} type="submit">
          {isActive ? "Submiting..." : "Submit"}
        </button>
      </div>
    </form>
  );
};
