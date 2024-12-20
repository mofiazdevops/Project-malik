import { createStyles, withStyles } from "@material-ui/core";
import Select from "@material-ui/core/Select";

export const OutlinedSelect = withStyles((theme: any) =>
  createStyles({
    root: {
      color: "#1C2535",
    },
    icon: {
      color: "#1C2535",
    },
  })
)(Select);

export const BootstrapSelect = withStyles((theme: any) =>
  createStyles({
    root: {
      color: "#1C2535",
    },
    icon: {
      color: "#1C2535",
    },
  })
)(Select);
