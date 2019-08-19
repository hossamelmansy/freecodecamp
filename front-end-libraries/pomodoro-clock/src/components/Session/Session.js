import React from "react";
import { Typography, IconButton } from "@material-ui/core";
import {
  ArrowDownward as ArrowDownwardIcon,
  ArrowUpward as ArrowUpwardIcon,
} from "@material-ui/icons";

// styles
import useStyles from "./styles";

export default function Session({ length, onDecrement, onIncrement }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography id="session-label" variant="h4" className={classes.label}>
        Session Length
      </Typography>
      <div className={classes.container}>
        <IconButton
          id="session-decrement"
          className={classes.button}
          onClick={onDecrement}
        >
          <ArrowDownwardIcon />
        </IconButton>
        <Typography
          id="session-length"
          variant="h6"
          className={classes.counter}
        >
          {length}
        </Typography>
        <IconButton
          id="session-increment"
          className={classes.button}
          onClick={onIncrement}
        >
          <ArrowUpwardIcon />
        </IconButton>
      </div>
    </div>
  );
}
