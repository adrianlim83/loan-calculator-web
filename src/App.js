import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import Quote from "./components/Quote"
import Results from "./components/Results"


function App() {
    return (
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
            );
}

export default App;