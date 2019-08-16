import React, { useEffect } from "react";
import { Typography } from "@material-ui/core";

// styles
import useStyles from "./styles";

export default function DrumPad({ id, text, src, onPlay }) {
  var classes = useStyles();

  useEffect(function() {
    document.addEventListener("keypress", handleKeyPress);

    return function cleanup() {
      document.removeEventListener("keypress", handleKeyPress);
    };
  }, []);

  return (
    <button
      id={id}
      className={`${classes["drum-pad"]} drum-pad`}
      onClick={handleClick}
    >
      <Typography variant="h4">{text}</Typography>
      <audio id={text} src={src} className="clip" />
    </button>
  );

  // ##############################
  function handleClick() {
    document.getElementById(text).play();
    onPlay();
  }

  function handleKeyPress(event) {
    if (event.key.toUpperCase() == text) {
      handleClick();
    }
  }
}
