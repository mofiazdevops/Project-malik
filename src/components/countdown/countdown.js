import React from "react";
import { Typography } from "@mui/material";

const muiStyles = {
  fadedTxt: {
    opacity: "0.6",
  },
};

export function MyTimer({ expiryTimestamp }) {
  const { days, hours, minutes, seconds } = expiryTimestamp;

  return (
    <div style={{ textAlign: "center" }}>
      <Typography sx={{ paddingBottom: "0.8rem" }} variant="h5">
        Time Left Until Voting
      </Typography>
      <div className="timer">
        <div className="timer__fragment">
          <Typography variant="h5">{days}</Typography>
          <Typography sx={muiStyles.fadedTxt} variant="caption">
            Days
          </Typography>
        </div>
        <div className="timer__fragment">
          <Typography variant="h5">{hours}</Typography>
          <Typography sx={muiStyles.fadedTxt} variant="caption">
            Hours
          </Typography>
        </div>
        <div className="timer__fragment">
          <Typography variant="h5">{minutes}</Typography>
          <Typography sx={muiStyles.fadedTxt} variant="caption">
            Minutes
          </Typography>
        </div>
        <div className="timer__fragment">
          <Typography variant="h5">{seconds}</Typography>
          <Typography sx={muiStyles.fadedTxt} variant="caption">
            seconds
          </Typography>
        </div>
      </div>
    </div>
  );
}
