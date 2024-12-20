import { createStyles, withStyles } from "@material-ui/core";
import TableRow from "@material-ui/core/TableRow";

export const StripedTableRow = withStyles((theme: any) =>
  createStyles({
    root: {
      "&:nth-of-type(even)": {
        backgroundColor: "white",
      },
    },
    head: {
      backgroundColor: "white",
    },
  })
)(TableRow);
