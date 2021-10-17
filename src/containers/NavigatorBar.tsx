import React from "react";
import "./NavigatorBar.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect
} from "react-router-dom";
import Results from "./Results";
import Quote from "./Quote";
import Login from "../Login";

/**
 * Render navigation bar with the transition route
 * @param {*} param0
 * @returns
 */
export default class NavigatorBar extends React.Component<NavigatorBarProp> {

  render() {
    return (
      <Router>
        <div className="navigation-bar">
          <ul className="menu-bar">
            <li>
              <NavLink exact activeClassName="active" to="/">
                Results
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/quote">
                New Quote
              </NavLink>
            </li>
          </ul>
          <ul className="setting-bar">
            <li>
              <NavLink activeClassName="active" to="/login" onClick={() => this.props.remove()}>
                Logout
              </NavLink>
            </li>
          </ul>
        </div>
        <Switch>
          <Route exact path="/">
            <Results />
          </Route>
          <Route path="/quote">
            <Quote />
          </Route>
          <Route path="/login">
            {!this.props.token && (<Login setToken={this.props.setToken} />)}
            {this.props.token && (<Redirect to="/" />)}
          </Route>
        </Switch>
      </Router>
    );
  }
}

interface NavigatorBarProp {
  token: TokenProp;
  setToken: (token: TokenProp) => void;
  remove: () => void;
}

interface TokenProp {
  access_token: string;
}