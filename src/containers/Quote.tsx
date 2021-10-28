import React, { useState } from "react";
import "./Quote.css";
import NumberInput from "../components/NumberInput";
import { addQuote, getApproximateQuote } from "../actions/quotes";
import ErrorMessage from "../components/ErrorMessage";
import { useMutation } from "react-query";
import { useHistory } from "react-router";
import Button from "../components/Button";
import Label from "../components/Label";
import Datepicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';

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

  // TESTing only
  const [date] = useState();

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
      {finalQuoteMutation.isLoading && <Label value="Saving..." />}
      {finalQuoteMutation.isError && (
        <ErrorMessage message={finalQuoteMutation.error.message} />
      )}
      {finalQuoteMutation.isSuccess && push("/")}

      {approximateQuoteMutation.isError && (
        <ErrorMessage message={approximateQuoteMutation.error.message} />
      )}

      <h2>Calculate Loan Payment</h2>
      <div className="loan-payment-form">
        <Label value="Term (in months):" />
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

        <Label value="Loan Amount:" />
        <NumberInput
          name="loanAmount"
          value={String(quote.loanAmount)}
          onChangeEvent={(v) => {
            quote.loanAmount = parseFloat(v);
            approximateQuoteMutation.mutate(quote);
          }}
          required={true}
        />

        <Label value="Annual Interest Rate:" />
        <NumberInput
          name="interestRate"
          value={String(quote.interestRate)}
          onChangeEvent={(v) => {
            quote.interestRate = parseFloat(v);
            approximateQuoteMutation.mutate(quote);
          }}
          required={true}
        />

        <Label value="Residual Value:" />
        <NumberInput
          name="residualValue"
          value={String(quote.residualValue)}
          onChangeEvent={(v) => {
            quote.residualValue = parseFloat(v);
            approximateQuoteMutation.mutate(quote);
          }}
          required={true}
        />

        <Label value="Test Date:" />
        <Datepicker
          required
          onChange={(e) => date}
          showTimeSelect
          dateFormat="MM/dd/yyyy, hh:mm a"
          className="Datepicker pa2"
          minDate={new Date()}
          placeholderText="Select a date"
        />
      </div>
      <div className="loan-payment-outcome">
        {approximateQuoteMutation.isLoading && <Label value="Calculating..." />}
        {approximateQuoteMutation.isSuccess && (
          <>
            <Label value="Loan Payment Amount:" />
            <Label value={approximateQuoteMutation.data.paymentAmount} />
          </>
        )}
      </div>
      <div className="loan-payment-action">
        <Button value="Save" onClick={() => finalQuoteMutation.mutate(quote)} />
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
