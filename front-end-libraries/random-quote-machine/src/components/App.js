import React from "react";
import { Grid } from "@material-ui/core";

// styles
import useStyles from "./styles";

// context
import { useLayoutState } from "../context/LayoutContext";

// components
import Quote from "./Quote";

export default function App() {
  var classes = useStyles();
  var { themeColor } = useLayoutState();

  return (
    <div className={classes.root} style={{ backgroundColor: themeColor }}>
      <Grid
        container
        spacing={0}
        justify="center"
        alignItems="center"
        style={{ minHeight: "100vh" }}
      >
        <Grid item lg={4} md={6} sm={8} xs={10}>
          <Quote />
        </Grid>
      </Grid>
    </div>
  );

  // ###################################################
}
