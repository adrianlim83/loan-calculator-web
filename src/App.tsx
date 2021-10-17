import { QueryClient, QueryClientProvider } from "react-query";
import Login from "./Login";
import Dashboard from "./containers/Dashboard";
import useToken from "./components/useToken";

const App = () => {
  const queryClient = new QueryClient();

  const { token, setToken, remove } = useToken();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        {!token && (<Login setToken={setToken} />)}
        {token && (<Dashboard token={token} setToken={setToken} remove={remove}/>)}
      </QueryClientProvider>
    </>
  );
};

export default App;
