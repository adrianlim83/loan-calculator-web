import React from "react";
import "./Navi.css";

/**
 * Render navigation button and transition page state
 * @param {*} param0 
 * @returns 
 */
function Navi({setPage}) {
  return (
    <div>
      <button onClick={() => setPage('results')}>Results</button>
      <button onClick={() => setPage('quote')}>New Quote</button>
    </div>
  );
}

export default Navi;
