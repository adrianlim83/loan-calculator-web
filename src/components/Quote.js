
import React, { useState } from 'react';
import axios from 'axios';
import "./Quote.css";
import { useHistory } from 'react-router-dom';
import NumberInput from "./NumberInput";

function Quote() {
    const [quote, setQuote] = useState({
        terms: 36,
        loanAmount: 100000.0,
        interestRate: 10,
        residualValue: 0.0
    });
    const [loanPaymentAmount, setLoanPaymentAmount] = useState(0)

    const {push} = useHistory();

    const onSave = (e) => {
        e.preventDefault() // Stop form submit

        const headers = {
            'Content-Type': 'application/json'
        }

        axios.post('http://localhost:8080/api/loan/payment/quote', quote, {
            headers: headers
        }).then((response) => {
            push("/");
        }).catch((error) => {
            console.log(error)
        })
    }

    const onApproximatePayment = () => {
        quote.timestamp = new Date().getTime();
        axios.get('http://localhost:8080/api/loan/approx/payment/quote', {
            params: quote
        }).then((response) => {
            setLoanPaymentAmount(response.data.paymentAmount);
        }).catch((error) => {
            console.log(error)
        });

    }

    return (
            <form onSubmit={onSave}>
                <h1>Calculate Loan Payment</h1>
                <div className="loan-payment">
                    <label>
                        Term (in months):
                    </label>
                    <NumberInput
                        name="terms"
                        value={quote.terms}
                        onChange={event => {
                                quote.terms = event.target.value;
                                onApproximatePayment();
                            }}
                        required="true"
                        decimal="false"/>
            
                    <label>
                        Loan Amount:
                    </label>
                    <NumberInput
                        name="loanAmount"
                        value={quote.loanAmount}
                        onChange={event => {
                                quote.loanAmount = event.target.value;
                                onApproximatePayment();
                            }}
                        required="true" />
            
                    <label>
                        Annual Interest Rate:
                    </label>
                    <NumberInput
                        name="interestRate"
                        value={quote.interestRate}
                        onChange={event => {
                                quote.interestRate = event.target.value;
                                onApproximatePayment();
                            }}
                        required="true" />
            
                    <label>
                        Residual Value:
                    </label>
                    <NumberInput
                        name="residualValue"
                        value={quote.residualValue}
                        onChange={event => {
                                quote.residualValue = event.target.value;
                                onApproximatePayment();
                            }}
                        required="true" />
            
                    <button>
                        Save
                    </button>
            
                    <label>
                        Loan Payment Amount: {loanPaymentAmount}
                    </label>
                </div>
            </form>

            );
}

export default Quote;
