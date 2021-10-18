import { QueryClient, QueryClientProvider } from "react-query";
import Login from "./containers/Login";
import Dashboard from "./containers/Dashboard";
import PublicRoute from "./containers/PublicRoute";
import PrivateRoute from "./containers/PrivateRoute";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { useAuth } from "./actions/auth";

const App = () => {
  const queryClient = new QueryClient();

  const [isAuthenticated] = useAuth();

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
              <Login />
            </PublicRoute>

            <PrivateRoute
              path="/*"
              isAuthenticated={isAuthenticated}
              redirect="/login"
            >
              <Dashboard />
            </PrivateRoute>
          </Switch>
        </Router>
      </QueryClientProvider>
    </>
  );
};

export default App;
