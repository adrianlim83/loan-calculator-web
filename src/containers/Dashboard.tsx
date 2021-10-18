import NavigatorBar from "./NavigatorBar";
import { QueryClient, QueryClientProvider } from "react-query";

/**
 * @returns Dashbaord
 */
const Dashboard = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <NavigatorBar />
    </QueryClientProvider>
  );
};

export default Dashboard;
