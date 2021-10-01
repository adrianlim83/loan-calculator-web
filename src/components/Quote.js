import React, { useState } from "react";
import "./Quote.css";
import { useHistory } from "react-router-dom";
import NumberInput from "./NumberInput";
import { addQuote, getApproximateQuote } from "../actions/quotes";
import ReactDOM from "react-dom";
import ErrorMessage from "./ErrorMessage";

/**
 * A component/ container page which allowed user to input the quote for estimation payment or final payment
 * if they are happy with the outcome
 * 
 * @returns quote page
 */
function Quote() {
  /**
   * Default value binded to the component
   */
  const [quote] = useState({
    terms: 36,
    loanAmount: 100000.0,
    interestRate: 10,
    residualValue: 0.0,
  });
  const [loanPaymentAmount, setLoanPaymentAmount] = useState(0);
  const [errorMessage, setErrorMessage] = useState();  

  const { push } = useHistory();

  /**
   * Invoke an action to submit the final quote when user press on save button.
   * If it success, navigate the link to Results component through router
   * @param {*} e - event
   */
  const onSave = (e) => {
    e.preventDefault(); // Stop form submit

    addQuote(quote)
      .then((response) => {
        push("/");
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  /**
   * Invoke an action to calculate the approximate quote when the user changing the
   * quote request. If it success, loan payment amount tag will be updated through state
   */
  const onApproximatePayment = () => {
    getApproximateQuote(quote)
      .then((response) => {
        setLoanPaymentAmount(response.paymentAmount);
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  /**
   * Page containinig the quote form
   */
  return (
    <form onSubmit={onSave}>
      <h1>Calculate Loan Payment</h1>
      <ErrorMessage message={errorMessage} />
      <div className="loan-payment">
        <label>Term (in months):</label>
        <NumberInput
          name="terms"
          value={quote.terms}
          onChangeEvent={(v) => {
            quote.terms = v;
            onApproximatePayment();
          }}
          required={true}
          allowDecimals={false}
        />

        <label>Loan Amount:</label>
        <NumberInput
          name="loanAmount"
          value={quote.loanAmount}
          onChangeEvent={(v) => {
            quote.loanAmount = v;
            onApproximatePayment();
          }}
          required={true}
        />

        <label>Annual Interest Rate:</label>
        <NumberInput
          name="interestRate"
          value={quote.interestRate}
          onChangeEvent={(v) => {
            quote.interestRate = v;
            onApproximatePayment();
          }}
          required={true}
        />

        <label>Residual Value:</label>
        <NumberInput
          name="residualValue"
          value={quote.residualValue}
          onChangeEvent={(v) => {
            quote.residualValue = v;
            onApproximatePayment();
          }}
          required={true}
        />

        <button>Save</button>

        <label>Loan Payment Amount: {loanPaymentAmount}</label>
      </div>
    </form>
  );
}

export default Quote;