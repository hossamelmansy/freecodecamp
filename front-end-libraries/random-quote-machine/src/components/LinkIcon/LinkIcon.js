import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// styles
import useStyles from "./styles";

library.add(fab);

export default function LinkIcon({ id, url, icon, backgroundColor }) {
  var classes = useStyles();

  return (
    <a
      id={id}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={classes.root}
      style={{ backgroundColor }}
    >
      <FontAwesomeIcon icon={["fab", icon]} size="lg" />
    </a>
  );
}
