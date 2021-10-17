import { QueryClient, QueryClientProvider } from "react-query";
import Login from "./containers/Login";
import Dashboard from "./containers/Dashboard";
import PublicRoute from "./containers/PublicRoute";
import useToken from "./components/useToken";
import PrivateRoute from "./containers/PrivateRoute";
import { BrowserRouter as Router, Switch } from "react-router-dom";

const App = () => {
  const queryClient = new QueryClient();

  const { isAuthenticated, token, setToken, remove } = useToken();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Switch>
            <PublicRoute
              path="/login"
              isAuthenticated={isAuthenticated}
              redirect="/"
            >
              <Login setToken={setToken} />
            </PublicRoute>

            <PrivateRoute
              path="/*"
              isAuthenticated={isAuthenticated}
              redirect="/login"
            >
              <Dashboard token={token} setToken={setToken} remove={remove} />
            </PrivateRoute>
          </Switch>
        </Router>
      </QueryClientProvider>
    </>
  );
};

export default App;
