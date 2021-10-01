import { BrowserRouter, Switch, Route } from "react-router-dom";
import Quote from "./components/Quote";
import Results from "./components/Results";

import { Provider } from "react-redux";
import store from "./store/quotes";
import { useEffect } from "react";
import { fetchQuotes } from "./actions/quotes";
window.store = store;

function App() {
  useEffect(() => {
    fetchQuotes();
  }, []);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Results />
          </Route>
          <Route path="/quote">
            <Quote />
          </Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
