import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  textarea: {
    fontSize: 16,
    resize: "vertical",
    borderRadius: 3,
  },
  cardHeader: {
    borderBottom: `2px solid ${theme.palette.primary.light}`,
    backgroundColor: theme.palette.primary.dark,
    color: "white",
  },
}));
