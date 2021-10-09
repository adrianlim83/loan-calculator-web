import store from "../store/quotes";
import axiosInstance from "../extensions/axios";

/**
 * An action to fetch quotes result from server api, with the outcome, dispatch it to redux store
 */
export async function fetchQuotes() {
  // Sample quote request from loan calculator api
  //        [{
  //            "terms": 36,
  //            "loanAmount": 100000.0,
  //            "interestRate": 0.1,
  //            "residualValue": 0.0,
  //            "paymentAmount": 3226.72
  //        }]
  const response = await axiosInstance.get(
    "/loan/payment/quote/list",
    {
      params: {
        timestamp: new Date().getTime(),
      },
    }
  );

  console.log("Fetch Quotes:");
  console.log(response.data);

  store.dispatch({ type: "LOAD_QUOTES", payload: response.data });
}

/**
 * An action to submit the final quote request to server api for calculating the actual payment, with the outcome, dispatch it to redux store for state
 * update
 * 
 * @param {*} quote - quote contains terms, loan amount, interest rate and residual value
 */
export async function addQuote(quote) {
  const response = await axiosInstance.post(
    "/loan/payment/quote",
    quote,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  console.log("Add Quote:");
  console.log(response.data);

  store.dispatch({ type: "ADD_QUOTE", payload: response.data });
}

/**
 * An action to get and return an approximate quote from server api to react component for quote estimation.
 * No redux store will be required here.
 * 
 * @param {*} quote - quote contains terms, loan amount, interest rate and residual value
 * @returns 
 */
export async function getApproximateQuote(quote) {
  quote.timestamp = new Date().getTime();
  const response = await axiosInstance.get(
    "/loan/approx/payment/quote",
    {
      params: quote,
    }
  );

  console.log("Get Approximate Quote:");
  console.log(response.data);

  return response.data;
}