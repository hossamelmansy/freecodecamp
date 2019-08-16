import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  card: {
    width: "60%",
  },
  cardHeader: {
    borderBottom: `2px solid ${theme.palette.primary.light}`,
    backgroundColor: theme.palette.primary.dark,
    color: "white",
  },
}));
