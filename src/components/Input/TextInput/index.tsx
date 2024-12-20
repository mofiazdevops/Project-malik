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
      borderRadius: 4,
      position: "relative",
      color: theme.palette.common.black,
      backgroundColor: theme.palette.common.white,
      border: "1px solid #ced4da",
      fontSize: 16,
      padding: "10px 12px",
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
      "&:focus": {
        // boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
        // borderColor: theme.palette.primary.main,
      },
    },
  })
)(InputBase);
