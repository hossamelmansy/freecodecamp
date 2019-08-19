import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  root: {
    flexGrow: 1,
    display: "flex",
    direction: "column",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flexGrow: 1,
    border: "3px solid black",
    borderRadius: 10,
    height: 160,
    width: 160,
    padding: 5,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    color: "white",
    fontWeight: "bold",
  },
}));
