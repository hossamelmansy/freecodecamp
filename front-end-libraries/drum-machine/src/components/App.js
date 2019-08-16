import React, { useState } from "react";
import { Grid, Paper, Typography } from "@material-ui/core";

// styles
import useStyles from "./styles";

// components
import DrumPad from "./DrumPad";

// contstants
const DRUMS = [
  {
    text: "Q",
    display: "whuuup",
    src:
      "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Electronic%20Hits/75[kb]whuuup.aif.mp3",
  },
  {
    text: "W",
    display: "whuuup2",
    src:
      "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Electronic%20Hits/117[kb]whuuup2.aif.mp3",
  },
  {
    text: "E",
    display: "wistful-bass",
    src:
      "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Electronic%20Hits/861[kb]wistful-bass-ephemera-two-hit.wav.mp3",
  },
  {
    text: "A",
    display: "wobble",
    src:
      "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Electronic%20Hits/74[kb]wobble.aif.mp3",
  },
  {
    text: "S",
    display: "woodbox",
    src:
      "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Electronic%20Hits/9[kb]woodbox.aif.mp3",
  },
  {
    text: "D",
    display: "zap-rattle",
    src:
      "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Electronic%20Hits/105[kb]zap-rattle.aif.mp3",
  },
  {
    text: "Z",
    display: "zapverb",
    src:
      "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Electronic%20Hits/43[kb]zapverb.aif.mp3",
  },
  {
    text: "X",
    display: "zoop",
    src:
      "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Electronic%20Hits/16[kb]zoop.aif.mp3",
  },
  {
    text: "C",
    display: "whupufo",
    src:
      "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Electronic%20Hits/55[kb]whupufo.aif.mp3",
  },
];

export default function App() {
  var classes = useStyles();
  var [display, setDisplay] = useState("");

  return (
    <div className={classes.root}>
      <Grid
        container
        justify="center"
        alignItems="center"
        style={{ minHeight: "100vh" }}
      >
        <Paper className={classes.paper}>
          <Grid id="drum-machine" container>
            <Grid item align="center" lg={12} md={12} sm={12} xs={12}>
              <Typography id="display" variant="h3" color="primary">
                {display}
              </Typography>
            </Grid>

            {DRUMS.map(function({ text, display, src }) {
              return (
                <Grid item align="center" lg={4} md={4} sm={4} xs={1}>
                  <DrumPad
                    key={text}
                    id={display}
                    text={text}
                    src={src}
                    onPlay={() => setDisplay(display)}
                  />
                </Grid>
              );
            })}
          </Grid>
        </Paper>
      </Grid>
    </div>
  );
}
