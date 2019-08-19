import React, { useState } from "react";
import { Grid, Typography } from "@material-ui/core";

// styles
import useStyles from "./styles";

// components
import Break from "./Break";
import Session from "./Session";
import Timer from "./Timer";

export default function App() {
  const classes = useStyles();
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [isRunning, setIsRunning] = useState(false);
  const [timer, setTimer] = useState({
    type: "Session",
    minutes: 25,
    seconds: 0,
  });
  const [myInterval, setMyInterval] = useState(null);

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={2}
        direction="column"
        justify="center"
        alignItems="center"
        style={{ minHeight: "100vh" }}
      >
        <Typography variant="h2" className={classes.header} gutterBottom>
          Pomodoro Clock
        </Typography>

        <Grid item container align="center" style={{ width: "30%" }}>
          <Grid item xs={6}>
            <Break
              length={breakLength}
              onDecrement={handleBreakDecrement}
              onIncrement={handleBreakIncrement}
            />
          </Grid>
          <Grid item xs={6}>
            <Session
              length={sessionLength}
              onDecrement={handleSessionDecrement}
              onIncrement={handleSessionIncrement}
            />
          </Grid>
        </Grid>

        <Grid item>
          <Timer
            label={timer.type}
            timer={`${
              String(timer.minutes).length == 1
                ? `0${timer.minutes}`
                : timer.minutes
            }:${
              String(timer.seconds).length == 1
                ? `0${timer.seconds}`
                : timer.seconds
            }`}
            onStartStopClick={handleStartStopClick}
            onResetClick={handleResetClick}
          />
        </Grid>
      </Grid>
      <audio
        id="beep"
        src="http://soundbible.com/mp3/A-Tone-His_Self-1266414414.mp3"
      />
    </div>
  );

  // #######################################################
  function handleStartStopClick() {
    if (isRunning) {
      setIsRunning(false);
      clearInterval(myInterval);
    } else {
      setIsRunning(true);
      setMyInterval(
        setInterval(function() {
          setTimer(function({ type, minutes, seconds }) {
            // check if timer finished
            if (minutes == 0 && seconds == 0) {
              // play sound beep
              document.getElementById("beep").play();
              // if session finished
              if (type == "Session") {
                return { type: "Break", minutes: breakLength, seconds: 0 };
              } else {
                // if break finished
                return { type: "Session", minutes: sessionLength, seconds: 0 };
              }
            } else {
              return {
                type,
                minutes: seconds == 0 ? minutes - 1 : minutes,
                seconds: seconds == 0 ? 59 : seconds - 1,
              };
            }
          });
        }, 1000),
      );
    }
  }

  function handleResetClick() {
    document.getElementById("beep").pause();
    document.getElementById("beep").currentTime = 0;
    setIsRunning(false);
    clearInterval(myInterval);
    setMyInterval(null);
    setBreakLength(5);
    setSessionLength(25);
    setTimer({ type: "Session", minutes: 25, seconds: 0 });
  }

  function handleBreakDecrement() {
    if (isRunning) return;
    setBreakLength(function(prevLength) {
      let nextLength = prevLength > 1 ? prevLength - 1 : prevLength;
      !isRunning &&
        timer.type == "Break" &&
        setTimer({ type: timer.type, minutes: nextLength, seconds: 0 });
      return nextLength;
    });
  }

  function handleBreakIncrement() {
    if (isRunning) return;
    setBreakLength(function(prevLength) {
      let nextLength = prevLength < 60 ? prevLength + 1 : prevLength;
      !isRunning &&
        timer.type == "Break" &&
        setTimer({ type: timer.type, minutes: nextLength, seconds: 0 });
      return nextLength;
    });
  }

  function handleSessionDecrement() {
    if (isRunning) return;
    setSessionLength(function(prevLength) {
      let nextLength = prevLength > 1 ? prevLength - 1 : prevLength;
      !isRunning &&
        timer.type == "Session" &&
        setTimer({ type: timer.type, minutes: nextLength, seconds: 0 });
      return nextLength;
    });
  }

  function handleSessionIncrement() {
    if (isRunning) return;
    setSessionLength(function(prevLength) {
      let nextLength = prevLength < 60 ? prevLength + 1 : prevLength;
      !isRunning &&
        timer.type == "Session" &&
        setTimer({ type: timer.type, minutes: nextLength, seconds: 0 });
      return nextLength;
    });
  }
}
