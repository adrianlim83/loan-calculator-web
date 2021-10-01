import React, { useMemo, useState, useEffect } from "react";
import Table from "./Table";
import "./Results.css";
import { useHistory } from "react-router-dom";

import { connect } from "react-redux";

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

  return (
    <div>
      <Table columns={columns} data={quotes} />
      <button type="button" onClick={() => push("/quote")}>
        New Quote
      </button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { quotes: state.quotes };
};

export default connect(mapStateToProps)(Results);
