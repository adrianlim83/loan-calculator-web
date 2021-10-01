import axios from "axios";
import store from "../store/quotes";

export async function fetchQuotes() {
  // Sample payment details from loan calculator api
  //        [{
  //            "terms": 36,
  //            "loanAmount": 100000.0,
  //            "interestRate": 0.1,
  //            "residentialValue": 0.0,
  //            "exact": true,
  //            "paymentAmount": 3226.72
  //        }]
  const response = await axios.get(
    "http://localhost:8080/api/loan/payment/quote/list",
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

export async function addQuote(quote) {
  const response = await axios.post(
    "http://localhost:8080/api/loan/payment/quote",
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

export async function getApproximateQuote(quote) {
  quote.timestamp = new Date().getTime();
  const response = await axios.get(
    "http://localhost:8080/api/loan/approx/payment/quote",
    {
      params: quote,
    }
  );

  console.log("Get Approximate Quote:");
  console.log(response.data);

  return response.data;
}
