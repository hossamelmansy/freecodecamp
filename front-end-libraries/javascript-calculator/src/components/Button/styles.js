import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
    color: "white",
    height: 50,
    margin: 1,
    fontSize: 18,
    "&:hover": {
      color: "black",
      border: "1px solid gray",
    },
  },
}));
