import React, { useState } from "react";
import { Grid } from "@material-ui/core";

// styles
import useStyles from "./styles";

// components
import Display from "./Display";
import Button from "./Button";

export default function App() {
  const classes = useStyles();
  const [input, setInput] = useState([]);
  const [output, setOutput] = useState("0");

  return (
    <div className={classes.root}>
      <Grid
        container
        justify="center"
        alignItems="center"
        style={{ minHeight: "100vh" }}
      >
        <Grid item container className={classes.calculatorGrid}>
          <Grid item xs={12}>
            <Display
              text={`${input.join("")}${output}`}
              color="orange"
              fontSize={20}
              height={25}
            />
          </Grid>
          <Grid item xs={12}>
            <Display id="display" text={output} />
          </Grid>

          <Grid item xs={6}>
            <Button
              id="clear"
              text="AC"
              backgroundColor="#9c0000"
              onClick={handleClick}
            />
          </Grid>
          <Grid item xs={3}>
            <Button
              id="module"
              text="%"
              backgroundColor="darkgrey"
              onClick={handleClick}
            />
          </Grid>
          <Grid item xs={3}>
            <Button
              id="divide"
              text="/"
              backgroundColor="darkgrey"
              onClick={handleClick}
            />
          </Grid>

          <Grid item xs={3}>
            <Button id="seven" text="7" onClick={handleClick} />
          </Grid>
          <Grid item xs={3}>
            <Button id="eight" text="8" onClick={handleClick} />
          </Grid>
          <Grid item xs={3}>
            <Button id="nine" text="9" onClick={handleClick} />
          </Grid>
          <Grid item xs={3}>
            <Button
              id="multiply"
              text="*"
              backgroundColor="darkgrey"
              onClick={handleClick}
            />
          </Grid>

          <Grid item xs={3}>
            <Button id="four" text="4" onClick={handleClick} />
          </Grid>
          <Grid item xs={3}>
            <Button id="five" text="5" onClick={handleClick} />
          </Grid>
          <Grid item xs={3}>
            <Button id="six" text="6" onClick={handleClick} />
          </Grid>
          <Grid item xs={3}>
            <Button
              id="subtract"
              text="-"
              backgroundColor="darkgrey"
              onClick={handleClick}
            />
          </Grid>

          <Grid item xs={3}>
            <Button id="one" text="1" onClick={handleClick} />
          </Grid>
          <Grid item xs={3}>
            <Button id="two" text="2" onClick={handleClick} />
          </Grid>
          <Grid item xs={3}>
            <Button id="three" text="3" onClick={handleClick} />
          </Grid>
          <Grid item xs={3}>
            <Button
              id="add"
              text="+"
              backgroundColor="darkgrey"
              onClick={handleClick}
            />
          </Grid>

          <Grid item xs={6}>
            <Button id="zero" text="0" onClick={handleClick} />
          </Grid>
          <Grid item xs={3}>
            <Button id="decimal" text="." onClick={handleClick} />
          </Grid>
          <Grid item xs={3}>
            <Button
              id="equals"
              text="="
              backgroundColor="#333c9e"
              onClick={handleClick}
            />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );

  // #######################################################
  function handleClick(event) {
    let pressedButton = event.target.innerText;

    // Clear
    if (isClear(pressedButton)) {
      setInput([]);
      setOutput("0");
    } else if (isDigit(pressedButton)) {
      if (output == "0") {
        setOutput(pressedButton);
      } else if (isOperator(output)) {
        setInput([...input, output]);
        setOutput(pressedButton);
      } else {
        setOutput(output + pressedButton);
      }
    } else if (isDot(pressedButton)) {
      if (isContainMorethanOneDot(output + pressedButton)) return;

      setOutput(output + pressedButton);
    } else if (isOperator(pressedButton)) {
      if (isNumber(output) || pressedButton == "-") {
        setInput([...input, output]);
        setOutput(pressedButton);
      } else {
        // replace last operator exepct - with pressedButton
        if (/[%/*+]+/.test(input)) {
          setInput(
            input
              .join("")
              .replace(/[%/*+]+/, "")
              .split(""),
          );
        }
        setOutput(pressedButton);
      }
    } else if (isEqual(pressedButton)) {
      setOutput(eval([...input, output].join("")));
      setInput([]);
    }
  }

  function isOperator(value) {
    return /^[%/*+^-]$/.test(value);
  }

  function isDigit(value) {
    return /^\d$/.test(value);
  }

  function isEqual(value) {
    return /^=$/.test(value);
  }

  function isDot(value) {
    return /^\.$/.test(value);
  }

  function isClear(value) {
    return /^AC$/.test(value);
  }

  function isNumber(value) {
    return /^[-]?([0-9]*[.])?[0-9]+$/.test(value);
  }

  function isContainMorethanOneDot(value) {
    return value.match(/\./g).length > 1;
  }
}
