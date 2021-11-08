import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ path, component, isAuthenticated }) => {
  const PrivateRouteComponent = () => {
    return isAuthenticated ? (
      React.createElement(component)
    ) : (
      <Redirect to="/signIn"></Redirect>
    );
  };
  return <Route path={path} render={PrivateRouteComponent} />;
};

export default PrivateRoute;
