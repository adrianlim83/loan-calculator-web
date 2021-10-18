import React from "react";
import "./NavigatorBar.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import Results from "./Results";
import Quote from "./Quote";
import { logout } from "../actions/auth";

/**
 * Render navigation bar with the transition route
 * @param {*} param0
 * @returns
 */
export default class NavigatorBar extends React.Component {
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
              <NavLink
                activeClassName="active"
                to="/login"
                onClick={() => logout()}
              >
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
        </Switch>
      </Router>
    );
  }
}