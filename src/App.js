import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useEffect } from "react";
import Quote from "./components/Quote";
import Results from "./components/Results";

/**
 * Import redux's provider and store
 */
import { Provider } from "react-redux";
import store from "./redux/store";
import { fetchQuotes } from "./actions/quotes";
window.store = store;

function App() {
  /**
   * Invoke fetch quotes' action during state reset.
   * For instance, when the user reloading the page
   */
  useEffect(() => {
    fetchQuotes();
  }, []);

  return (
    /**
     * Intercept and delegate the store which contains the state to Results component for update.
     * When the new quote has been added, a new quote list will be loaded into Results component too
     */
    /**
     * When the user first visited the web, this will basically redirecting them into the Results component through router.
     * When they press on "New Quote" link from the Results component, this will route them to Quote component, a page which
     * required them to fill in for new quote
     */
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