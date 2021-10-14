import React from "react";
import "./Navi.css";

/**
 * Render navigation button and transition page state
 * @param {*} param0
 * @returns
 */
export default class Navi extends React.Component<NaviParam> {
  render() {
    const { setPage } = this.props;
    return (
      <div>
        <button onClick={() => setPage("results")}>Results</button>
        <button onClick={() => setPage("quote")}>New Quote</button>
      </div>
    );
  }
}

interface NaviParam {
  setPage: (page: string) => void;
}
