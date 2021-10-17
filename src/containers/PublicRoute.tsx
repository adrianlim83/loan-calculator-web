import { Route, Redirect } from "react-router-dom";

const PublicRoute = ({ children, isAuthenticated, redirect, ...rest }: any) => {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        !isAuthenticated ? children : <Redirect to={redirect} />
      }
    />
  );
};

export default PublicRoute;
