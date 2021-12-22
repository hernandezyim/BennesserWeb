import { useSelector } from "react-redux";
import { BrowserRouter, Switch, Redirect } from "react-router-dom";
import { LoginScreen } from "../components/pages/Log/LoginScreen";
import { DashBoardRoutes } from "./DashBoardRoutes";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
  const { lastpath, logged } = useSelector((state) => state.auth);

  return (
    <BrowserRouter>
      <div>
        <Switch>
          <PublicRoute
            exact
            path="/benesser/login"
            component={LoginScreen}
            auth={logged}
            lastpath={lastpath}
          />
          <PrivateRoute path="/" component={DashBoardRoutes} auth={logged} />
          <Redirect to="/benesser" />
        </Switch>
      </div>
    </BrowserRouter>
  );
};
