import React from "react";
import { Typography, IconButton } from "@material-ui/core";
import {
  ArrowDownward as ArrowDownwardIcon,
  ArrowUpward as ArrowUpwardIcon,
} from "@material-ui/icons";

// styles
import useStyles from "./styles";

export default function Break({ length, onDecrement, onIncrement }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography id="break-label" variant="h4" className={classes.label}>
        Break Length
      </Typography>
      <div className={classes.container}>
        <IconButton
          id="break-decrement"
          className={classes.button}
          onClick={onDecrement}
        >
          <ArrowDownwardIcon />
        </IconButton>
        <Typography id="break-length" variant="h6" className={classes.counter}>
          {length}
        </Typography>
        <IconButton
          id="break-increment"
          className={classes.button}
          onClick={onIncrement}
        >
          <ArrowUpwardIcon />
        </IconButton>
      </div>
    </div>
  );
}
