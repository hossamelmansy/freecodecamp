import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  "drum-pad": {
    backgroundColor: theme.palette.primary.dark,
    color: "white",
    width: 80,
    height: 80,
    margin: 5,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    cursor: "pointer",
    "&:active": {
      backgroundColor: theme.palette.secondary.main,
    },
  },
}));
