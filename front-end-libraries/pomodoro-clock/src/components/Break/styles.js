import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  label: {
    marginBottom: 5,
    color: "white",
    fontWeight: "bold",
  },
  container: {
    display: "flex",
    justifyContent: "space-evenly",
    width: "100%",
  },
  button: {
    color: "white",
    fontWeight: "bold",
  },
  counter: {
    color: "white",
    fontWeight: "bold",
    marginTop: 10,
  },
}));
