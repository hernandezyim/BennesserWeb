import { Redirect, Route } from "react-router-dom";
import PropTypes from "prop-types";

export const PublicRoute = ({
  component: Component,
  auth,
  lastpath,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      component={(props) =>
        auth ? <Redirect to={lastpath} /> : <Component {...props} />
      }
    />
  );
};

PublicRoute.propTypes = {
  component: PropTypes.func.isRequired,
  auth: PropTypes.bool.isRequired,
};
