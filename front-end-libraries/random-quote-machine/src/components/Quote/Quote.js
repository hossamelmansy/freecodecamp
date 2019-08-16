import React, { useState, useEffect } from "react";
import { Grid, Paper, Typography, Button } from "@material-ui/core";
import axios from "axios";
import randomColor from "randomcolor";

// styles
import useStyles from "./styles";

// context
import { useLayoutState, useLayoutDispatch } from "../../context/LayoutContext";

// components
import LinkIcon from "../LinkIcon";

export default function Quote() {
  var classes = useStyles();
  var [quote, setQuote] = useState("");
  var [author, setAuthor] = useState("");
  var { themeColor } = useLayoutState();
  var layoutDispatch = useLayoutDispatch();

  useEffect(function() {
    getQuote();
  }, []);

  return (
    <Paper id="quote-box" className={classes.root}>
      <Grid container direction="column" spacing={1}>
        <Grid item>
          <Typography
            id="text"
            variant="h4"
            align="center"
            style={{ color: themeColor }}
            gutterBottom
          >
            <strong>❝ </strong>
            {quote}
          </Typography>
        </Grid>
      </Grid>

      <Grid item container justify="flex-end">
        <Typography
          id="author"
          variant="subtitle1"
          style={{ color: themeColor }}
          gutterBottom
        >
          - {author}
        </Typography>
      </Grid>

      <Grid item container justify="space-between" style={{ marginTop: 20 }}>
        <div style={{ display: "flex" }}>
          <LinkIcon
            id="tweet-quote"
            url={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="${quote}" ${author}`}
            icon="twitter"
            backgroundColor={themeColor}
          />
          <LinkIcon
            url="https://www.tumblr.com"
            icon="tumblr"
            backgroundColor={themeColor}
          />
        </div>

        <Grid item>
          <Button
            id="new-quote"
            variant="contained"
            className={classes.button}
            style={{ backgroundColor: themeColor }}
            onClick={() => getQuote()}
          >
            New quote
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );

  // ##########################################
  async function getQuote() {
    var result = await axios.get(
      "https://programming-quotes-api.herokuapp.com/quotes/random",
    );
    var { en: quote, author } = result.data;

    layoutDispatch({
      type: "CHANGE_THEME_COLOR",
      themeColor: randomColor(),
    });
    setQuote(quote);
    setAuthor(author);
  }
}
