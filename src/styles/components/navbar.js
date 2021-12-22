import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {},
  content: {
    justifyContent: "space-between",
  },
  logo: {
    fontWeight: "bold",
  },
  buttonI: {
    marginRight: "10px",
    "&:active": {
      "& svg": {
        transform: "rotateX(180deg)",
      },
    },
  },
  menu: {
    marginTop: theme.spacing(6),
    "& .MuiPopover-paper": {
      width: "25%",
    },
    "& .MuiListItem-button:hover": {
      backgroundColor: theme.palette.secondary.main,
      color: "#fff",
    },
    "& a": {
      width: "100%",
    },
  },
  drawer: {
    "& .MuiDrawer-paperAnchorRight": {
      width: "45%",
      [theme.breakpoints.down("xs")]: {
        width: "60%",
      },
    },
  },
  drawerHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: "6px",
    borderBottom: "1px solid black",

    backgroundColor: theme.palette.primary.main,
    "& button, h6": {
      fontWeight: "bold",
      color: "#fff",
    },
  },
}));
