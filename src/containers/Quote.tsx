import React, { useState } from "react";
import "./Quote.css";
import NumberInput from "../components/NumberInput";
import { addQuote, getApproximateQuote } from "../actions/quotes";
import ErrorMessage from "../components/ErrorMessage";
import { useMutation } from "react-query";
import { useHistory } from "react-router";
import Button from "../components/Button";

/**
 * Container page which allowed user to input the quote for estimation payment or final payment
 * if they are happy with the outcome
 *
 * @returns quote page
 */
const Quote = () => {
  /**
   * Default quote state binded to the component
   */
  const [quote] = useState<QuoteState>({
    terms: 36,
    loanAmount: 100000.0,
    interestRate: 10,
    residualValue: 0.0,
    paymentAmount: 0,
  });

  /**
   * Mutate the quote creation upon saving
   */
  const finalQuoteMutation = useMutation<QuoteState, Error, QuoteState>(
    addQuote
  );

  /**
   * Mutate the quote estimation upon changes
   */
  const approximateQuoteMutation = useMutation<QuoteState, Error, QuoteState>(
    () => getApproximateQuote(quote)
  );

  const { push } = useHistory();

  /**
   * Page containing quote form
   */
  return (
    <>
      {finalQuoteMutation.isLoading && <div>Loading data...</div>}
      {finalQuoteMutation.isError && (
        <ErrorMessage message={finalQuoteMutation.error.message} />
      )}
      {finalQuoteMutation.isSuccess && push("/")}

      <h2>Calculate Loan Payment</h2>
      <div className="loan-payment-form">
        <label>Term (in months):</label>
        <NumberInput
          name="terms"
          value={String(quote.terms)}
          onChangeEvent={(v) => {
            quote.terms = parseInt(v);
            approximateQuoteMutation.mutate(quote);
          }}
          required={true}
          allowDecimals={false}
        />

        <label>Loan Amount:</label>
        <NumberInput
          name="loanAmount"
          value={String(quote.loanAmount)}
          onChangeEvent={(v) => {
            quote.loanAmount = parseFloat(v);
            approximateQuoteMutation.mutate(quote);
          }}
          required={true}
        />

        <label>Annual Interest Rate:</label>
        <NumberInput
          name="interestRate"
          value={String(quote.interestRate)}
          onChangeEvent={(v) => {
            quote.interestRate = parseFloat(v);
            approximateQuoteMutation.mutate(quote);
          }}
          required={true}
        />

        <label>Residual Value:</label>
        <NumberInput
          name="residualValue"
          value={String(quote.residualValue)}
          onChangeEvent={(v) => {
            quote.residualValue = parseFloat(v);
            approximateQuoteMutation.mutate(quote);
          }}
          required={true}
        />
      </div>
      <div className="loan-payment-outcome">
        {approximateQuoteMutation.isLoading && <label>Loading...</label>}
        {approximateQuoteMutation.isSuccess && (
          <>
            <label>Loan Payment Amount:</label>
            <label>{approximateQuoteMutation.data.paymentAmount}</label>
          </>
        )}
      </div>
      <div className="loan-payment-action">
        <Button value="Save" onClick={() => finalQuoteMutation.mutate(quote)} />

        {approximateQuoteMutation.isError && (
          <ErrorMessage message={approximateQuoteMutation.error.message} />
        )}
      </div>
    </>
  );
};

interface QuoteState {
  terms: number;
  loanAmount: number;
  interestRate: number;
  residualValue: number;
  paymentAmount: number;
}

export default Quote;
