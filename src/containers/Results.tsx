import React, { useMemo } from "react";
import Table from "../components/Table";
import "./Results.css";
import { useQuery } from "react-query";
import { fetchQuotes } from "../actions/quotes";

/**
 * Receive the quotes result from redux states, then render the table.
 *
 * @param {*} param0 - quotes result retrieved through redux state
 *
 * @returns results page
 */
function Results() {
  const { data, status } = useQuery("results", fetchQuotes);

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
  console.log(data);
  /**
   * Render the results through Table component
   * With a "New Qoute" button, which navigate user to enter new quote page (through router) when pressed
   */
  return (
    <>
      {status === "loading" && <div>Loading data...</div>}
      {status === "error" && <div>Error fetching results</div>}
      {status === "success" && <Table columns={columns} data={data} />}
    </>
  );
}

export default Results;
