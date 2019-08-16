import React from "react";
import { Card, CardHeader, CardContent } from "@material-ui/core";

// styles
import useStyles from "./styles";

export default function Editor({ value, onChange }) {
  var classes = useStyles();

  return (
    <Card>
      <CardHeader title="Editor" className={classes.cardHeader} />
      <CardContent>
        <textarea
          id="editor"
          className={classes.textarea}
          rows={15}
          cols={100}
          value={value}
          onChange={handleChange}
        />
      </CardContent>
    </Card>
  );

  // ###################################
  function handleChange(event) {
    onChange(event.target.value);
  }
}
