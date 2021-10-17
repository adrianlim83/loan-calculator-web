import NavigatorBar from "./NavigatorBar";
import { QueryClient, QueryClientProvider } from "react-query";

/**
 * @returns Dashbaord
 */
const Dashboard = (props: DashboardProp) => {
  const queryClient = new QueryClient();

  return (
      <QueryClientProvider client={queryClient}>
          <NavigatorBar token={props.token} setToken={props.setToken} remove={props.remove}/>
      </QueryClientProvider>
  );
};

interface DashboardProp {
  token: TokenProp
  setToken: (token: TokenProp) => void;
  remove: () => void;
}

interface TokenProp {
  access_token: string;
}

export default Dashboard;
