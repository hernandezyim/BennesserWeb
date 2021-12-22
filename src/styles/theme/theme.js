import { createTheme } from "@material-ui/core";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#8b5fbf",
    },
    secondary: {
      main: "#8d3474",
    },
    error: {
      main: "#B00020",
      light: "#d93025",
      dark: "#d50000",
    },
  },
  typography: {
    button: {
      textTransform: "none",
    },
    fontWeight: 800,
  },
});

// #8b5fbf, #8d3474 ,#d183c9, #e3879e, #fecoce
