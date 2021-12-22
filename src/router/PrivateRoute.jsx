import { Redirect, Route } from "react-router-dom";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { saveLastPath } from "../actions/auth";

export const PrivateRoute = ({ component: Component, auth, ...rest }) => {
  const dispatch = useDispatch();

  return (
    <Route
      {...rest}
      component={(props) => {
        if (auth) {
          return <Component {...props} />;
        } else {
          dispatch(saveLastPath(rest.location.pathname));
          return <Redirect to="/benesser/login" />;
        }
      }}
    />
  );
};
PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  auth: PropTypes.bool.isRequired,
};
