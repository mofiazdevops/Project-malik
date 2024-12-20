import { createStyles, withStyles } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";

export const UnderlinedPagination = withStyles((theme: any) =>
  createStyles({
    root: {
      fontSize: "16px",
    },
  })
)(Pagination);
