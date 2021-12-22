import { Provider } from "react-redux";
import { store } from "./store/store";
import { AppRouter } from "./router/AppRouter";
import { ThemeProvider } from "@material-ui/styles";
import { theme } from "./styles/theme/theme";

export const AppMain = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <AppRouter />
      </ThemeProvider>
    </Provider>
  );
};
