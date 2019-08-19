import React from "react";

// styles
import useStyles from "./styles";

export default function Display({
  id,
  text,
  color = "white",
  fontSize = 25,
  height = 45,
}) {
  var classes = useStyles();

  return (
    <div id={id} className={classes.root} style={{ color, fontSize, height }}>
      {text}
    </div>
  );
}
