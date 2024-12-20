import { createStyles, withStyles } from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";

export const BootstrapLabel = withStyles((theme: any) =>
  createStyles({
    root: {
      "label + &": {
        marginTop: theme.spacing(1),
      },
      color: "#1C2535",
    },
  })
)(InputLabel);
