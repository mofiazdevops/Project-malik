import { createStyles, fade, withStyles } from "@material-ui/core";
import InputBase from "@material-ui/core/InputBase";

export const BootstrapInput = withStyles((theme: any) =>
  createStyles({
    root: {
      "label + &": {
        marginTop: theme.spacing(1),
      },
    },
    input: {
      borderRadius: 6,
      position: "relative",
      color: theme.palette.common.white,
      backgroundColor: theme.palette.common.black,
      border: "1px solid #ced4da",
      fontSize: 16,
      padding: "10px 12px",
      placeHolder: "white",
      transition: theme.transitions.create(["border-color", "box-shadow"]),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        "SF Pro Display",
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
      "&::placeholder": {
        color: "#80858A", // Placeholder color
        opacity: 1, // Ensures it's fully visible
      },
      "&:focus": {
        // boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
        // borderColor: theme.palette.primary.main,
      },
    },
  })
)(InputBase);
