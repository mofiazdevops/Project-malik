import { createStyles, withStyles } from "@material-ui/core";
import TableCell from "@material-ui/core/TableCell";

export const BorderlessTableCell = withStyles((theme: any) =>
  createStyles({
    root: {
      border: "none",
      fontSize: "16px",
    },
    head: {
      fontWeight: "bold",
    },
  })
)(TableCell);
