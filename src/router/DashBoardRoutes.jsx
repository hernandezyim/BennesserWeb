import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Modal } from "@material-ui/core";
import { useSelector } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import { Navbar } from "../components/Navbar/Navbar";
import { ClientsScreen } from "../components/pages/Clients/ClientsScreen";
import { HomeScreen } from "../components/pages/Home/HomeScreen";
import { useStyles as ModalStyles } from "../styles/components/login";

export const DashBoardRoutes = () => {
  const { modal, icon } = ModalStyles();

  const { loading } = useSelector((state) => state.ui);

  return (
    <div>
      <Modal className={modal} open={loading}>
        <Box>
          <FontAwesomeIcon className={icon} icon="certificate" pulse />
        </Box>
      </Modal>
      <Navbar />
      <Switch>
        <Route
          exact
          path="/benesser/mantenimientos/clientes"
          component={ClientsScreen}
        />
        <Route exact path="/benesser" component={HomeScreen} />
        <Redirect to="/benesser" />
      </Switch>
    </div>
  );
};
