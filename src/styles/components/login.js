import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    minHeight: "100vh",
    backgroundImage: 'url("/assets/bgLogin.jpg")',
    backgroundPosition: "center",
    backgroundSize: "cover",
  },
  modal: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    color: theme.palette.secondary.dark,
    fontSize: theme.spacing(15),
  },
  paper: {
    width: "60%",
    overflow: "hidden",
    [theme.breakpoints.down("sm")]: {
      width: "90%",
    },
  },
}));
