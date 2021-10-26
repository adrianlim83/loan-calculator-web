import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import Results from "./Results";
import Quote from "./Quote";
import { logout } from "../actions/auth";
import styled from "styled-components";
import { mediaQuery } from "../components/MediaQuery";


// Styles contain navigator container, links
const Styles = {
  NavLink: styled(NavLink)`
    text-decoration: none;
    color: #0e151d;
    padding: 10px 20px;
    border-radius: 5px;
    background: #fff;
    transition: all ease-in-out 0.2s;

    &.hover,
    &.active {
      background: rgb(166, 175, 255);
      transition: all ease-in-out 0.2s;
    }
  `,

  Container: styled.div`
    display: grid;
    grid-template-columns: auto;
    height: max-content;

    ${mediaQuery("tablet")`
      display: grid;
      grid-template-columns: 4fr 1fr;
      margin-bottom: 1rem;
      padding: 1rem;
    `};
  `,

  Ul: styled.ul`
    list-style: none;
    gap: 2rem;
    display: grid;
    grid-template-columns: auto;
    text-align: center;

    ${mediaQuery("tablet")`
      list-style: none;
      display: flex;
    `};
  `,

  Li: styled.li`

  &a:hover {
    background-color: #0a66c2;
    color: #fff;
  }
  `
}


/**
 * Render navigation bar with the transition route
 * @param {*} param0
 * @returns
 */
export default class NavigatorBar extends React.Component {
  render() {
    return (
      <Router>
        <Styles.Container>
          <Styles.Ul>
            <Styles.Li>
              <Styles.NavLink exact activeClassName="active" to="/">
                Results
              </Styles.NavLink>
            </Styles.Li>
            <Styles.Li>
              <Styles.NavLink activeClassName="active" to="/quote">
                New Quote
              </Styles.NavLink>
            </Styles.Li>
          </Styles.Ul>
          <Styles.Ul>
            <Styles.Li>
              <Styles.NavLink
                activeClassName="active"
                to="/login"
                onClick={() => logout()}
              >
                Logout
              </Styles.NavLink>
            </Styles.Li>
          </Styles.Ul>
        </Styles.Container>
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
