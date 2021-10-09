import React, { useMemo } from "react";
import Table from "./Table";
import "./Results.css";
import { useHistory } from "react-router-dom";

import { connect } from "react-redux";

/**
 * Receive the quotes result from redux states, then render the table.
 * 
 * @param {*} param0 - quotes result retrieved through redux state
 * 
 * @returns results page
 */
function Results({ quotes }) {
  console.log("Received quote:");
  console.log(quotes);

  const columns = useMemo(
    () => [
      {
        Header: "Results",
        columns: [
          {
            Header: "Terms",
            accessor: "terms",
          },
          {
            Header: "Loan Amount",
            accessor: "loanAmount",
          },
          {
            Header: "Interest Rate",
            accessor: "interestRate",
          },
          {
            Header: "Residual Value",
            accessor: "residualValue",
          },
          {
            Header: "Loan Fee Amount",
            accessor: "paymentAmount",
          },
        ],
      },
    ],
    []
  );

  const { push } = useHistory();

  /**
   * Render the results through Table component
   * With a "New Qoute" button, which navigate user to enter new quote page (through router) when pressed
   */
  return (
    <>
      <Table columns={columns} data={quotes} />
      <button type="button" onClick={() => push("/quote")}>
        New Quote
      </button>
    </>
  );
}

/**
 * Connect and retrieve the quotes result through redux state
 * @param {*} state - state from redux state
 * @returns 
 */
const mapStateToProps = (state) => {
  return { quotes: state.quotes };
};

export default connect(mapStateToProps)(Results);