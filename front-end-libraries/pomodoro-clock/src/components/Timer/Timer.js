import React from "react";
import { Typography, IconButton } from "@material-ui/core";
import {
  PlayArrow as PlayArrowIcon,
  Pause as PauseIcon,
  Replay as ReplayIcon,
} from "@material-ui/icons";

// styles
import useStyles from "./styles";

export default function Timer({
  label,
  timer,
  onResetClick,
  onStartStopClick,
}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Typography id="timer-label" variant="h5" className={classes.label}>
          {label}
        </Typography>
        <Typography id="time-left" variant="h4" className={classes.label}>
          {timer}
        </Typography>
      </div>
      <div>
        <IconButton id="start_stop" onClick={onStartStopClick}>
          <PlayArrowIcon />
          <PauseIcon />
        </IconButton>
        <IconButton id="reset" onClick={onResetClick}>
          <ReplayIcon />
        </IconButton>
      </div>
    </div>
  );
}
