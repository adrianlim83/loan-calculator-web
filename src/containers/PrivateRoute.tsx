import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({
  children,
  isAuthenticated,
  redirect,
  ...rest
}: any) => {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated ? children : <Redirect to={redirect} />
      }
    />
  );
};

export default PrivateRoute;
