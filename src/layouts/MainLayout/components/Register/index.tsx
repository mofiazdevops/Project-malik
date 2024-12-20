import { Button, Container, makeStyles } from "@material-ui/core";
import clsx from "clsx";
import React from "react";
import { BootstrapInput, BootstrapLabel } from "components/Input";

const useStyles = makeStyles(() => ({
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
    backgroundColor: "white",

    width: "742px",

    marginLeft: "auto",
    marginRight: "auto",

    marginTop: "48px",
    marginBottom: "54px",

    boxShadow: "0px 6px 8px -4px rgba(127, 144, 159, 0.16)",
    borderRadius: "16px",

    position: "relative",
  },
  title: {
    fontFamily: "Rubik",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "32px",
    lineHeight: "40px",
    color: "#1C2535",

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
  btnSubmit: {
    height: "40px",
    marginTop: "40px",
    borderRadius: "3px",
  },
}));

// interface IProps {
//   className?: string;
// }

export const Register = (/*props: IProps*/) => {
  const classes = useStyles();

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
          <div className={clsx(classes.title, "pinText")}>Register</div>
          <div className={classes.subTitle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh quis
            aliquet massa odio neque varius. Sed lorem aenean condimentum
            tristique iaculis tincidunt.
          </div>
          <form>
            <div className={classes.field}>
              <BootstrapLabel htmlFor="fullName">Full Name</BootstrapLabel>
              <BootstrapInput
                fullWidth={true}
                id="fullName"
                placeholder="Full name"
                type="text"
              />
            </div>

            <div className={classes.field}>
              <BootstrapLabel htmlFor="email">Email</BootstrapLabel>
              <BootstrapInput
                fullWidth={true}
                id="email"
                placeholder="Enter email address..."
                type="email"
              />
            </div>

            <div className={classes.field}>
              <BootstrapLabel htmlFor="website">Website</BootstrapLabel>
              <BootstrapInput
                fullWidth={true}
                id="website"
                placeholder="Enter website address..."
                type="url"
              />
            </div>

            <div className={classes.field}>
              <BootstrapLabel htmlFor="password">Password</BootstrapLabel>
              <BootstrapInput
                fullWidth={true}
                id="password"
                placeholder="Enter password"
                type="password"
              />
            </div>

            <div className={classes.field}>
              <BootstrapLabel htmlFor="confirmPassword">
                Confirm Password
              </BootstrapLabel>
              <BootstrapInput
                fullWidth={true}
                id="confirmPassword"
                placeholder="Confirm password"
                type="password"
              />
            </div>

            <div className={classes.btnSubmit}>
              <Button
                color="primary"
                disableElevation
                fullWidth={true}
                variant="contained"
              >
                Submit
              </Button>
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
};
