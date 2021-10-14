import Quote from "./containers/Quote";
import Results from "./containers/Results";
import { useState } from "react";
import Navi from "./containers/Navi";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  const [page, setPage] = useState("results");
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Navi setPage={setPage} />

        {page === "results" ? <Results /> : <Quote setPage={setPage}/>}
      </div>
    </QueryClientProvider>
  );
}

export default App;
