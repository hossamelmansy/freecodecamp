import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.primary.light,
  },
  calculatorGrid: {
    width: "20%",
    backgroundColor: "black",
    border: "2px solid gray",
    padding: 5,
  },
}));
