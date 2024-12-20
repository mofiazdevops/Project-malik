import { createStyles, withStyles } from "@material-ui/core";
import Chip from "@material-ui/core/Chip";

export const MyChip = withStyles((theme: any) =>
  createStyles({
    root: {
      color: "#1C2535",
    },
    icon: {
      color: "#1C2535",
    },
  })
)(Chip);
