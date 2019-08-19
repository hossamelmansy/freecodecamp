import React from "react";

// styles
import useStyles from "./styles";

export default function Button({
  id,
  text = "",
  backgroundColor = "grey",
  onClick,
}) {
  var classes = useStyles();

  return (
    <a
      id={id}
      className={classes.root}
      style={{ backgroundColor }}
      onClick={onClick}
    >
      {text}
    </a>
  );
}
