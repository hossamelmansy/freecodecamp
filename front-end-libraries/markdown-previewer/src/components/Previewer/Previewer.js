import React from "react";
import { Card, CardHeader, CardContent } from "@material-ui/core";
import marked from "marked";
import { sanitize } from "dompurify";

// styles
import useStyles from "./styles";

marked.setOptions({
  breaks: true,
});

export default function Previewer({ value }) {
  var classes = useStyles();

  // open links in new tabs
  const renderer = new marked.Renderer();
  renderer.link = function(href, title, text) {
    return `<a href="${href}" title="${title}" target="_blank">${text}</a>`;
  };

  return (
    <Card className={classes.card}>
      <CardHeader title="Previewer" className={classes.cardHeader} />
      <CardContent>
        <div
          id="preview"
          dangerouslySetInnerHTML={{
            __html: sanitize(marked(value, { renderer })),
          }}
        />
      </CardContent>
    </Card>
  );
}
