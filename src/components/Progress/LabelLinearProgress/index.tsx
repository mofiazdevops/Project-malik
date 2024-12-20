import {
  Box,
  LinearProgress,
  Typography,
  createStyles,
  withStyles,
} from "@material-ui/core";
import React from "react";

export const LinearProgressWithLabel = withStyles(() =>
  createStyles({
    root: {
      height: 4,
      borderRadius: 2,
    },
    barColorPrimary: {
      backgroundColor: "#0C71BC",
    },
    colorPrimary: {
      backgroundColor: "#E8EBED",
    },
    barColorSecondary: {
      backgroundColor: "#D81159",
    },
    colorSecondary: {
      backgroundColor: "#E8EBED",
    },
  })
)(LinearProgress);

export function LabelLinearProgress(props: any & { value: number }) {
  return (
    <Box alignItems="center" display="flex">
      <Box mr={1} width="100%">
        <LinearProgressWithLabel
          variant="determinate"
          {...props}
          color={props.value === 100 ? "secondary" : "primary"}
        />
      </Box>
      <Box minWidth={35}>
        <Typography color="textPrimary" variant="body2">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
}
