import React, { useMemo } from "react";
import Table from "../components/Table";
import "./Results.css";
import { useQuery } from "react-query";
import { fetchQuotes } from "../actions/quotes";
import Label from "../components/Label";
import ErrorMessage from "../components/ErrorMessage";

/**
 * Receive the quotes result from redux states, then render the table.
 *
 * @param {*} param0 - quotes result retrieved through redux state
 *
 * @returns results page
 */
function Results() {
  const { data, error, status } = useQuery<QuoteState, Error, String>("results", fetchQuotes);

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
      {status === "loading" && <Label value="Searching..." />}
      {status === "error" && <ErrorMessage message={error?.message} />}
      {status === "success" && <Table columns={columns} data={data} />}
    </>
  );
}

interface QuoteState {
  id: string;
  terms: number;
  loanAmount: number;
  interestRate: number;
  residualValue: number;
  paymentAmount: number;
}

export default Results;
