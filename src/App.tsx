import NavigatorBar from "./containers/NavigatorBar";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <NavigatorBar />
    </QueryClientProvider>
  );
}

export default App;
