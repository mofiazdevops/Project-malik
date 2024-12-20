import { createStyles, withStyles } from "@material-ui/core";
import InputBase from "@material-ui/core/InputBase";

export const IconInput = withStyles((theme: any) =>
  createStyles({
    root: {
      border: "1px solid #E8EBED",
      color: theme.palette.common.black,
      borderRadius: "6px",
    },
    adornedStart: {
      color: "#E8EBED",
      paddingLeft: "10px",
    },
    inputAdornedStart: {
      color: "#1C2535",
    },
    input: {
      paddingLeft: "10px",
    },
  })
)(InputBase);
