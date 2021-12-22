import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(5),
  },
  title: {
    marginBottom: theme.spacing(5),
    fontWeight: "bolder",
  },
  input: {
    marginBottom: theme.spacing(1.5),
    "& p": {
      display: "flex",
      fontWeight: 800,
      marginBottom: theme.spacing(2),
      margin: 0,
    },
  },
  icon: {
    margin: theme.spacing(0.4, 1, 0, 0),
    color: theme.palette.error.light,
  },
  button: {
    marginTop: theme.spacing(3),
    padding: theme.spacing(2, 0),
    fontSize: theme.spacing(2),
  },
}));
