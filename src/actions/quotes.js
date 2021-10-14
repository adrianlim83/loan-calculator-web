import axiosInstance from "../extensions/axios";

/**
 * An action to fetch quotes result from server api
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
  const {data} = await axiosInstance.get("/loan/payment/quote/list");
  return data;
}

/**
 * An action to submit the final quote request to server api for calculating the actual payment
 *
 * @param {*} quote - quote contains terms, loan amount, interest rate and residual value
 */
export async function addQuote(quote) {
  const {data} = await axiosInstance.post("/loan/payment/quote", quote, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  return data;
}

/**
 * An action to get and return an approximate quote from server api to react component for quote estimation.
 *
 * @param {*} quote - quote contains terms, loan amount, interest rate and residual value
 * @returns
 */
export async function getApproximateQuote(quote) {
  const {data} = await axiosInstance.get("/loan/approx/payment/quote", {
    params: quote
  });
  console.log(data)
  return data;
}
